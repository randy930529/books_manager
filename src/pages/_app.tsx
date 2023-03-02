import * as dotenv from "dotenv";
import "@/styles/globals.css";
import { FC } from "react";
import type { AppProps } from "next/app";
import { wrapper } from "../store/store";
import { Provider } from "react-redux";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const url =
  process.env.HOST_GRAPHQL_SERVER || "https://flyby-router-demo.herokuapp.com/";

const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
});

const App: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  );
};

export default App;
