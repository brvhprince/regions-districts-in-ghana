/**
 * Project: regions-server
 * File: index
 * Created by Pennycodes on 2/27/2022.
 * Copyright regions-server
 */
import makeRegionsDb from './db'

const makeDb = require('./regions')
const regionsDb = makeRegionsDb({ makeDb })

export default regionsDb
