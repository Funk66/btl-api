var express = require('express');
var router = express.Router();
var kanban = require('../controllers');

// Board
router.get('/boards', kanban.boards.list);
router.get('/:boardId', kanban.boards.get);
router.param('boardId', kanban.boards.findByID);

// Lanes
router.get('/:boardId/lanes', kanban.lanes.list)
router.get('/:boardId/lane/:laneId', kanban.lanes.get)
router.param('laneId', kanban.lanes.findByID);

// Cards
router.get('/:boardId/cards', kanban.cards.list)
router.get('/:boardId/card/:cardId', kanban.cards.get)
router.param('cardId', kanban.cards.findByID);

// Users
router.get('/:boardId/users', kanban.users.list)
router.get('/:boardId/user/:userId', kanban.users.get)
router.param('userId', kanban.users.findByID);

module.exports = router;

