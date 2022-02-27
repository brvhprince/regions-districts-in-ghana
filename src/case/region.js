/**
 * Project: regions-server
 * File: region
 * Created by Pennycodes on 2/27/2022.
 * Copyright regions-server
 */
export default function makeListRegions ({ regionsDb }) {
    return async function listRegions ({ regionId } = {}) {
        if (!regionId) {
            return await regionsDb.findAll()
        }
        return await regionsDb.findByRegionId({
            regionId,
        })
    }
}
