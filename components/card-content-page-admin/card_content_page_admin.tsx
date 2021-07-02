import css from './card_content_page_admin.styled.scss'
import Button from '../button/button'

interface PageAdmin {
    children?: React.ReactNode,
    titleCard?: React.ReactNode,
    actionClick?: string,
    url?: string,
    classe?: string
}

const CardContentPageAdmin: React.FC<PageAdmin> = ({ 
    children, 
    titleCard, 
    actionClick, 
    url, 
    classe 
}) => {
    return(
        <div className={css.card_content_page_admin}>
            <div className={css.title_article_admin}>
                <h2> {titleCard} </h2>
                <div className={css.btn_card_content_page}>
                    <Button
                        value = 'Ajouter'
                        url = {url}
                        classe = {classe}
                    />
                </div>
            </div>
            <div className={css.children_card_content_page_admin}>
                {children}
            </div>
        </div>
    )
}

export default CardContentPageAdmin