import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useForm } from "react-hook-form";

import css from './realisation.styled.scss'
import Input from '../../../../components/input/input'
import Layout from '../../../../components/layout-admin/layout_admin'
import CardContentPageAdmin from '../../../../components/card-content-page-admin/card_content_page_admin'
import Loader from '../../../../components/loader/loader'
import { NextPage, GetServerSideProps } from 'next';
import auth0 from '../../../../utils/auth0'

const AjouterRealisation: NextPage = () => {

    const router = useRouter()
    
    const [files, setFiles] = useState()
    const [isSubmitting, setisSumbitting] = useState(false)
    const { register, handleSubmit, watch, errors } = useForm();

    const fileUp = async (e) => {
        console.log('upload file...');
        const file = e.target.files
        const data = new FormData()
        data.append('file', file[0])
        data.append('upload_preset', 'mystore')
        data.append('cloud_name', 'claudemotoba')

        const res = await axios.post('https://api.cloudinary.com/v1_1/claudemotoba/image/upload', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        console.log(res.data.secure_url);
        const uriFile = res.data.secure_url
        setFiles(uriFile)
    }

    const onSubmit = async (data) => {
        data.file = ""
        data.file = files
        try {

            const json = JSON.stringify(data)
            await axios.post(`${process.env.NEXT_PUBLIC_BASE_URI}/realisations`, json, {
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
    };

    return(
        <Layout
            links = {<><Link href='/admin/realisation'><a>Réalisation</a></Link> / <Link href='#'><a>Ajouter</a></Link> </>} 
        >
            <div className={css.container_ajouter_publicite}>
                <CardContentPageAdmin
                    titleCard = 'Ajouter une réalisation'
                    url = '#'
                    classe = {css.btn_none_pub}
                >
                    {
                        isSubmitting ?
                        <Loader/>
                        :           
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className={css.content_form_publicite}>
                                <Input
                                    placeholder = "Description de la réalisation"
                                    nameInput = 'description'
                                    change = {register({
                                        required: 'La description ne peut pas être vide',
                                    })}
                                    errorValidation = {errors.description && errors.description.message}
                                />
                                <div className={css.container_file_upload_button}>
                                    <input
                                        className = {css.file_upload_button}
                                        type = 'file'
                                        id = 'file'
                                        accept = 'image/'
                                        name = 'file'
                                        onChange={fileUp}
                                        ref={register({
                                            required: "L'image ne peut pas être vide",
                                        })}
                                    />
                                    <label htmlFor = 'file'> 
                                        <i aria-hidden='true' className="fas fa-file-image"></i>
                                        &nbsp; Choisissez une image
                                    </label>
                                    <p>{errors.file && errors.file.message}</p>
                                </div>
                            </div>
                            <input type="submit" value='Valider' className={css.btn_ajouter_publicite}/>
                        </form>
                    }
                </CardContentPageAdmin>
            </div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async(ctx) => {

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
            ajouter: { },
        }, 
    }
}

export default AjouterRealisation