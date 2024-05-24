import "@/styles/globals.css";
import { createHttpLink, ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {

  let httpLink = createHttpLink({
    uri: 'https://beta2.cg.optimizely.com/content/v2?auth=nSabkbOsWUA55R2YBSYvuGCOgfAnEqE5Zah5fTHsaKlm1kQi',
  });
  let headers: Record<string, string> | undefined = undefined

  //useEffect(() => {
  //  async function setUrl() {
    let version: number | null = null
      let preview_token: string | undefined = undefined
      if (typeof window !== "undefined" && window.location !== undefined) {
        const queryString = window?.location?.search;
        const urlParams = new URLSearchParams(queryString);
        preview_token = urlParams.get('preview_token') ?? undefined;

        const pathArray = window?.location?.pathname?.split('/')
        var contentId = pathArray[pathArray.length - 1]
    
        var contentIdArray = contentId.split('_')
        if (contentIdArray.length > 1) {
          version = contentIdArray[contentIdArray.length - 1] as unknown as number
        }
      }

      pageProps.version = version

      if (preview_token) {
        headers = { Authorization: 'Bearer ' + preview_token }
        
        httpLink = createHttpLink({
          uri: 'https://beta2.cg.optimizely.com/content/v2?cache=false',
        });

        const communicationScript = document.createElement('script');
        communicationScript.src = `https://app-ocxcjobe11znb7p003.cms.optimizely.com/Util/javascript/communicationinjector.js`;
        communicationScript.setAttribute('data-nscript', 'afterInteractive')
        document.body.appendChild(communicationScript);
      }
  //  }
  //  setUrl();
  //}, [])

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
