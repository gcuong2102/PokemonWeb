const express = require('express')

const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)

    });
function handleData(data) {
    console.log(data)
}