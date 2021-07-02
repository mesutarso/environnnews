import Link from 'next/link'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/router'
import { NextPage, GetServerSideProps } from 'next'

import Layout from '../../../../components/layout-admin/layout_admin'
import CardContentPageAdmin from '../../../../components/card-content-page-admin/card_content_page_admin'
import Textarea from '../../../../components/textarea/textarea'
import css from './ajouter_breaking.styled.scss'
import auth0 from '../../../../utils/auth0'

const AddBreaking: NextPage = () => {

    const router = useRouter()

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async (data) => {
        try {

            const json = JSON.stringify(data)
            await axios.post(`${process.env.NEXT_PUBLIC_BASE_URI}/breakings`, json, {
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
    };

    return(
        <Layout
            links = {<><Link href='/admin/breaking-news'><a>Breaking news</a></Link> / <Link href='#'><a>Ajouter</a></Link></>}
        >
            <div className={css.container_form}>
                <CardContentPageAdmin
                    titleCard = 'Ajouter une information'
                    url = '#'
                >
                    <form onSubmit={handleSubmit(onSubmit)} className={css.container_form_breaking}>

                        <Textarea 
                            placeholder="Ecrivez l'information ici"
                            nameText = 'contenu'
                            change = {register({
                                required: "Le contenu de l'information ne peut pas etre vide",
                            })}
                            errorValidation = {errors.contenu && errors.contenu.message}
                        /> <br/>
                        <input type="submit" value="Valider" className={css.btn_add_breaking}/>
                    </form>
                </CardContentPageAdmin>
            </div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {

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
            ajouter: {},
        }, 
    }
}

export default AddBreaking