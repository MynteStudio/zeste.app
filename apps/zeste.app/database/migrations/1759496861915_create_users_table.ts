import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  override async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').notNullable()
      table.text('first_name').notNullable()
      table.text('last_name').notNullable()
      table.text('email').notNullable().unique()
      table.text('password').notNullable()
    })
  }

  override async down() {
    this.schema.dropTable(this.tableName)
  }
}
