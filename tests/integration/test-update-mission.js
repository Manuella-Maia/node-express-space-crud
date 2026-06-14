const id = 5; 
const url = `http://localhost:3000/missions/${id}`;
const data = {
    nome: 'Missão Apollo 12 Atualizada',
    crew: 4,
    spacecraft: 'Apollo 11',
    destinations: 'Lua',
    status: 'Concluída',
    durations: '9 dias'
};

async function testUpdateMission() {
    try {
        const response = await fetch(url, {
            method: 'PUT',
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

testUpdateMission();