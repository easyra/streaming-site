const express = require('express');
const userRouters = require('./users/userRouters.js');
const authRouters = require('./auth/authRouters.js');
const server = express();

server.use('/api/user', userRouters);
server.use('/api/auth', authRouters);

module.exports = server;
