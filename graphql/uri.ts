import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	uri: 'https://a1-environews.kinshasadigital.academy/graphql',
	cache: new InMemoryCache(),
});

export default client;
