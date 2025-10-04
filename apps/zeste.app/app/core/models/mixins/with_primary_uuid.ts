import { beforeCreate, column } from '@adonisjs/lucid/orm'
import { v7 as randomUUID } from 'uuid'
import type { NormalizeConstructor } from '@adonisjs/core/types/helpers'
import type { BaseModel } from '@adonisjs/lucid/orm'
import type { UUID } from '#types/common'

export const WithPrimaryUuid = <Model extends NormalizeConstructor<typeof BaseModel>>(
  superclass: Model,
) => {
  class WithPrimaryUuidClass extends superclass {
    static override selfAssignPrimaryKey = true

    @column({ isPrimary: true })
    declare id: UUID

    @beforeCreate()
    static generateId(model: any) {
      model.id = randomUUID() as UUID
    }
  }
  return WithPrimaryUuidClass
}
