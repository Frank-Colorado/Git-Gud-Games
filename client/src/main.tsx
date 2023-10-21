import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { store } from './store';
import { Provider } from 'react-redux';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles';

const isDevelopment = import.meta.env.DEV;

const graphqlUri = isDevelopment
  ? 'http://localhost:3001/graphql' // development
  : 'https://git-gud-games-276f8dfab5d3.herokuapp.com/graphql';

const httpLink = createHttpLink({
  uri: graphqlUri,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('jwtToken');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </ApolloProvider>
);
