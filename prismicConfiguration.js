export const repoName = 'fhna';

export const apiEndpoint = `https://${repoName}.cdn.prismic.io/api/v2`;

export const linkResolver = (doc) => {
    if (doc.type === 'page') {
        return `/${doc.uid}`;
    }

    return '/';
};

export const routeResolver = {
    routes: [
        {
            "type": "page",
            "path": "/:uid"
        }
    ]
}