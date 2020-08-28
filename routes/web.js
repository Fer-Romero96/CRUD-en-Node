let router = require('express').Router();
let PagesContrller = require('../controllers/PagesController');
let ProductContrller = require('../controllers/ProductsController');

router.get("/", PagesContrller.homepage);
router.get("/about-us", PagesContrller.about);

// Identifica la ruta /products/create y la envía al controlador
router.get("/products/create", ProductContrller.create);

// Almacena el producto
router.post('/products', ProductContrller.store);

// Implementa ver el detalle de un producto
router.get('/products/:id', ProductContrller.show);

// Implementa editar un producto
router.get('/products/edit/:id', ProductContrller.edit);

// Maneja la actualización del producto
router.put('/products/:id', ProductContrller.update);

// Elimina el producto
router.delete('/products/:id', ProductContrller.delete);

module.exports = router;

