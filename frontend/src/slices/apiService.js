
const API_BASE_URL = 'http://localhost:5000'; //ip da api 

export async function calculateSquare(number) {
    try {
        const response = await fetch(`${API_BASE_URL}/square/${number}`, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error('Erro na requisição.');
        }

        const data = await response.json();
        return data.result;
    } catch (error) {
        throw new Error('Erro ao calcular o quadrado.');
    }
}
