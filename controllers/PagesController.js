let ProductModel = require("../models/Product")

exports.homepage = (req, res) => {
    ProductModel.all()
        .then((data) => {
            let products = data;
            // console.log(products);
            res.render('pages/homepage', {products: products});

        })
}


exports.about = (req, res) => {
    
    res.render('pages/about-us');
}





