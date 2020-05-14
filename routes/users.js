const users = require('express').Router();
const {
  getUsers, getUser, createUser, modifyUser, modifyAvatar,
} = require('../controllers/users');

users.get('/', getUsers);
users.get('/:userId', getUser);
users.post('/', createUser);
users.patch('/me', modifyUser);
users.patch('/me/avatar', modifyAvatar);

module.exports = users;
