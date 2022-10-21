require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');
const app = express()


const {
    HTTP_PORT = 5000
} = process.env;

app.use(express.json());
app.use(morgan('dev'));
app.use(routes);

// app.use((req, res, next) =>{
//     return res.status(404).json({
//         status: false,
//         message: 'Not Found Bosku!!!'
//     });
// });

app.use((err, req, res, next) =>{
    console.log(err);
    return res.status(500).json({
        status: false,
        message: err.message
    });
})


app.listen(HTTP_PORT, () => console.log('listening on port', HTTP_PORT));

module.exports = app
