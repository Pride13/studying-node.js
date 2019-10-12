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

const { user, flat,  renderPage } = require('./controllers');
const { users, house } = require('./middleware');
const { provider } = require('./dataBase');
const { userRouter, authRouter, flatRouter } = require('./router');

app.use('/users', userRouter);
app.use('/auth', authRouter);
app.use('/apartments', flatRouter);

//users
app.post('/updateUsers', users.checkUpdateUserValidation, users.isUpdateUserPresent, user.updateUsers);

//houses
app.post('/updateFlats', house.checkUpdateFlatValidation, house.isUpdateFlatPresent, flat.updateFlats);

//renderPage
app.get('/', renderPage.homePage);
app.get('/registrations', renderPage.registrations);
app.get('/login', renderPage.login);
app.get('/updateUserPages', renderPage.updateUserPages);
app.get('/apartaments', renderPage.apartaments);
app.get('/updateFlatPages', renderPage.updateFlatPages);

app.all('*', renderPage.notFound);

app.listen(3000, ()=>{
    console.log(3000);
});
