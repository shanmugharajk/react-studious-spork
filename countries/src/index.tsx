import "~/index.css";

import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client/react";
import { ApolloClient, InMemoryCache } from "@apollo/client";

import { CountriesInfo } from "~/countries-info";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <CountriesInfo />
    </ApolloProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
