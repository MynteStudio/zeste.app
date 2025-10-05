import vine from '@vinejs/vine'

export const registerValidator = vine.compile(
  vine.object({
    firstName: vine.string().trim().minLength(1),
    lastName: vine.string().trim().minLength(1),
    email: vine.string().email().normalizeEmail(),
    password: vine.string().minLength(8).confirmed({ confirmationField: 'passwordConfirmation' }),
  }),
)
