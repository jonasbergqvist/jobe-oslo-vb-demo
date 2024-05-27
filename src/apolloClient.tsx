import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

let client: ApolloClient<any> | undefined = undefined;

if (typeof window !== "undefined" && window.location !== undefined) {
    const queryString = window?.location?.search;
    const urlParams = new URLSearchParams(queryString);
    const preview_token = urlParams.get('preview_token') ?? undefined;

    if (preview_token) {
        const httpLink = createHttpLink({
            uri: 'https://beta2.cg.optimizely.com/content/v2',
        });

        const authLink = setContext((_, { headers }) => {
            return {
                headers: {
                    ...headers,
                    authorization: `Bearer ${preview_token}`
                }
            };
        });

        client = new ApolloClient({
            link: authLink.concat(httpLink),
            cache: new InMemoryCache()
        });
    }
}

if (client === undefined) {
    const httpLink = createHttpLink({
        uri: 'https://beta2.cg.optimizely.com/content/v2?auth=nSabkbOsWUA55R2YBSYvuGCOgfAnEqE5Zah5fTHsaKlm1kQi',
    });

    const authLink = setContext((_, { headers }) => {
        return {
            headers: {
                ...headers
            }
        };
    });

    client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
    });
}

export default client;

