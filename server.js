import express from 'express';
import cors from 'cors';
import {creatTables} from './src/database/tables.js';
import {definedRoutes} from './src/routes/missionRoutes.js';

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static('public'));

const PORT = 3000;

creatTables().then(() => {
    
    app.use('/missions', definedRoutes);

    app.listen(PORT, () => {
        console.log("### SERVIDOR LIGADO ###");
    });
}).catch(erro => {
    console.log('Erro crítico ao iniciar o banco:', erro);
});

