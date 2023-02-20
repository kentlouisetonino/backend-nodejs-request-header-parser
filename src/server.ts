require('dotenv').config()
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import HeaderParserRouter from './router/HeaderParserRouter'
import HomeRouter from './router/HomeRouter'

const PORT = process.env.PORT
const app = express()

// * listen for requests
app.listen(PORT, () => {
  const url = 'http://localhost:' + PORT

  console.log('Server is live. Your app is listening on url: ' + url)
})

// * middlewares
app.use(morgan('tiny')) // * logs the request
app.use(cors({ optionsSuccessStatus: 200 })) // * some legacy browsers choke on 204
app.use(express.static('public')) // * http://expressjs.com/en/starter/static-files.html

// * endpoints
app.use('/', HomeRouter)
app.use('/api', HeaderParserRouter)
