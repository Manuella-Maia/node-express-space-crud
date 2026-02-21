import express from 'express'
import {creatTables} from './src/database/tables.js'


const app = express()

app.use(express.json())

const PORT = 3000 

creatTables().then(() => {
    
    app.use('/missions', )





    app.listen(PORT, () => {
        console.log("### SERVIDOR LIGADO ###")
    })
}).catch(erro => {
    console.log('Erro crítico ao iniciar o banco:', erro)
})
