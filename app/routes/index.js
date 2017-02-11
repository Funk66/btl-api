var express = require('express');
var router = express.Router();
var kanban = require('controllers');

// Board
router.get('/boards', kanban.boards.list);
router.get('/users', kanban.users.list);

module.exports = router;

