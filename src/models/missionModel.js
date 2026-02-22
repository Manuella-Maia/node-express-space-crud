import {openDb} from '../config/db.js'

export async function insertMissions(dados) {
    try {
        const {nome, crew, spacecraft, destinations, status, durations} = dados
        
        const db = await openDb()// direfença entre exec e run olhar ! run permite devolver lados da ultima linha criada 

        const resultado = await db.run(`INSERT INTO missions (nome, crew, spacecraft, destinations, status, durations)
            VALUES(?, ?, ?, ?, ?, ?)`,
        [nome, crew, spacecraft, destinations, status, durations])

       if(resultado){
         return {id:resultado.lastID}
       }else{
        return {erro:'Falha no salvamento de dados no db'}
       }
    } catch (erro) {
        console.error("Falha na estrutura/DDL:", erro.message)
        throw erro
    }
}

    