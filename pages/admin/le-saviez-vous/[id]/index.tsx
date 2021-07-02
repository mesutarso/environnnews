import Image from 'next/image'
import { NextPage, GetServerSideProps } from 'next'
import axios from 'axios'
import Link from 'next/link'
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router'

import css from './publicite.styled.scss'
import Layout from '../../../../components/layout-admin/layout_admin'
import CardContentPageAdmin from '../../../../components/card-content-page-admin/card_content_page_admin'
import Modal from '../../../../components/modal/modal'
import auth0 from '../../../../utils/auth0'

interface IPublicite{
    leSaviezVous?: {
        titre: string
        createdAt: Date
        file: string
        _id: string
    }
    titre?: string
}

const DetailsLeSaviezVous: NextPage<IPublicite> = ({ 
    leSaviezVous: { 
        titre, 
        createdAt, 
        file, 
        _id } 
}) => {

    const router = useRouter()

    return(
        <Layout
            links = {<><Link href='/admin/le-saviez-vous'><a>Publicité</a></Link> / <Link href='#'><a>Détails</a></Link></>}
            
        >
            <div className={css.container_details_message}>
                <CardContentPageAdmin
                    titleCard = 'Détails'
                    url = '#'
                    classe = {css.btn_none}
                >
                    <div className={css.content_child_page}>
                        <div className={css.conent_details_message}>
                            <div><p><span>Titre de l'élément</span></p><h2>: {titre} </h2></div>
                            <div><p> <span>Envoyé le</span> </p> <p>: {new Date(createdAt).toLocaleDateString() + " à " + new Date(createdAt).toLocaleTimeString()}</p> </div>
                            <div> <p><span>Image</span></p> <div>
                                <Image
                                    src = {file === undefined ? '/images/reportage.jpg' : file}
                                    alt = 'detail image'
                                    width = {250}
                                    height = {200}
                                />
                            </div> </div> 
                        </div>
                        <div className={css.content_btn_pub}>
                            <Modal
                                url_push = 'le-saviez-vous'
                                route_delete = 'conseils'
                                _id = {_id}
                            />

                            <Button variant="outlined" color="primary" onClick={() => { router.push(`/admin/le-saviez-vous/${_id}/edit`) }}>Modifier</Button>

                        </div>
                    </div>
                </CardContentPageAdmin>
            </div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps<IPublicite> = async (context) => {

    const { data : { data } } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/conseils/${context.params.id}`)
    
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
            leSaviezVous: data,
        },
    }
}

export default DetailsLeSaviezVous