import React from 'react';
import { NextPage, GetServerSideProps } from 'next'
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
import { useRouter } from 'next/router'
import MoreVertIcon from '@material-ui/icons/MoreVert';

import css from './message.styled.scss'
import Layout from '../../../components/layout-admin/layout_admin'
import CardContentPageAdmin from '../../../components/card-content-page-admin/card_content_page_admin'
import auth0 from '../../../utils/auth0'


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
}); 

interface IaMessage{
    messages?: [],
    _id: string,
    nom: string,
    prenom: string,
    createdAt: Date
}

const Message: NextPage<IaMessage> = ({ 
    messages 
}) => {

    const classes = useStyles();

    return(
        <Layout
            links = {<><Link href='#'><a>Message</a></Link></>}
        >
            <div className={css.container_message_admin}>
                <CardContentPageAdmin
                    titleCard = 'Message réçus'
                    url = {`message/:id`}
                >
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Titre du message</TableCell>
                                <TableCell align="right">Auteur</TableCell>
                                <TableCell align="right">Adresse mail</TableCell>
                                <TableCell align="right">Date d'ajout</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {messages.map((
                                {
                                    _id,
                                    contenu,
                                    email,
                                    createdAt, 
                                    nom,
                                }
                            ) => (
                                <TableRow key={_id}>
                                    <TableCell component="th" scope="row">
                                        {contenu}
                                    </TableCell>
                                    <TableCell align="right">{nom}</TableCell>
                                    <TableCell align="right">{email}</TableCell>
                                    <TableCell align="right">{new Date(createdAt).toLocaleDateString() + " à " + new Date(createdAt).toLocaleTimeString()}</TableCell>
                                    <TableCell align="right">
                                        <Link href={`message/${_id}`}>
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/messages`);
    const data = res.data.data;

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

    return{
        props: {
            messages: data,
        }
    }
}

export default Message