export default async (req, context) => {
    try {
        const response = await fetch('http://localhost:11434/api/tags', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        return await response;
    } catch (ex) {
        console.error(ex);
        return new Response(JSON.stringify({ error: ex }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500
        });
    }
};

export const config = {
    path: "/api/tags"
};