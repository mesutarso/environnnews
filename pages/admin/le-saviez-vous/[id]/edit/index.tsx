import { useState } from 'react'
import { NextPage, GetServerSideProps } from 'next'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import css from './edit_pub.styled.scss'
import Layout from '../../../../../components/layout-admin/layout_admin'
import CardContentPageAdmin from '../../../../../components/card-content-page-admin/card_content_page_admin'
import Input from '../../../../../components/input/input'
import auth0 from '../../../../../utils/auth0'

interface Iapublicite{
    article?: {
        titre?: string;
        file?: string;
    }
}

const EditPublicite: NextPage<Iapublicite> = ({ 
    article: { 
        titre, 
        file 
    } 
}) => {

    const router = useRouter()

    const { register, handleSubmit, errors } = useForm();
    const [files, setFiles] = useState()

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
            console.log(json);
            await axios.put(`${process.env.NEXT_PUBLIC_BASE_URI}/conseils/${router.query.id}`, json, {
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

            router.push('/admin/le-saviez-vous')

        } catch (error) {
            console.log(error)
        }
    }

    return(
        <Layout
            links = {<><Link href='/admin/le-saviez-vous'><a>Le saviez vous ?</a></Link> / <Link href={`/admin/le-saviez-vous/${router.query.id}`}><a>Détails</a></Link> /  <Link href='#'><a>Modifier</a></Link></>}
            
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
                                value = {titre}
                                nameInput = 'titre'
                                change = {register({
                                    required: 'Le titre ne peut pas etre vide',
                                })}
                                errorValidation = {errors.titre && errors.titre.message}
                            />
                            <div className={css.container_file_upload_button}>
                                <input
                                    type = 'file'
                                    id = 'file'
                                    className = {css.file_upload_button}
                                    defaultValue={file}
                                    name = 'file'
                                    onChange = {fileUp}
                                    ref = {register({
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
                        
                        <input type="submit" value="Valider" className={css.btn_pub_edit}/>
                    </form>
                </CardContentPageAdmin>
            </div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps<Iapublicite> = async (context) => {

    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/conseils/${context.params.id}`)
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
            article: data,
        },
    }
}

export default EditPublicite