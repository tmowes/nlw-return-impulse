import express, { json } from 'express'
import cors from 'cors'

import { routes } from './routes'

const app = express()
const port = process.env.PORT || 3333

app.use(cors())

app.use(json())

app.use(routes)

app.listen(port, () => console.log(`Server is running on port ${port}`))
