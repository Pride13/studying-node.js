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

//users
app.get('/', renderPage.homePage);
app.get('/registrations', renderPage.registrations);
app.get('/users', user.findAll);
app.post('/somebody', users.checkUserValidation, user.createUser);
app.get('/login', renderPage.login);
app.post('/auth', users.isUserAuthPresent, user.authUser);
app.get('/users/:user_id', users.isUserPresent, user.getById);
app.get('/updateUserPage', renderPage.updateUserPage);
app.post('/updateUser', users.checkUpdateUserValidation, users.isUpdateUserPresent, user.updateUsers);

//flat
app.get('/apartament', renderPage.apartament);
app.get('/apartments', flat.findAllFlat);
app.post('/apartment', house.checkFlatValidation, flat.createFlat);
app.get('/apartments/:apartment_id', house.isFlatPresent, flat.getFlatById);
app.get('/updateFlatPage', renderPage.updateFlatPage);
app.post('/updateFlat', house.checkUpdateFlatValidation, house.isUpdateFlatPresent, flat.updateFlats);

app.all('*', renderPage.notFound);

app.listen(3000, ()=>{
    console.log(3000);
});
