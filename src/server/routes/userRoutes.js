const express = require('express');
const router = new express.Router();

const User = require('../models/User.js');
const { serializeUser, serializeUsers } = require('../serializers/serializeUser');

router.get('/', (req, res) => {
  User.findAll().then(users => res.json(serializeUsers(users)));
});

router.get('/:id', (req, res) => {
  User.findById(req.params.id).then(user => res.json(serializeUser(user)));
});

router.put('/:id', (req, res) => {
  User.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then(() => {
    return User.findById(req.params.id)
      .then(user => res.json(serializeUser(user)));
  });
});

module.exports = router;
