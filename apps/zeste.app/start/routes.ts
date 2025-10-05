/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

const LogoutController = () => import('#auth/controllers/logout_controller')
const RegisterController = () => import('#auth/controllers/register_controller')
const LoginController = () => import('#auth/controllers/login_controller')

router.on('/').renderInertia('home').middleware(middleware.silentAuth()).as('home.render')

router
  .group(() => {
    router
      .group(() => {
        router.get('/login', [LoginController, 'render']).as('login.render')
        router.post('/login', [LoginController, 'execute']).as('login.execute')
        router.get('/register', [RegisterController, 'render']).as('register.render')
        router.post('/register', [RegisterController, 'execute']).as('register.execute')
      })
      .middleware(middleware.guest())

    router
      .delete('/logout', [LogoutController, 'execute'])
      .middleware(middleware.auth())
      .as('logout.execute')
  })
  .prefix('auth')
  .as('auth')
