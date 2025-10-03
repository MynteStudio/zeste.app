import { createTuyau } from '@tuyau/client'
import { api } from '../../.adonisjs/api.js'

export const client = createTuyau({
  api,
  baseUrl: import.meta.env.VITE_APP_URL,
})
