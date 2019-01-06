exports.up = function(knex, Promise) {
  return knex.schema.createTable('sessions', table => {
    table.increments()
    table
      .integer('module_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('modules')
      .onDelete('CASCADE')
    table.string('location')
    table.string('description')
    table.string('mentors')
    table.timestamp('session_date', true).defaultTo(knex.fn.now())
    table.timestamps(true, true)
  })
}

exports.down = (knex, Promise) => knex.schema.dropTable('sessions')