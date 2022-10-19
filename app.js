const express = require('express');
const path = require('path');
const routes = require('./routes/routes.js');
const cors = require("cors");
const app = express();
const port = 3001;

app.use(express.json()); 

app.use(express.urlencoded({extended: true})); 

app.use(cors());

app.use('/api', routes);

app.use('/api/public',express.static(path.join(__dirname, '../public/')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))