import { NextPage, GetServerSideProps } from 'next'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Button from '@material-ui/core/Button';

import css from './id_breaking.styled.scss'
import Layout from '../../../../components/layout-admin/layout_admin'
import CardContentPageAdmin from '../../../../components/card-content-page-admin/card_content_page_admin'
import Modal from '../../../../components/modal/modal'
import auth0 from '../../../../utils/auth0'

interface IBreaking{
    breaking?: {
        contenu: string
        _id: string
        createdAt: Date
    }
}

const DetailsBreaking: NextPage<IBreaking> = ({
    breaking : { 
        contenu, 
        createdAt,
        _id
    }
}) => {
    
    const router = useRouter()

    return(
        <Layout
            links = {<><Link href='/admin/breaking-news'><a>Breaking news</a></Link> / <Link href='#'><a>Détails</a></Link></>}
            
        >
            <div className={css.container_details_message}>
                <CardContentPageAdmin
                    titleCard = 'Détails'
                    url = '#'
                    classe = {css.btn_none}
                >
                    <div className={css.content_child_page}>
                        <div className={css.conent_details_message}>
                            <div><p><span>Description de l'information</span></p><h2>: {contenu} </h2></div>
                            <div><p> <span>Envoyé le</span> </p> <p>: {new Date(createdAt).toLocaleDateString() + " à " + new Date(createdAt).toLocaleTimeString()}</p> </div>
                        </div>
                        <div className={css.container_btn_details_breaking}>
                            <Modal
                                url_push = 'breaking-news'
                                route_delete = 'breakings'
                                _id = {_id}
                            />
                            <Button variant="outlined" color="primary" onClick={() => { router.push(`/admin/breaking-news/${_id}/edit`) }}>Modifier</Button>
                        </div>
                    </div>
                </CardContentPageAdmin>
            </div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps<IBreaking> = async (context) => {

    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/breakings/${context.query.id}`)
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
            breaking: data,
        },
    }
}

export default DetailsBreaking