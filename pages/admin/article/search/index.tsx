import { GetServerSideProps, NextPage } from 'next'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from 'next/link'
import axios from 'axios'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import Layout from '../../../../components/layout-admin/layout_admin'
import css from './search.styled.scss'
import auth0 from '../../../../utils/auth0'
import IArticle from '../../../../entities/article'
import ContentPageAdmin from '../../../../components/card-content-page-admin/card_content_page_admin'

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});

interface ISearch{
    articles: IArticle[]
}

const SearchAdmin: NextPage<ISearch> = ({ articles }) => {

    const classes = useStyles();
    const router = useRouter()
    const { query: { q } } = router

    const { register, handleSubmit, errors } = useForm();

    const slugify = str => {
        const map = {
          '-' : ' ',
          //'-' : '_',
          'a' : 'á|à|ã|â|ä|À|Á|Ã|Â|Ä',
          'e' : 'é|è|ê|ë|É|È|Ê|Ë',
          'i' : 'í|ì|î|ï|Í|Ì|Î|Ï',
          'o' : 'ó|ò|ô|õ|ö|Ó|Ò|Ô|Õ|Ö',
          'u' : 'ú|ù|û|ü|Ú|Ù|Û|Ü',
          'c' : 'ç|Ç',
          'n' : 'ñ|Ñ'
        };
      
        for (var pattern in map) {
          str = str.replace(new RegExp(map[pattern], 'g'), pattern);
        }
      
        return str;
    }

    const onSubmit = async (data) => {
        const char = slugify(data.search.toLowerCase())
        router.push(`/admin/article/search?q=${char}`)
    };

    return(
        <Layout>
            <ContentPageAdmin
                titleCard = 'Article'
                url = {`article/ajouter`}
            >
                <form onSubmit={handleSubmit(onSubmit)} className={css.bar_input_search}> 
                    <input 
                        type="search" 
                        placeholder='Recherche...'
                        name = 'search'
                        ref = {register({})}
                    /> 
                </form>
                {
                    articles.length === 0 ?
                    <h1 style={{ marginLeft: '1.5%' }}>PAS D'ARTICLE DISPONIBLE POUR {`« ${q} »`} <div className={css.line_title_art}></div></h1> :
                    <>
                    <h1 style={{ marginLeft: '1.5%' }}>RESULTATS POUR : {`« ${q} »`} <div className={css.line_title_art}></div></h1>

                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Titre de l'article</TableCell>
                                <TableCell align="right">Catéroie</TableCell>
                                <TableCell align="right">Auteur</TableCell>
                                <TableCell align="right">Date d'ajout</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {articles.map((
                                {
                                    _id,
                                    titre,
                                    categorie,
                                    auteur,
                                    createdAt
                            }) => {
                                return(
                                    <Link href={`/admin/article/${_id}`} key={_id}>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                {titre}
                                            </TableCell>
                                            <TableCell align="right">{categorie}</TableCell>
                                            <TableCell align="right">{auteur}</TableCell>
                                            <TableCell align="right">{new Date(createdAt).toLocaleDateString() + " à " + new Date(createdAt).toLocaleTimeString()}</TableCell>
                                            <TableCell align="right">
                                                <Link href={`/admin/article/${_id}`}>
                                                    <a><MoreVertIcon/></a>
                                                </Link>
                                            </TableCell>
                                        </TableRow>
                                    </Link>
                                )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </>
                }
            </ContentPageAdmin>

        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    //const session = await auth0.getSession(req)
    
    const { query : { q } } = ctx
    const { data: { data } } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/articles/search/${q}`)

    // if (!session?.user) {
    //     console.log(session);

    //     return {
    //         props: {},
    //         redirect: {
    //             destination: '/api/admin',
    //             permanent: false
    //         }
    //     };
      
    // } 

    return{
        props: {
            articles: data,
        }
    }
}

export default SearchAdmin