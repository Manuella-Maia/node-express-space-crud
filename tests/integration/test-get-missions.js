const url = 'http://localhost:3000/missions';

async function testGetMissions() {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log('Status:', response.status);
        console.log('Resposta:', result);
    } catch (error) {
        console.error('Erro:', error);
    }
}

testGetMissions();