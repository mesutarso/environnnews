import axios from 'axios'
import Link from 'next/link'
import Button from '@material-ui/core/Button';
import Image from 'next/image'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import css from './detail_admin_article.styled.scss'
import Layout from '../../../../components/layout-admin/layout_admin'
import CardContentPageAdmin from '../../../../components/card-content-page-admin/card_content_page_admin'
import Modal from '../../../../components/modal/modal'
import auth0 from '../../../../utils/auth0'

import IComment from '../../../../entities/comment'

interface IArticle{
    article?: {
        titre: string,
        attaque?: string;
        categorie: string,
        auteur: string,
        file: string,
        contenu: string,
        comments: IComment[],
        createdAt: Date,
        _id: string,
    }
    
}

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});

const DetailsArticle: NextPage<IArticle> = ({
    article : { 
        titre, 
        attaque,
        categorie,
        auteur,
        file,
        contenu,
        createdAt,
        comments,
        _id 
    }
}) => {

    const classes = useStyles();
    const router = useRouter()

    const validComment = (id: string) => {
        try {
            axios.patch(`${process.env.NEXT_PUBLIC_BASE_URI}/articles/comments/${_id}/valid`, { commenterId: id })
            .then(
                (res)=>{
                    router.reload()
                    console.log("success", res)
                }
            ).catch(e => {
                console.log(e);
                
            })
        } catch (error) {
            console.log(error);
            
        }
    }
    
    const deleteComment = (id: string) => {
        try {
            axios.patch(`${process.env.NEXT_PUBLIC_BASE_URI}/articles/comments/${_id}/delete`, { commenterId: id })
            .then(
                (res)=>{
                    router.reload()
                    console.log("success", res)
                }
            ).catch(e => {
                console.log(e);
                
            })
        } catch (error) {
            console.log(error);
            
        }
    }

    return(
        <Layout
            links = {<><Link href='/admin/article'><a>Article</a></Link> / <Link href='#'><a>Détails</a></Link></>}
            
        >
            <div className={css.container_details_message}>
                <CardContentPageAdmin
                    titleCard = 'Détails'
                    url = '#'
                    classe = {css.btn_none}
                >
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Article</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Titre : {titre}
                                    </TableCell>                                                
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        Catégorie : {categorie} 
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        Date de publication : {new Date(createdAt).toLocaleDateString() + " à " + new Date(createdAt).toLocaleTimeString()}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        Attaque : {attaque} 
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        Image : <Image
                                                    src = {file === undefined ? '/images/reportage.jpg' : file}
                                                    alt = 'detail image'
                                                    width = {250}
                                                    height = {200}
                                                    />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ width: '100%' }}
                                     dangerouslySetInnerHTML = {{
                                        __html: contenu 
                                        }} 
                                    >

                                    </TableCell>
                                    
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                        
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Commentaire</TableCell>
                                    <TableCell align="right">Statut</TableCell>
                                    <TableCell align="right">Valider</TableCell>
                                    <TableCell align="right">Suppr</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    comments.map((
                                        {
                                            _id,
                                            message,
                                            valid
                                    }) => {
                                        console.log(valid);
                                        
                                        return(
                                            <TableRow key={_id}>
                                                <TableCell component="th" scope="row">
                                                    {message}
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    {valid === true ? "Validé" : '' }
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Button variant="outlined" color="primary" onClick={()=> validComment(_id)} >Valider</Button> 
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Button variant="outlined" color="primary"  onClick={()=> deleteComment(_id)}  >Supprimer</Button>
                                                </TableCell>
                                                
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <br />
                    <div className={css.content_btn_id}>
                            <Modal
                                url_push = 'article'
                                route_delete = 'articles'
                                _id = {_id}
                            />
                            <Button variant="outlined" color="primary" onClick={() => { router.push(`/admin/article/${_id}/edit`) }}>
                                Modifier
                            </Button>

                           
                    </div>
                </CardContentPageAdmin>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {

    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/articles/${context.params.id}`)
    const data = res.data.data;
    const session = await auth0.getSession(context.req)

    if (!session?.user) {
        console.log(session);

        return {
            props: {},
            redirect: {
                destination: '/api/admin',
                permanent: false
            }
        };
      
    }  

    return {
        props: {
            article: data,
        },
    }
}

export default DetailsArticle