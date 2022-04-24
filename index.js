const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello fromsdf  my own smarty chomolokko')
});

const users = [
    { id: 1, name: 'sabana', email: 'sabana@gmail.com', phon: "017878" },
    { id: 2, name: 'sabnor', email: 'sabnor@gmail.com', phon: "017878" },
    { id: 4, name: 'sucho', email: 'sucho@gmail.com', phon: ' 017878' },
    { id: 3, name: 'bobita', email: 'bobita@gmail.com', phon: '017878' },
    { id: 5, name: 'srboni', email: 'srboni@gmail.com', phon: '017878' },
    { id: 6, name: 'bulbuli', email: 'bulb@gmail.com', phon: '017878' },
    { id: 7, name: 'karina', email: 'karina@gmail.com', phon: '017878' },
];

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users[id];

    res.send(user);
});

app.post('/user', (req, res) => {
    console.log('request', req.body)
    res.send('post method success')
})




app.listen(port, () => {
    console.log('listenning to port', port)

});