require('dotenv').config();
const express = require('express') //common js
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

const app = express();//app express
const port = process.env.PORT || 8888;//port=>hardcore
const hostname = process.env.HOST_NAME;

const connection = require('./config/database');

//config req body
app.use(express.json()); //utilizes the body-parser package
app.use(express.urlencoded({ extended: true }));

//config template engine
configViewEngine(app);

//khai bao route
app.use('/', webRoutes);

//console.log(">>>>>>>>>>>>> check env: ", process.env);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
