import {openDb} from '../config/db.js';

export async function insertMissions(dados) {
    try {
        const {nome, crew, spacecraft, destinations, status, durations} = dados;
        
        const db = await openDb();

        const resultado = await db.run(`INSERT INTO missions (nome, crew, spacecraft, destinations, status, durations)
            VALUES(?, ?, ?, ?, ?, ?)`, [nome, crew, spacecraft, destinations, status, durations]
        );

         return {id:resultado.lastID};
       
    } catch (error) {
        console.error("Falha na estrutura create:", error.message)
        throw error;
    }
}

export async function selectMissions() {
    try {
        const db = await openDb();

        const listMissions = await db.all('SELECT * FROM missions');
    
        return {dados:listMissions};
        
    } catch (error) {
        console.error("Falha na estrutura select:", error.message)
        throw error;
    }
}
    
export async function selectMissionsById(id) {
    try {
        const db = await openDb();

        const listMissionsById = await db.get(`SELECT * FROM missions WHERE id = ?`, [id]);

        return listMissionsById;
        
    } catch (error) {
        console.erro('Falha na estrutura selectbyid:', error.message)
        throw error;
    };
};

export async function updateMission(dados,id) {
    try {
        const {nome, crew, spacecraft, destinations, status, durations} = dados

        const db = await openDb();

        const missionUpdate = await db.run(`UPDATE missions 
            SET nome = ? , crew = ?, spacecraft = ? , destinations = ?, status = ?, durations = ? 
            WHERE id = ? `,[nome, crew, spacecraft, destinations, status, durations, id]
        );

        return missionUpdate.changes;
            
    } catch (error) {
        console.error('Falha na estrutura de update:', error.message)
        throw error;
    };
};

export async function deleteMission(id) {
    try {
        const db = await openDb();

        const missionDeleted = await db.run('DELETE FROM missions WHERE id = ?',[id])

        return missionDeleted.changes
        
    } catch (error) {
        console.error('Falha na estrutura delete:', error.message)
        throw error;
    };
};