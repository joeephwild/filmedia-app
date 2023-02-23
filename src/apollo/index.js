import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
	uri: "https://api.cyberconnect.dev/testnet/",
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem("accessToken");

	return {
		headers: {
			...headers,
			Authorization: token ? `bearer ${token}` : "",
			"X-API-KEY": "jBPveUzh3pDGven3p6jVsq3dv5h2CmpS",
		},
	};
});

export const apolloClient = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});