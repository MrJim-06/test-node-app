import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import { createConnection } from 'typeorm'

import Routes from './routes/index'

class App {
  public app = express.application

  constructor () {
    this.app = express()
    this.databaseConnect()
    this.config()
  }

  private async databaseConnect() {
    try {
      const databaseConnection = await createConnection();
      if (databaseConnection.isConnected) {
        console.log('Database has been connected')
      }
    } catch (err) {
      console.log('Database connection failed: ')
      console.log(err)

    }
  }

  private config() {
    dotenv.config()
    this.app.use(cors())
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: true }))
    this.app.use(Routes)
  }
}

export default new App().app
