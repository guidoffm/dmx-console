
// import { OlaClient } from 'ola-client';
import { NextResponse } from 'next/server';
import { OlaClient } from 'ola-client';

async function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// export const dynamic = 'force-dynamic' // defaults to auto
export async function POST(request: Request) {
    // console.log('request url:', request.url);
    const url = request.url;
    const client = new OlaClient();

    if (url.includes('slider')) {
        const payload = await request.json();
        // console.log('POST request', payload);
        const buffer = Buffer.from(payload);
        // console.log('Buffer:', buffer.join(','));
        await client.setDmxFromBuffer('1', buffer);
        // return Response.json({
        //     message: 'POST request :' + request.url,
        //     payload: payload
        // });
        return new NextResponse(null, { status: 204 });
    }

    if (url.includes('off')) {
        const payload = await request.json();
        // console.log('POST request', payload);
        await client.setDmx('1', []);
        return Response.json({
            message: 'POST request :' + request.url,
            payload: payload
        });
    }
    // // console.log('GET request',  request);
    // const payload = await request.json();
    // console.log('POST request', payload);

    // let i = 0;
    // while (i < 256) {
    //     await client.setDmx('1', [i, 255, 255, 255]);
    //     await sleep(100);
    //     i++;
    // }

    // // await client.setDmx('1', [255, 255]);
    // // await sleep(2000);

    // await client.setDmx('1', []);
    // return Response.json({
    //     message: 'POST request :' + request.url,
    //     payload: payload
    // });
}