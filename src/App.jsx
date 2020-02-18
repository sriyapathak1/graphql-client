import React from 'react';
// import Counter from './components/counter';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import client from './apollo/Apollo';
import User from './components/user/User';
import UserTable from './components/usertable/UserTable';
import AppRouter from './routes';


const App = () => 
{
  console.log('--------------', client);
return(
  <ApolloProvider client={client}>
    <Router>
    <AppRouter />
    </Router>
  </ApolloProvider>
)};

export default App;

