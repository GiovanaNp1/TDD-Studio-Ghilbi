const express = require('express')
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');

require('dotenv').config();

const port = process.env.PORT;
const mongo = process.env.MONGO;


mongoose.connect(mongo, {
    useNewUrlParser: true,
    useUnifiedTopology:  true
});

app.use(express.json());
app.use(routes)

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app