import { Result } from '../response/result'

export class UserRequest {
  public firstname: string
  public lastname: string
  public username: string
  public email: string
  public password: string
  
  constructor (req: any) {
    this.firstname = req.firstname
    this.lastname = req.lastname
    this.username = req.username
    this.email = req.email
    this.password = req.password
  }

  public validate(): Result {
    if (this.isNull()) return Result.MISSING_REQUIRED_PARAMETER
    return Result.SUCCESS
  }

  private isNull(): boolean {
    if (this.firstname === undefined) return true
    if (this.lastname === undefined) return true
    if (this.username === undefined) return true
    if (this.email === undefined) return true
    if (this.password === undefined) return true
    return false
  }
}