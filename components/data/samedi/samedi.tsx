import { Data } from './samedi.data'

import css from './samedi.styled.scss'

const Samedi = () => {
    console.log(Data);
    
    return(
        <>
            {
                Data.map(({
                    _id,
                    heure,
                    titre
                }) => {
                    return(
                        <div key={_id} className={css.liste_de_programme}>
                            <h2 className={css.heure_de_diffusion}>{heure} :</h2>
                            <div className={css.contenu_du_programme}>{titre}</div>
                        </div>
                    )
                })
            }
        </>

    )
}

export default Samedi