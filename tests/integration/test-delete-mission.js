const id = 6; 
const url = `http://localhost:3000/missions/${id}`;

async function testDeleteMission() {
    try {
        const response = await fetch(url, {
            method: 'DELETE'
        });

        const result = await response.json();
        console.log('Status:', response.status);
        console.log('Resposta:', result);
    } catch (error) {
        console.error('Erro:', error);
    }
}

testDeleteMission();