const url = 'http://localhost:3000/missions';
const data = {
    nome: 'Missão Apollo 12',
    crew: 3,
    spacecraft: 'Apollo 11',
    destinations: 'Lua',
    status: 'Concluída',
    durations: '8 dias'
};

async function testCreateMission() {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        console.log('Status:', response.status);
        console.log('Resposta:', result);
    } catch (error) {
        console.error('Erro:', error);
    }
}

testCreateMission();