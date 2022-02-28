import Prismic from '@prismicio/client';
import Link from 'next/link';
import {
    apiEndpoint,
    accessToken,
    linkResolver,
    routeResolver
} from '../prismicConfiguration';

// Helper to convert prismic rich text links to next/link components.
export const customLink = (type, element, content, children, index) => (
    <Link key={index} href={linkResolver(element.data)}>
        <a>{content}</a>
    </Link>
);

// Init prismic client used for querying the API.
export const Client = (req = null) => (
    Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
);

// Options to be passed to the Client.
const createClientOptions = (req = null, prismicAccessToken = null, routes = null) => {
    const reqOptions = req ? { req } : {};
    const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {};

    return {
        ...reqOptions,
        ...accessTokenOption,
    };
};

export default Client;