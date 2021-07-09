import Header from '../components/Header';
import PartnerSection from '../components/Partner';
import Footer from './Footer';

export default function Layout({ children, id }) {
	return (
		<div>
			<Header ip={id} />
			{children}
			<PartnerSection />
			<Footer />
		</div>
	);
}

export const getStaticProps = () => {
	return {
		props: {
			id: 1,
		},
	};
};
