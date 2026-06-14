const id = 1; 
const url = `http://localhost:3000/missions/${id}`;

async function testGetMissionById() {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log('Status:', response.status);
        console.log('Resposta:', result);
    } catch (error) {
        console.error('Erro:', error);
    }
}

testGetMissionById();