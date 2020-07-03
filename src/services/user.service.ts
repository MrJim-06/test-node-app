import { getRepository } from 'typeorm'
import { UserRequest } from '../models/request/user.request'
import { User } from '../entities/user.entity';
import { Result } from '../models/response/result'

export class UserService {
  public async register(userRequest: UserRequest): Promise<Result> {
    const repository = getRepository(User)
    
    const findUser = await repository.createQueryBuilder('user')
      .where('user.username = :username or user.email = :email', {username: userRequest.username, email: userRequest.email})
      .getCount()

    if (findUser > 0) return Result.DUPLICATE_USER

    const user = new User()
    user.setUser(userRequest)
    await repository.save(user)

    return Result.CREATED
  }
}