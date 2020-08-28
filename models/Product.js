const knex = require("../database/connection");

// Muestra todos los productos 
exports.all = () => {
    return knex
        .select("*")
        .from("products")
}

//Almacena en la base los productos
exports.create = (product) => {
    return knex('products')
      .insert({
        name: product.name,
        descripcion: product.descripcion,
        price: product.price
    });
}

// Obtiene la información de un producto por su id
exports.find = (id) => {
    return knex
        .select('*')
        .from('products')
        .where('id', id)
        .first();
}

// Actualiza el producto con el id dado con la información definida en product
exports.update = (id, product) => {
    return knex('products')
        .update(product)
        .update('updated_at', knex.fn.now())
        .where('id', id);
}

// Elimina el producto con el id dado
exports.delete = (id) => {
    return knex('products')
        .delete()
        .where('id', id);
}