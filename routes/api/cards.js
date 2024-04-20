const express = require('express');
const router = express.Router();
const cardsCtrl = require('../../controllers/api/cards');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/cards'

// POST /api/cards/new
router.post('/new', ensureLoggedIn, cardsCtrl.create);

// GET /api/cards
router.get('/', ensureLoggedIn, cardsCtrl.fetchCards);

// GET /api/cards/:cardId
router.get('/:cardId', cardsCtrl.getCardById);

// PUT /api/cards/:cardId
router.put('/:cardId', ensureLoggedIn, cardsCtrl.updateCard);

// DELETE /api/cards/:cardId
router.delete('/:cardId', ensureLoggedIn, cardsCtrl.deleteCard);

module.exports = router;