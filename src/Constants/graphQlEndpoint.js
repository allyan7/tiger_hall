import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api.staging.tigerhall.io/graphql',
    cache: new InMemoryCache(),
});