import express from "express"
import cors from "cors"
import path from 'path'
import apiRouter from "./app/routes/api.js"

// Cration du serveur
const app = express()

// Permet de comprendre des body en JSON
app.use(express.json())

// Autorise le front à se connecter au back
const corsOptions = {
    origin: "" // url du front
}
app.use(cors(corsOptions))

app.use("/api", apiRouter)

app.use(express.static("public") )
app.get('/', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')})
})

// Démarage du serveur sur le port défini dans le .env
// ou sur le port 3000 par défut
app.listen(process.env.PORT || 3000)

export default app