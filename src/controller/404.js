/**
 * Project: regions-server
 * File: 404
 * Created by Pennycodes on 2/27/2022.
 * Copyright regions-server
 */
export default async function notFound () {
    return {
        headers: {
            'Content-Type': 'application/json'
        },
        body: { error: 'Not found.' },
        statusCode: 404
    }
}
