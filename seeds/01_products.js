
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, name: 'Balon de futbol 1', descripcion: "un buen equipo 1", price: 111},
        {id: 2, name: 'Balon de futbol 2', descripcion: "un buen equipo 2", price: 222},
        {id: 3, name: 'Balon de futbol 3', descripcion: "un buen equipo 3", price: 333}
      ]);
    });
};
