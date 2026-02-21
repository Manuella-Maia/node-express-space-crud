// banco de dados
// tabela : missions
// colunas : id,nome,crew,spacecraft,destinations, staus e durations

import {openDb} from './db.js'

const db = await openDb()

export async function startBank() {
    try{
        const table = `
                CREATE TABLE if not exists missions (
                id interger not null autoincrement primary key,
                nome text not null,
                crew interger,
                spacecraft text,
                destinations text,
                status text,
                durations text
            );
            `

        await db.exec(table)
        console.log('✅ Tabela "missions" configurada')
    }catch(erro){
        console.error("❌ Erro ao criar tabela de missões:", erro);
        throw erro;
    }
}


 