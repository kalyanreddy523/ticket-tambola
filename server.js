const dotenv =require("dotenv")
const express =require("express")
const app = express()
const port = process.env.PORT || 5000

// db
const connectDB = require('./db/connect')

// middleware
app.use(express.json())

// router
const userRouter = require('./routes/userRoutes')
app.use('/', userRouter)
dotenv.config()

const start = () => {
  connectDB(process.env.MONGO_URI)
  app.listen(port, console.log(`server is listning on port: ${port}`))
}
start()
