
// import { OlaClient } from 'ola-client';
import { OlaClient } from 'ola-client';

async function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// export const dynamic = 'force-dynamic' // defaults to auto
export async function POST(request: Request) {
    const client = new OlaClient();
    // console.log('GET request',  request);
    const payload = await request.json();
    console.log('POST request', payload);
    await client.setDmx('1', [255, 255, 255, 255]);
    await sleep(1000);
    await client.setDmx('1', [0, 0, 0, 0]);
    return Response.json({
        message: 'POST request :' + request.url,
        payload: payload
    });
}