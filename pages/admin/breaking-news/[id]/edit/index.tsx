import { NextPage } from 'next'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import css from './edit_breaking.styled.scss'
import Layout from '../../../../../components/layout-admin/layout_admin'
import CardContentPageAdmin from '../../../../../components/card-content-page-admin/card_content_page_admin'
import Input from '../../../../../components/input/input'
import auth0 from '../../../../../utils/auth0'

interface IaBreaking{
    breaking?: {
        contenu: { rendered: string };
    }
}

const EditBreaking: NextPage<IaBreaking> = ({ 
    breaking : { 
        contenu,
    }
}) => {

    const router = useRouter()

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
        try {

            const json = JSON.stringify(data)
            console.log(json);
            await axios.put(`${process.env.NEXT_PUBLIC_BASE_URI}/breakings/${router.query.id}`, json, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                console.log('res', res.data);
            })
            .catch(err => {
                console.log('error in request', err);
            });

            router.push('/admin/breaking-news')

        } catch (error) {
            console.log(error);
             
        }
    }

    return(
        <Layout
            links = {<><Link href='/admin/breaking-news'><a>Breaking news</a></Link> / <Link href={`/admin/breaking-news/${router.query.id}`}><a>Détails</a></Link> /  <Link href='#'><a>Modifier</a></Link></>}
            
        >
            <div className={css.container_details_message}>
                <CardContentPageAdmin
                    titleCard = 'Modifier'
                    url = '#'
                    classe = {css.btn_none}
                >
                    <form onSubmit={handleSubmit(onSubmit)} className={css.content_child_page}>
                        <div className={css.content_input_edit_pub}>
                            <Input
                                type="text"
                                value = {contenu}
                                nameInput = 'contenu'
                                change = {register({
                                    required: 'Le contenu ne peut pas etre vide',
                                })}
                                errorValidation = {errors.contenu && errors.contenu.message}
                            />
                        </div>
                        
                        <input type="submit" value="Valider" className={css.btn_pub_edit}/>
                    </form>
                </CardContentPageAdmin>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {

    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/breakings/${context.params.id}`)
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

export default EditBreaking