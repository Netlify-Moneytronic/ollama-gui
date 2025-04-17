export default async (req, context) => {
    const response = await fetch('http://localhost:11434/api/tags', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    return await response;
};

export const config = {
    path: "/api/tags"
};