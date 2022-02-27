
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

// for heroku deployment
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Regions Server is listening on port ${port}`)
})

export default app
