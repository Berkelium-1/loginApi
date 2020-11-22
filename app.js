const express = require('express');

const app = express();

const loginRouter = require('./routes/loginRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 路由
app.use('/', loginRouter);

app.listen('3000', () => {
    console.log('http://localhost:3000');
});