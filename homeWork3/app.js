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

const { user, flat, renderPage } = require('./controllers');
const { provider } = require('./dataBase');
const { users, house } = require('./middleware');

//renderPage
app.get('/', renderPage.homePage);
app.get('/registrations', renderPage.registrations);
app.get('/login', renderPage.login);
app.get('/updateUserPages', renderPage.updateUserPages);
app.get('/apartaments', renderPage.apartaments);
app.get('/updateFlatPages', renderPage.updateFlatPages);

//users
app.get('/users', users.findAllUsersMiddleware, user.findAll);
app.post('/users', users.checkUserValidation, user.registerUser);
app.post('/auth', users.isUserAuthPresent, user.authUser);
app.get('/users/:user_id', users.isUserPresent, user.getById);
app.post('/updateUsers', users.checkUpdateUserValidation, users.isUpdateUserPresent, user.updateUsers);

//flat

app.get('/apartments', house.findAllFlatsMiddleware ,flat.findAllFlat);
app.post('/apartments', house.checkFlatValidation, flat.createFlat);
app.get('/apartments/:apartment_id', house.isFlatPresent, flat.getFlatById);
app.post('/updateFlats', house.checkUpdateFlatValidation, house.isUpdateFlatPresent, flat.updateFlats);

app.all('*', renderPage.notFound);

app.listen(3000, ()=>{
    console.log(3000);
});
