let express = require('express');
let bodyParser = require('body-parser');
let methodOverride = require("method-override");

let app = express();

let appConfigs = require("./configs/app");

let exphbs = require('express-handlebars');
const extNameHbs = 'hbs';
let hbs = exphbs.create({extname: extNameHbs});
app.engine(extNameHbs, hbs.engine);
app.set('view engine', extNameHbs);


app.listen(appConfigs.express_port , function(){
    console.log('The app is running on port: ' +  appConfigs.express_port);
});

let webRoutes = require('./routes/web');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use('/', webRoutes);