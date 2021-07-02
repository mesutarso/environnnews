import { useState } from 'react'
import { NextPage } from 'next'
import axios from 'axios'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useForm, Controller } from 'react-hook-form'

import css from './edit.styled.scss'
import Textarea from '../../../../../components/textarea/textarea'
import CardContentPageAdmin from '../../../../../components/card-content-page-admin/card_content_page_admin'
import Input from '../../../../../components/input/input'
import auth0 from '../../../../../utils/auth0'

interface IaArticle{
    article?: {
        titre: string,
        categorie: string,
        auteur: string,
        file: string,
        contenu: string,
        createdAt: string,
        _id: string,
        attaque: string;
        legende: string
    };

}

//import ErrorBoundary from '../../../../../components/error'
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic'

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const EditArticle: NextPage<IaArticle> = ({ 
    article: { 
        titre, 
        categorie,
        auteur,
        file,
        contenu, 
        attaque,
        legende
    }
}) => {
    
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, errors, control } = useForm();
    const [files, setFiles] = useState();

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
        //console.log(res.data.secure_url);
        const uriFile = res.data.secure_url
        setFiles(uriFile)
    }
    
    const onSubmit = async (data) => {
        setLoading(true)
        data.file = ""
        data.file = files      
        if (data.file === undefined) {
            data.file = file
        }
        
        try {

            const json = JSON.stringify(data)
            await axios.put(`${process.env.NEXT_PUBLIC_BASE_URI}/articles/${router.query.id}`, json, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                router.push('/admin/article')
            })
            .catch(err => {
                console.log('error in request', err);
            });


        } catch (error) {
            console.log(error);
        }
        setLoading(false)
    }

    return(
        <>
        <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;800&display=swap" rel="stylesheet"/>
            <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon"/>
            <meta charSet="UTF-8"/>

        </Head>
            <div className={css.container_details_message}>
                <CardContentPageAdmin
                    titleCard = { <Link href={`/admin/article/${router.query.id}`}> Retour </Link> }
                    url = '#'
                    classe = {css.btn_none}
                >
                    <form onSubmit={handleSubmit(onSubmit)} className={css.content_child_page}>
                        {/* <div className={css.content_input_edit}> */}

                            <Textarea
                                placeholder = "Titre de l'article"
                                nameText = 'titre'
                                value = {titre}
                                change = {register({
                                    required: 'Le titre ne peut pas être vide',
                                })}
                                errorValidation = {errors.titre && errors.titre.message}
                            />

                            <Textarea
                                placeholder = "L'attaque"
                                nameText = 'attaque'
                                value={attaque}
                                change = {register({
                                    required: "L'attaque ne peut pas être vide",
                                })}
                                errorValidation = {errors.attaque && errors.attaque.message}
                            />
                            <Textarea
                                placeholder = "La legende de l'image"
                                nameText = 'legende'
                                value={legende}
                                change = {register({})}
                                errorValidation = {errors.legende && errors.legende.message}
                            />

                            
                        {/* </div> */}
                        <div className={css.content_input_edit}>
                            
                            <div>
                                <select name="categorie" id="" defaultValue={categorie} ref= {register({
                                    required: "La catégorie ne peut pas être vide",
                                })}>
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
                                <span>{errors.categorie && errors.categorie.message}</span>
                            </div>
                            {/* <div className={css.container_file_upload_button}>
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
                            </div> */}
                            <input 
                                type="file" 
                                name="file"
                                ref = {register({})}
                                 onChange={fileUp}
                            />

                        </div>

                        <br/>
                        <Input
                            type="text"
                            value = {auteur}
                            placeholder = "Nom de l'auteur"
                            nameInput = 'auteur'
                            change = {register({
                                required: "Le nom de l'auteur ne peut pas être vide",
                                    
                            })}
                            errorValidation = {errors.auteur && errors.auteur.message}
                        />

                        <div className={css.content_editor_edit}>
                            <h3>
                                Contenu de l'article
                            </h3>
                            <Controller 
                                name="contenu" 
                                control={control} defaultValue={contenu}
                                as = { <ReactQuill 
                                            placeholder="Rédigez le contenu de l'article ici..."
                                            className={css.editor_quill}
                                            modules = {modules}
                                            formats = {formats}
                                        />
                                    } 
                            />

                        </div>
                        

                        {
                                loading === true ? 
                                <input type="submit" value="Enregitrement..." className={css.btn_pub_edit} disabled/>
                                :
                                <input type="submit" value="Valider" className={css.btn_pub_edit}/>
                            }
                    </form>
                </CardContentPageAdmin>
            </div>
        
        {/* </Layout> */}
        </>
    )
}

const modules = {
    toolbar: [
        [{ header: "1" }, { header: "2" }, { header: [3, 4, 5, 6] }, { font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image", "video"],
        ["clean"],
        ["code-block"]
    ],
}

const formats = [
    "header",
    "font",
    "size",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "video",
    "code-block"
]

export async function getServerSideProps(context) {

    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/articles/${context.params.id}`)
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

export default EditArticle