/**
 * Project: regions-server
 * File: index
 * Created by Pennycodes on 2/27/2022.
 * Copyright regions-server
 */

import { listRegions } from '../case'
import makeGetRegions from './regions'
import notFound from './404'

const getRegions = makeGetRegions({ listRegions })

const regionController = Object.freeze({
    getRegions,
    notFound
})

export default regionController
export { getRegions, notFound }
