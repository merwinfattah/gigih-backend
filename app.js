require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT;
const cors = require('cors');
const routes = require('./routes/routes');
const db= require('./database/db_connect');
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', ()=>console.log('Connected to MongoDB'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
// app.use(cors());
app.use('/api', routes)

app.listen(port, () => console.log(`Listening on port ${port}`))
