const express = require('express');
const morgan = require('morgan');
const app = express();

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

app.use(bodyParser.json());

var data = [
    {
        "todoItemId": 0,
        "name": "an item",
        "priority": 3,
        "completed": false
    },
    {
        "todoItemId": 1,
        "name": "another item",
        "priority": 2,
        "completed": false
    },
    {
        "todoItemId": 2,
        "name": "a done item",
        "priority": 1,
        "completed": true
    }
]
//Status message from server
app.get('/', (req, res) => {
    res.status(200).send({ status: 'ok' });
});

//Read All Todo Items from List
app.get('/api/TodoItems', (req, res) => {
    res.status(200).send(data);
});

//Read Single Todo Item from List
app.get('/api/TodoItems/:number', (req, res) => {
    var number = req.params.number;
    //find the todo with the todoItemId === number
    data.forEach(function (data) {
        if (data.todoItemId === parseInt(number)) {
            res.status(200).send(data);
        }
    })
});
//Create a Single Todo Item
app.post('/api/TodoItems/', (req, res) => {
    res.status(201).send(req.body);
})

//Delete Single Todo Item from List
app.delete('/api/TodoItems/:number', (req, res) => {
    var number = req.params.number;
    data.forEach(function (data) {
        if (data.todoItemId === parseInt(number)) {
            console.log('Deleted ' + data.todoItemId)
            res.status(200).send(data);
            
        }
    })
})
module.exports = app;
