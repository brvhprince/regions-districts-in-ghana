
import express from 'express'
import {
    getRegions,
    notFound
} from './controller'
import { makeCallback } from './framework'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/regions/:id', makeCallback(getRegions))
app.get('/regions', makeCallback(getRegions))
app.use(makeCallback(notFound))


app.listen(3000, () => {
    console.log('Regions Server is listening on port 3000')
})

export default app
