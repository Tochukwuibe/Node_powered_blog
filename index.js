const express = require('express');
const path = require('path');

const port = 3000;

const app = express();

app.use(express.static('public'));


app.use(require('express-edge'));
app.set('views', `${__dirname}/views`);



app.get('/', getPage('index'));
app.get('/about', getPage('about'))
app.get('/post', getPage('post'))
app.get('/contact', getPage('contact'))



function getPage(name) {
    return (req, res) => {
        res.render(name)
    }
}

app.get('**', (req, res) => res.status(404).send({ message: 'page not found' }))





app.listen(port, (err) => {
    if (err) console.log('the error ', err);
    console.log('the app is listentin on port ', port)
})