import css from './layout_admin.styled.scss'
import Menu from '../menu-admin/menu_admin'
import Seo from '../seo'
import ConnectBarAdmin from '../connect-bar-admin/connect_bar_admin'
import { UserProvider } from '../../utils/user';

interface IaLayout{
    children?: React.ReactNode;
    links?: React.ReactNode;
}

const LayoutAdmin: React.FC<IaLayout> = ({ 
    children, 
    links,
}) => {
    return(
        <div className={css.container_layout_admin}>
            <Seo/>
            <Menu/>
            <div className={css.div_content_child}>
                <ConnectBarAdmin
                    link = {links}
                />
                <div className={css.children_layout_admin}>
                    {children}
                </div>
            </div>
            <script src="https://kit.fontawesome.com/957ae1f962.js" crossOrigin="anonymous"></script>
        </div>
    )
}

export default LayoutAdmin