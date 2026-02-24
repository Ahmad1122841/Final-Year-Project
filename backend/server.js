import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import chatbotRoute from './routes/chatbot.js'   // 👈 add this

// App Config
const app = express()
const port = process.env.PORT || 4000

// middlewares
app.use(express.json())
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// chatbot route
app.use("/api/chatbot", chatbotRoute)   // 👈 add this

// api endpoints
app.get('/', (req, res) => {
    res.send("API Working")
})

app.listen(port, () => console.log('Server started on PORT :' + port))
