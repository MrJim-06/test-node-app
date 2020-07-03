import { Request, Response } from 'express'
import { UserRequest } from '../models/request/user.request'
import { Result } from '../models/response/result'
import { UserService } from '../services/user.service'

export class UserController {
  public async create(req: Request, res: Response) {
    const request = new UserRequest(req.body)
    
    let result: Result = request.validate()
    
    if (!result.isSuccess()) {
      res.status(result.httpStatus()).send(result.response())
      return
    }

    const service = new UserService()
    result = await service.register(request)

    res.status(result.httpStatus()).send(result.response())
  }
}
