import moment from 'moment'
import bcrypt from 'bcrypt'
import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm'
import { UserRequest } from '../models/request/user.request'

@Entity()
@Unique(['username', 'email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdate: Date

  @Column()
  firstname: string

  @Column()
  lastname: string

  @Column()
  username: string

  @Column()
  email: string

  @Column()
  password: string

  public setUser(userRequest: UserRequest) {
    this.createdate = new Date(moment().format('YYYY-MM-DD HH:mm:ss'))
    this.firstname = userRequest.firstname
    this.lastname = userRequest.lastname
    this.username = userRequest.username
    this.email = userRequest.email
    this.password = this.encryptPassword(userRequest.password)
  }
  
  private encryptPassword(plainTextPassword: string): string {
    return bcrypt.hashSync(plainTextPassword, 10)
  }
}


