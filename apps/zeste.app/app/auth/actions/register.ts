import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import { registerValidator } from '#auth/validators/register'
import User from '#users/models/user'
import type { Infer } from '@vinejs/vine/types'

type Params = {
  data: Infer<typeof registerValidator>
}

@inject()
export default class Register {
  constructor(private readonly ctx: HttpContext) {}

  async handle({ data }: Params) {
    const user = await User.create(data)
    await this.ctx.auth.use('web').login(user)

    return { user }
  }
}
