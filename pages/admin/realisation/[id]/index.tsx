import { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router'

import css from './id.styled.scss'
import Layout from '../../../../components/layout-admin/layout_admin'
import CardContentPageAdmin from '../../../../components/card-content-page-admin/card_content_page_admin'
import Modal from '../../../../components/modal/modal'
import { NextPage, GetServerSideProps } from 'next';
import auth0 from '../../../../utils/auth0'

interface IaRealisation{
    realisation?: {
        description?: string,
        file?: string,
        createdAt: string,
        _id: string
    }
    
}

const DetailsRealisation: NextPage<IaRealisation> = ({ 
    realisation : {
        description,
        file,
        createdAt,
        _id
    }
}) => {

    const router = useRouter()

    return(
        <Layout
            links = {<><Link href='/admin/realisation'><a>Réalisation</a></Link> / <Link href='#'><a>Détails</a></Link></>}
            
        >
            <div className={css.container_details_message}>
                <CardContentPageAdmin
                    titleCard = 'Détails'
                    url = '#'
                    classe = {css.btn_none}
                >
                    <div className={css.content_child_page}>
                        <div className={css.conent_details_message}>
                            <div><p><span>Titre de la publicité</span></p><h2>: {description} </h2></div>
                            <div><p> <span>Image</span> </p> <div> 
                                <Image
                                    src = {file === undefined ? '/images/reportage.jpg' : file}
                                    alt = 'detail image'
                                    width = {250}
                                    height = {200}
                                />
                                </div> </div>
                            <div><p> <span>Envoyé le</span> </p> <p>: {new Date(createdAt).toLocaleDateString() + " à " + new Date(createdAt).toLocaleTimeString()}</p> </div> 
                        </div>
                        <div className={css.content_btn_pub}>
                            <Modal
                                url_push = 'realisation'
                                route_delete = 'realisation'
                                _id = {_id}
                            />

                            <Button variant="outlined" color="primary" onClick={() => { router.push(`/admin/realisation/${_id}/edit`) }}>Modifier</Button>

                        </div>
                    </div>
                </CardContentPageAdmin>
            </div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async(context) => {

    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/realisations/${context.params.id}`)
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
            realisation: data,
        },
    }
}

export default DetailsRealisation