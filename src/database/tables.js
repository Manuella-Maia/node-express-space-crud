import {openDb} from '../config/db.js'

export async function creatTables() {

  const db = await openDb()

  await db.exec(`
                CREATE TABLE if not exists missions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome text not null,
                crew integer,
                spacecraft text,
                destinations text,
                status text,
                durations text
            );
        `)
    console.log('✅ Tabela missions verificada/criada')
 
}