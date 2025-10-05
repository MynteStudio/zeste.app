import { inject } from '@adonisjs/core'
import Register from '#auth/actions/register'
import { registerValidator } from '#auth/validators/register'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class RegisterController {
  render({ inertia }: HttpContext) {
    return inertia.render('auth/register')
  }

  @inject()
  async execute(ctx: HttpContext, register: Register) {
    const data = await ctx.request.validateUsing(registerValidator)
    await register.handle({ data })

    return ctx.response.redirect().toRoute('home.render')
  }
}
