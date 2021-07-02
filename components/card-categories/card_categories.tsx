import css from './card_categories.styled.scss'

interface IInterface{
    categories?: any,
    idCategorie?: string
}

const Categories: React.FC<IInterface> = ({ 
    categories, 
    idCategorie 
}) => {
    return(
        <div className={css.categories} id={idCategorie}>
            <p className={css.categories_contenu}>
                {categories}
            </p>
        </div>

    )
}

export default Categories