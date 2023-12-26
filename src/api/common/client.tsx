import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';



const httpLink = createHttpLink({
  uri: 'https://api-dev.easycse.net/freya/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: '',
      'X-DCE-PLATFORM':'SWIZY'
    },
  };
});

const link = authLink.concat(httpLink);



const BASE_URL = 'https://api-dev.easycse.net/freya/graphql';

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;