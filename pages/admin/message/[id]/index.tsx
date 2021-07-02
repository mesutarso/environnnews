import { NextPage, GetServerSideProps } from 'next'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'

import css from './ajouter_message.styled.scss'
import Layout from '../../../../components/layout-admin/layout_admin'
import CardContentPageAdmin from '../../../../components/card-content-page-admin/card_content_page_admin'
import Modal from '../../../../components/modal/modal'
import auth0 from '../../../../utils/auth0'

interface IaMessage{
    message?: {
        nom?: string
        email?: string
        contenu?: string
        createdAt?: string
        _id?: string
    }
}

const DetailsMessage: NextPage<IaMessage> = ({ 
    message: { 
        nom, 
        email, 
        contenu, 
        createdAt,
        _id }
}) => {
    
    return(
        <Layout
            links = {<><Link href='/admin/message'><a>Message</a></Link> / <Link href='#'><a>Détails</a></Link></>}
            
        >
            <div className={css.container_details_message}>
                <CardContentPageAdmin
                    titleCard = 'Détails'
                    url = '#'
                    classe = {css.btn_none}
                >
                    <div className={css.content_child_page}>
                        <div className={css.conent_details_message}>
                            <div><p><span>De la part de</span></p><h2>: {nom} </h2></div>
                            <div> <p><span>Adresse mail</span></p> <p>: {email}</p> </div> 
                            <div><p> <span>Contenu</span> </p> <p>: {contenu}</p> </div>
                            <div><p> <span>Envoyé le</span> </p> <p>: {new Date(createdAt).toLocaleDateString() + " à " + new Date(createdAt).toLocaleTimeString()}</p> </div>
                        </div>
                        <div>
                            <Modal
                                url_push = 'message'
                                route_delete = 'contact'
                                _id = {_id}
                            />
                        </div>
                    </div>
                </CardContentPageAdmin>
            </div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps<IaMessage> = async(context) => {

    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/messages/${context.params.id}`)
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
            message: data,
        },
    }
}

export default DetailsMessage