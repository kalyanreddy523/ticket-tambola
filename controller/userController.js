const User = require('../models/User')
const jwt = require('jsonwebtoken')

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.json({ user })
  } catch (error) {
    res.send({ msg: error.message })
  }
}

const userLogin = async (req, res) => {
  const { username, password } = req.body
  try {
    const user = await User.findOne({ username })
    console.log('User',user)
    if (user.password != password) {
      return res.send('password is not correct')
    }
    const token = jwt.sign({ user }, 'JWT-SECRET-KEY')
    res.json({ token })
  } catch (error) {
    res.send({ msg: error.message })
  }
}

module.exports = { createUser, userLogin }
