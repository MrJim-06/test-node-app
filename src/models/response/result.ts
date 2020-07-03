import { off } from "process";

export class Result {
  public static SUCCESS = new Result(0, 'Seccess', 200)
  public static CREATED = new Result(1, 'Created', 201)
  public static MISSING_REQUIRED_PARAMETER = new Result(100, 'Missing required parameter', 400)
  public static DUPLICATE_USER = new Result(101, 'Username or email already exist', 400)
  
  private code: number
  private message: string
  private status: number

  private constructor (code: number, message: string, status: number) {
    this.code = code
    this.message = message
    this.status = status
  }

  public httpStatus(): number {
    return this.status
  }

  public response(): any {
    return { code: this.code, message: this.message }
  }

  public isSuccess(): boolean {
    return this.code === 0
  }
}