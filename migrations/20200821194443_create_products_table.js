
exports.up = function(knex) {
    return knex.schema
        .createTable("products", (table) =>{
            table.increments("id");
            table.string("name", 255).notNullable();
            table.string("descripcion", 512).notNullable();
            table.float("price");
            table.timestamps(true, true);
        })
  
};

exports.down = function(knex) {
    return knex.schema
        .dropTable("products");
  
};
