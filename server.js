import express from 'express'
import { openDb } from './src/database/db.js'

const app = express()

app.use(express.json())

openDb()

const PORT = 3000 

app.post('/',(req,res) => {

})

app.listen(PORT, () => {
    console.log("SERVIDOR LIGADO")
})