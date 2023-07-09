const express = require('express')
const router = express.Router()
const { createUser, userLogin } = require('../controller/userController')
const {
  createTicket,
  getTambolaTickets,
} = require('../controller/ticketsController')

router.post('/create', createUser)
router.post('/login', userLogin)
router.post('/ticket', createTicket)
router.get('/tickets/userId', getTambolaTickets)
module.exports = router
