// Helper function to read ReadableStream
async function readAll(readable) {
    const chunks = [];
    for await (const chunk of readable) {
        chunks.push(chunk);
    }
    return Buffer.concat(chunks).toString('utf8');
}

export default async (req, context) => {
    try {
    // Read and parse the request body
    const rawData = await readAll(req.body);
    const json = JSON.parse(rawData);
    console.log(json);
    
    const res = await fetch('http://localhost:11434/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(json),
    })

    return res;
    } catch(ex) {
        console.error(ex);
        return new Response(JSON.stringify({ error: ex }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500
        });
    }

};

export const config = {
    path: "/api/chat"
};