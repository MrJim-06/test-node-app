import { Router } from 'express'
import { UserController } from '../controllers/user.controller'

class UserRoute {
  public router = Router()
  private controller = new UserController()

  constructor () {
    this.router.post('/', this.controller.create)
  }
}

export default new UserRoute().router
