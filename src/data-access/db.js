/**
 * Project: regions-server
 * File: db
 * Created by Pennycodes on 2/27/2022.
 * Copyright regions-server
 */

export default function makeRegionsDb ({ makeDb }) {
    return Object.freeze({
        findAll,
        findByRegionId,
    })
    async function findAll () {

        const districts = makeDb.map(item=>item.districts.length).reduce((sum, a) => sum + a, 0)
        return {
            data: makeDb,
            total_regions: makeDb.length,
            total_districts: districts
        }
    }

    async function findByRegionId ({ regionId }) {
        const results = makeDb.find((regions, _index) => regions.code === regionId.toUpperCase())

        //check if region exists
        if (!results) {
            return {
                data: [],
                total_regions: 0,
                total_districts: 0
            }
        }
        const districts = [results].map(item=>item.districts.length).reduce((sum, a) => sum + a, 0)
        return {
            data: results,
            total_regions: 1,
            total_districts: districts
        }

    }

}
