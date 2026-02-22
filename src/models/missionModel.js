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

export async function selectMissions() {
    try {
        const db = await openDb()

        const listMissions = await db.all('SELECT * FROM missions LIMIT 100')

        if(listMissions){
            return {dados:listMissions}
        }else{
            return {erro:'Falha no select de dados !'}
        }
    } catch (erro) {
        console.error("Falha na estrutura:", erro.message)
        throw erro
    }
}
    
export async function selectMissionsById(id) {
    try {
        const db = await openDb()

        const listMissionsById = await db.get(`SELECT * FROM missions WHERE id = ?`, [id])

        if(listMissionsById){
            return listMissionsById
        }
    } catch (erro) {
        console.erro('Falha na estrutura:', erro.message)
        throw erro
    }
}