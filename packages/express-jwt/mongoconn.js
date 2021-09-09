// 数据库连接
const config = require('./config');
const mongoose = require('mongoose');

mongoose.connect(config.mongolink, { autoIndex: false, useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, '数据库connection error:'));
