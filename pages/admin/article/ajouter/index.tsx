import React, { useState } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useForm, Controller } from "react-hook-form";
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic'

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

import css from './ajouter_article.styled.scss'
import Input from '../../../../components/input/input'
import Layout from '../../../../components/layout-admin/layout_admin'
import CardContentPageAdmin from '../../../../components/card-content-page-admin/card_content_page_admin'
import Textarea from '../../../../components/textarea/textarea'
import auth0 from '../../../../utils/auth0'
import { Link } from '@material-ui/core'

const FormAjouter: NextPage = () => {

    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [value, setValue] = useState("");

    const { register, handleSubmit, control, errors } = useForm({ mode: 'onChange'});
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
        const uriFile = res.data.secure_url
        setFiles(uriFile)
    }

    
    const onSubmit = async (data) => {
        setLoading(true)
        data.file = ""
        data.file = files
        try {
            const json = JSON.stringify(data)
            await axios.post(`${process.env.NEXT_PUBLIC_BASE_URI}/articles`, json, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                console.log('res', res.data);
                router.push('/admin/article')
            })
            .catch(err => {
                console.log('error in request', err);
            });

        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    };

    return(
        <>
        <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;800&display=swap" rel="stylesheet"/>
            <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon"/>
            <meta charSet="UTF-8"/>

        </Head>
            <div className={css.container_ajouter_article}>
                <CardContentPageAdmin
                    titleCard = { <Link href='/admin/article'> Retour </Link> }
                    url = '#'
                >        
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Textarea
                                placeholder = "Titre de l'article"
                                nameText = 'titre'
                                change = {register({
                                    required: 'Le titre ne peut pas être vide',
                                    // pattern: {
                                    //     value: /^[a-zA-Z0-9_ ]+$/i,
                                    //     message: 'Le titre ne doit pas contenir des chiffres' 
                                    // }
                                })}
                                errorValidation = {errors.titre && errors.titre.message}
                            />

                            <Textarea
                                placeholder = "L'attaque"
                                nameText = 'attaque'
                                change = {register({
                                    required: "L'attaque ne peut pas être vide",
                                })}
                                errorValidation = {errors.attaque && errors.attaque.message}
                            />
                            <Textarea
                                placeholder = "La legende de l'image"
                                nameText = 'legende'
                                change = {register({})}
                                errorValidation = {errors.legende && errors.legende.message}
                            />

                            <div className={css.content_form_article}>
                                <div className={css.css_categorie_article_admin}>
                                    <select 
                                        name='categorie' 
                                        ref={register({
                                            required: 'La categorie ne peut pas être vide',
                                            pattern: {
                                                value: /^[A-Za-z]+$/i,
                                                message: 'La categorie ne doit pas contenir des chiffres' 
                                            }}
                                        )}
                                    >
                                        <option value="">Selectionnez une catégorie</option>
                                        <option value="conservation">Conservation</option>
                                        <option value="climat">Climat</option>
                                        <option value="foret">Forêt</option>
                                        <option value="biodiversite">Biodiversité</option>
                                        <option value="sante">Santé</option>
                                        <option value="energie">Énergie</option>
                                        <option value="pollution">Pollution</option>
                                        <option value="opportinute">Opportinuté</option>
                                        <option value="economie">Économie</option>
                                        <option value="dossier">Dossier</option>
                                        <option value="education">Éducation</option>
                                        <option value="environnement">Environnement</option>
                                        <option value="eau">Eau</option>
                                        <option value="salubrite">Salubrité</option>
                                        <option value="catastrophes-naturelles">Catastrophes naturelles</option>
                                        <option value="autres">Autres</option>
                                    </select>
                                    <span className={css.error_select_ajouter}>{errors.categorie && errors.categorie.message}</span>
                                </div>
                                <div className={css.container_file_upload_button}>
                                    <input
                                        className = {css.file_upload_button}
                                        type = 'file'
                                        id = 'file'
                                        accept = 'image/'
                                        name = 'file'
                                        onChange={fileUp}
                                        // ref={register({
                                        //     required: "L'image ne peut pas être vide",
                                        // })}
                                    />
                                    <label htmlFor = 'file'> 
                                        <i aria-hidden='true' className="fas fa-file-image"></i>
                                        &nbsp; Choisissez une image
                                    </label>
                                    <p>{errors.file && errors.file.message}</p>
                                </div>
                                <Input
                                    placeholder = "Nom de l'auteur"
                                    nameInput = 'auteur'
                                    type = 'text'
                                    change = {register({
                                        required: "Le nom de l'auteur ne peut pas être vide",
                                        // pattern: {
                                        //     value: /^[a-zA-Z0-9_ ]+$/i,
                                        //     message: "Le nom de l'auteur ne doit pas contenir des chiffres" 
                                        // }
                                    })}
                                    errorValidation = {errors.auteur && errors.auteur.message}
                                />

                            </div>
                            
                            <Controller 
                                as = { <ReactQuill 
                                            placeholder="Rédigez le contenu de l'article ici..."
                                            className={css.editor_quill}
                                            modules = {modules}
                                            formats = {formats}
                                        />
                                    } 
                                name="contenu" 
                                control={control} defaultValue=""
                            />
                               
                            {
                                loading === true ? 
                                <input type="submit" value='Enregitrement...' className={css.btn_ajouter_article} disabled/>
                                :
                                <input type="submit" value='Valider' className={css.btn_ajouter_article}/>
                            }
                            
                        </form>
                </CardContentPageAdmin>
            </div>
            </>
    )
}

const modules = {
    toolbar: [
        [{ header: "1" }, { header: "2" }, { header: [3, 4, 5, 6] }],
        [{ size: [] }, { color: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image", "video"],
        ["clean"],
        ["code-block"]
    ],
}

const formats = [
    "header",
    "size",
    "color",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "video",
    "clean",
    "code-block"
]

export async function getServerSideProps({req, res}) {

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
        props: { } 
    };

}

export default FormAjouter