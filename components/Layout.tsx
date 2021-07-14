import Header from '../components/Header';
import PartnerSection from '../components/Partner';

import Footer from './Footer';

const Layout = ({ children, data }) => {
	return (
		<div>
			<Header data-testid='layout-header' data={data} />
			{children}

			<PartnerSection data-testid='layout-partnersection' />
			<Footer data-testid='layout-footer' />
		</div>
	);
};

export default Layout;
