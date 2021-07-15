import Header from '../components/Header';
import PartnerSection from '../components/Partner';

import Footer from './Footer';

const Layout = ({ children, data }) => {
	return (
		<div>
			<Header data={data} />
			{children}

			<PartnerSection />
			<Footer />
		</div>
	);
};

export default Layout;
