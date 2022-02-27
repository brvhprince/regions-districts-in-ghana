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
        body: {
            error: 'Houston, we lost you',
            all_regions: '/regions',
            specific_region: '/regions/{region_code}'
        },
        statusCode: 404
    }
}
