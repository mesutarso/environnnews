import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import css from './edit_realisation.styled.scss'
import Layout from '../../../../../components/layout-admin/layout_admin'
import CardContentPageAdmin from '../../../../../components/card-content-page-admin/card_content_page_admin'
import Input from '../../../../../components/input/input'
import { GetServerSideProps, NextPage } from 'next'
import auth0 from '../../../../../utils/auth0'

interface IRealisation{
    realisation?: {
        image: { rendered: string };
        description: { rendered: string }
    }
}

const EditRealisation: NextPage<IRealisation> = ({ 
    realisation : {
        image,
        description
    }
}) => {

    const router = useRouter()

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = async (data) => {

        try {

            const json = JSON.stringify(data)
            console.log(json);
            await axios.put(`${process.env.NEXT_PUBLIC_BASE_URI}/realisations/${router.query.id}`, json, {
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

            router.push('/admin/realisation')

        } catch (error) {
            console.log(error)
        }
    }

    return(
        <Layout
            links = {<><Link href='/admin/realisation'><a>Réalisation</a></Link> / <Link href={`/admin/realisation/${router.query.id}`}><a>Détails</a></Link> /  <Link href='#'><a>Modifier</a></Link></>}
            
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
                                value = {description}
                                placeholder = "descripiton"
                                nameInput = 'description'
                                change = {register({
                                    required: 'La description ne peut pas etre vide',
                                })}
                                errorValidation = {errors.description && errors.description.message}
                            />
                            <Input
                                type="text"
                                placeholder = "image"
                                value = {image}
                                nameInput = 'image'
                                change = {register({
                                    required: "L'image ne peut pas etre vide",
                                })}
                                errorValidation = {errors.image && errors.image.message}
                            />
                        </div>
                        
                        <input type="submit" value="Valider" className={css.btn_pub_edit}/>
                    </form>
                </CardContentPageAdmin>
            </div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps<IRealisation> = async(context) => {

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

export default EditRealisation