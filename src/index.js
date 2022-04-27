import React from "react";
import ReactDOM  from "react-dom";
import './index.css';
import App from "./components/App";

import {
    ApolloProvider,
    ApolloClient,
    createHttpLink,
    InMemoryCache
  } from '@apollo/client';

// GraphQL API endpoint to query
const httpLink = createHttpLink({
    uri: 'https://fullstack-engineer-test-n4ouilzfna-uc.a.run.app/graphql.'
});

// client to handle GraphQL requests
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);