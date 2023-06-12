const express = require('express')
const axios = require("axios")
const app = express()
const path = require('path');

const url = 'https://pokeapi.co/api/v2/pokemon'
app.get('/', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '..', 'views', 'index.html'), (err) => {
            if (err) {
                console.log(err);
            }
        });
    } catch (err) {
        console.log(err);
    }
});
app.listen(3000, () => {
    console.log('sever is running on port 3000')
})