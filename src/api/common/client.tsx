import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useAuth } from '../../core/auth';
import { getToken } from '../../core/auth/utils';

const token = getToken();

console.log(token)



const httpLink = createHttpLink({
  uri: 'https://api-dev.easycse.net/freya/graphql',
});

const authLink = setContext((_, { headers }) => {
  
  return {
    headers: {
      ...headers,
      'authorization': token ? `Bearer ${token.authToken}` : '',
      'X-DCE-PLATFORM':'SWIZY'
    },
  };
});

const link = authLink.concat(httpLink);


const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;