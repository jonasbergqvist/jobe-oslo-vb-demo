import "@/styles/globals.css";
import { createHttpLink, ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {

  let httpLink = createHttpLink({
    uri: 'https://beta2.cg.optimizely.com/content/v2?auth=nSabkbOsWUA55R2YBSYvuGCOgfAnEqE5Zah5fTHsaKlm1kQi',
  });
  let headers: Record<string, string> | undefined = undefined

  let client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    headers: headers
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
