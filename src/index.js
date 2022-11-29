import express from "express"
import cors from "cors"
import router from "./routes/router.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

app.listen(5000)


//metodo delete para apagar inputs:
// iniciar DB: mongod --dbpath ~/.mongo
//iniciar servidor local: npx nodemon src/index.js
//iniciar terminal mongo: mongo
//rodar o index: node src/index.js
// rodar projeto react: npm start