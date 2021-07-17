import Header from '../components/Header';
import PartnerSection from '../components/Partner';

import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<div>
			<Header data-testid='layout-header' />
			{children}

			<PartnerSection data-testid='layout-partnersection' />
			<Footer data-testid='layout-footer' />
		</div>
	);
};

export default Layout;
