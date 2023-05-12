import "@/styles/globals.css";
import { FC } from "react";
import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const url = process.env.HOST_GRAPHQL_SERVER || "http://localhost:4000/";

const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
});

const App: FC<AppProps> = ({ Component, ...rest }) => {
  return (
    <ApolloProvider client={client}>
      <Component />
    </ApolloProvider>
  );
};

export default App;
