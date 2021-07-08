import Header from '../components/Header';
import PartnerSection from '../components/Partner';
import Footer from './Footer';

export default function Layout({ children }) {
	return (
		<div>
			<Header />
			{children}
			<PartnerSection />
			<Footer />
		</div>
	);
}
