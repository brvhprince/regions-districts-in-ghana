/**
 * Project: regions-server
 * File: regions
 * Created by Pennycodes on 2/27/2022.
 * Copyright regions-server
 */
export default function makeGetRegions ({ listRegions }) {
    return async function getRegion (httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        }
        try {
            const returnedRegions = await listRegions({
                regionId: httpRequest.params.id
            })
            return {
                headers,
                statusCode: 200,
                body: {
                    status: true,
                    regions: returnedRegions.data ?? [],
                    details: {
                        total_regions: returnedRegions.total_regions ?? 0,
                        total_districts: returnedRegions.total_districts ?? 0
                    }
                }
            }
        } catch (e) {
            // TODO: Error logging
            console.log(e)
            return {
                headers,
                statusCode: 400,
                body: {
                    status: false,
                    error: e.message
                }
            }
        }
    }
}

