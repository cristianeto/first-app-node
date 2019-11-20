const express = require('express');
const path = require('path'); //libreria para utilizar path
const bodyParser = require('body-parser');

const app = express(); //utilizar express
const routes = require('./routes/index');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));// Definir donde estan las vistas views
app.set('view engine', 'ejs');

//middlewares
app.use((req, res, next) => {
    console.log(`${req.url} -${req.method}`);
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//routes
app.use(routes);

//static files Archivos ForntEND
app.use(express.static(path.join(__dirname,'public')));

//start the server
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(app.get('port'), () => {
    console.log('Example app listening on port port!', app.get('port'));
});