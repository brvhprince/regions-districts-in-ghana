/**
 * Project: regions-server
 * File: index
 * Created by Pennycodes on 2/27/2022.
 * Copyright regions-server
 */

import makeListRegions from './region'
import regionsDb from '../data-access'

const listRegions = makeListRegions({ regionsDb })

const regionService = Object.freeze({
    listRegions
})

export default regionService
export { listRegions }
