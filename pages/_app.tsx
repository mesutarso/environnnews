import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps, id }) {
	return (
		<Layout id={id}>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;

export const getStaticProps = () => {
	return {
		props: {
			id: 150,
		},
	};
};
