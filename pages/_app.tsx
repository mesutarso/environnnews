import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import Layout from '../components/Layout';
import { client } from '../lib/appoloClient';
import { ApolloProvider } from '@apollo/client';

function MyApp({ Component, pageProps }) {
	return (
		<ApolloProvider client={client}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ApolloProvider>
	);
}

export default MyApp;
