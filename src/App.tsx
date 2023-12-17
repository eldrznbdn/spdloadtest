import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/organisms/Header/Header';
import './App.css';
import HomePage from './components/pages/HomePage/HomePage';
import FavoritePage from './components/pages/FavoritePage/FavoritePage';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([errorLink, new HttpLink({ uri: 'https://spacex-production.up.railway.app/' })]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favoritepage" element={<FavoritePage />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;
