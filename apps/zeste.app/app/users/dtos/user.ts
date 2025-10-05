import { BaseModelDto } from '@adocasts.com/dto/base'
import type User from '#users/models/user'

export default class UserDto extends BaseModelDto {
  declare id: string
  declare createdAt: string
  declare updatedAt: string
  declare firstName: string
  declare lastName: string
  declare email: string

  constructor(user?: User) {
    super()

    if (!user) return
    this.id = user.id
    this.createdAt = user.createdAt.toISO()!
    this.updatedAt = user.updatedAt.toISO()!
    this.firstName = user.firstName
    this.lastName = user.lastName
    this.email = user.email
  }
}
