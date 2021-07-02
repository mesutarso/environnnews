import React from 'react';
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

import css from './realisation.styled.scss'
import Layout from '../../../components/layout-admin/layout_admin'
import CardContentPageAdmin from '../../../components/card-content-page-admin/card_content_page_admin'
import { NextPage, GetServerSideProps } from 'next';
import auth0 from '../../../utils/auth0'

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
}); 

interface IaRealisation{
    realisations?: [],
    description?: string
    createdAt?: string,
    _id?: string
}

const Realisation: NextPage<IaRealisation> = ({ 
    realisations 
}) => {
    const classes = useStyles();

    const router = useRouter()

    return(
        <Layout
            links = {<><Link href='#'><a>Réalisation</a></Link></>}
        >
            <div className={css.container_breaking_news}>
                <CardContentPageAdmin
                    titleCard = "Réalisation de l'entreprise"
                    url = '/admin/realisation/ajouter'
                >
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Description de la réalisation</TableCell>
                                    <TableCell align="right">Date d'ajout</TableCell>
                                    <TableCell align="right">Détails</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {realisations.map(({
                                description,
                                createdAt,
                                _id
                            }) => (
                                <TableRow key={_id}>
                                    <TableCell component="th" scope="row">
                                        {description}
                                    </TableCell>
                                    <TableCell align="right">{new Date(createdAt).toLocaleDateString() + " à " + new Date(createdAt).toLocaleTimeString()}</TableCell>
                                    <TableCell align="right">
                                        <Link href={`realisation/${_id}`}>
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

export const getServerSideProps: GetServerSideProps<IaRealisation> = async(ctx) => {

    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/realisations`)
    const data = await res.data.data;

    const session = await auth0.getSession(ctx.req)

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
            realisations: data,
        }, 
    }
}

export default Realisation;