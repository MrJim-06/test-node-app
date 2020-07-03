import { Router } from 'express'
import UserRoute from './user.route'

class Routes {
  public routes = Router()

  constructor () {
    this.routes.use('/user', UserRoute)
  }
}

export default new Routes().routes
