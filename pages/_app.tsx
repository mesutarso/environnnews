import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import Layout from '../components/Layout';

const MyApp = ({ Component, pageProps }) => {
	return (
		<Layout data={pageProps.data}>
			<Component {...pageProps} />
		</Layout>
	);
};

export default MyApp;
