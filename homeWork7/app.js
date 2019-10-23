const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');
const fileUpload = require('express-fileupload');

const app = express();
const dataBase = require('./dataBase').getInstance();
dataBase.setModels();
global.appRoot = __dirname;

const http = require('http').createServer(app);

const io = require('socket.io')(http);

io.on('connection', socket => {

    socket.on('message', data => {
        console.log(data);

        io.emit('respMessage', {id: socket.id, data})
    });

    socket.on('msg', data => {
        console.log(data);

        io.to('2').emit('msg_resp', data)

    });

    socket.on('joinRoom', data => {
        console.log(data);
        socket.join(data.room_id);
    });
});

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
app.get('/support', (req, res) => {
    res.render('main')
});

app.all('*', renderPage.notFound);

http.listen(3000, ()=>{
    console.log(3000);
});
