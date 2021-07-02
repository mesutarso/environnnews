import React from 'react';
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

import css from './breaking_news.styled.scss'
import Layout from '../../../components/layout-admin/layout_admin'
import CardContentPageAdmin from '../../../components/card-content-page-admin/card_content_page_admin'
import auth0 from '../../../utils/auth0'

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
}); 

interface IBreaking{
    breakings?: [];
    _id?: string;
    contenu?: string;
}

const Breaking: NextPage<IBreaking> = ({ 
    breakings 
}) => {
    const classes = useStyles();

    const router = useRouter()

    return(
        <Layout
            links = {<><Link href='#'><a>Breaking news</a></Link></>}
        >
            <div className={css.container_breaking_news}>
                <CardContentPageAdmin
                    titleCard = 'Breaking news'
                    url = '/admin/breaking-news/ajouter'
                >
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Contenu de l'nformation</TableCell>
                                <TableCell align="right">Date d'ajout</TableCell>
                                <TableCell align="right">Détails</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {breakings.map((
                                {
                                    _id,
                                    contenu,
                                    createdAt
                                }
                                ) => (
                                <TableRow key={_id}>
                                    <TableCell component="th" scope="row">
                                        {contenu}
                                    </TableCell>
                                    <TableCell align="right">{new Date(createdAt).toLocaleDateString() + " à " + new Date(createdAt).toLocaleTimeString()}</TableCell>
                                    <TableCell align="right">
                                        <Link href={`breaking-news/${_id}`}>
                                            <a><MoreVertIcon/></a>
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContentPageAdmin>
            </div>


        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps<IBreaking> = async ({ req, res }) => {

    const result = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/breakings`)
    const data = await result.data.data;

    const session = await auth0.getSession(req)

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
            breakings: data,
        }, 
    }
}

export default Breaking;