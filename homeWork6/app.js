const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');
const fileUpload = require('express-fileupload');


const app = express();
const dataBase = require('./dataBase').getInstance();
dataBase.setModels();
global.appRoot = __dirname;

app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));

app.engine('.hbs', expHbs({
    extname: '.hbs',
    defaultLayout: null
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

const { renderPage } = require('./controllers');
const { userRouter, flatRouter, authRouter } = require('./router');

app.use('/users', userRouter);
app.use('/apartments', flatRouter);
app.use('/auth', authRouter);

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
