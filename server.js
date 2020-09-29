const express = require('express');
const path = require('path');

const app = express();
//Definindo protocolo http:
const server = require('http').createServer(app);
//Protocolo wss (web socket):
const io = require('socket.io')(server);

//Definindo pasta dos arquivos públicos usados pela aplicação
//Arquivos front-end da aplicação:
app.use(express.static(path.join(__dirname, 'public')));

//Definindo html como Template engine padrão
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', (req, res) => {
    res.render('index.html');
})

server.listen(3000);