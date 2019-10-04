const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));

app.engine('.hbs', expHbs({
    extname: '.hbs',
    defaultLayout: null
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

const users = [];
const apartments = [];

app.get('/', (req, res) => {
    res.render('homePage')
});

app.get('/registrations', (req, res) => {
   res.render('registrations')
});

app.get('/users', (req, res) => {
   res.json(users)
});

app.post('/somebody', (req, res) => {
    const user = req.body;

    user.user_id = users.length + 1;
    users.push(user);
    res.redirect('/users')
});

app.get('/login', (req, res) => {
   res.render('login')
});

app.post('/auth', (req, res) => {
    const {email, password} = req.body;

    const finded = users.find(user => user.email === email && user.password === password);

    res.json(finded);
});

app.get('/users/:user_id', (req, res) => {
    const {user_id} = req.params;

    const finded = users.find(user => user.user_id === +user_id);

    res.json(finded);
});

app.get('/apartament', (req, res) => {
   res.render('apartament')
});

app.get('/apartments', (req, res) => {
   res.json(apartments)
});

app.post('/apartment', (req, res) => {
    const apartment = req.body;

    apartment.apartment_id = apartments.length + 1;
    apartments.push(apartment);
    res.redirect('/apartments')
});

app.get('/apartments/:apartment_id', (req, res) => {
   const {apartment_id} = req.params;

   const finded = apartments.find(apartment => apartment.apartment_id === +apartment_id);

   res.json(finded);
});

app.all('*', (req, res) => {
   res.json('Upps, 404')
});

app.listen(3000, ()=>{
    console.log(3000);
});