// script.js
document.addEventListener('DOMContentLoaded', () => {
    const rollDiceButton = document.getElementById('roll-dice');
    const diceResult = document.getElementById('dice-result');
    const currentPlayerElement = document.getElementById('current-player');
    const players = [
        { element: document.getElementById('player1'), position: 0 },
        { element: document.getElementById('player2'), position: 0 }
    ];
    let currentPlayerIndex = 0;

    // Perguntas de autoconhecimento associadas a cada casa do tabuleiro
    const perguntas = [
        "Qual foi um momento recente em que você se sentiu verdadeiramente em paz?",
        "O que te faz sentir mais vivo(a)?",
        "Quais são três coisas que você gosta em si mesmo(a)?",
        "Como você lida com situações que fogem do seu controle?",
        "Qual é o maior desafio que você enfrentou e como superou?",
        "O que te motiva a sair da cama todas as manhãs?",
        "Se você pudesse mudar uma coisa em sua vida, o que seria?",
        "Qual é um hábito que você gostaria de desenvolver?",
        "Como você expressa sua gratidão no dia a dia?",
        "O que o sucesso significa para você?",
        "O que você aprendeu sobre si mesmo(a) no último ano?",
        "Como você recarrega suas energias quando se sente esgotado(a)?",
        "Qual é um valor que você considera inegociável?",
        "Como você reage às críticas?",
        "O que você gostaria de dizer ao seu 'eu' de cinco anos atrás?",
        "Qual é o maior sonho que você tem para o futuro?",
        "Que tipo de pessoa você quer ser lembrado(a) como?",
        "O que te impede de alcançar seus objetivos?",
        "Como você costuma lidar com o medo?",
        "Qual foi a última vez que você saiu da sua zona de conforto?",
        "Qual é a qualidade que você mais admira nas outras pessoas?",
        "O que te faz sentir mais confiante?",
        "Quais são as três prioridades mais importantes da sua vida atualmente?",
        "Como você costuma lidar com situações de conflito?",
        "O que você faz para cuidar da sua saúde mental?"
    ];

    rollDiceButton.addEventListener('click', () => {
        const diceValue = Math.floor(Math.random() * 6) + 1;
        diceResult.textContent = `Resultado: ${diceValue}`;

        const currentPlayer = players[currentPlayerIndex];
        currentPlayer.position += diceValue;

        if (currentPlayer.position >= 24) { // Se o jogador alcança ou passa a última posição
            alert(`Jogador ${currentPlayerIndex + 1} ganhou o jogo!`);
            resetGame();
        } else {
            updatePlayerPosition(currentPlayer);
            
            // Exibe a pergunta correspondente à posição atual
            const pergunta = perguntas[currentPlayer.position];
            setTimeout(() => alert(`Pergunta de Autoconhecimento: ${pergunta}`), 500);
            
            currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
            currentPlayerElement.textContent = `Jogador Atual: ${currentPlayerIndex + 1}`;
        }
    });

    function updatePlayerPosition(player) {
        const squares = document.querySelectorAll('.square');
        squares.forEach(square => square.textContent = '');
        squares[player.position].textContent = player.element.textContent;
    }

    function resetGame() {
        players.forEach(player => player.position = 0);
        currentPlayerIndex = 0;
        currentPlayerElement.textContent = `Jogador Atual: 1`;
        diceResult.textContent = `Resultado: `;
        updatePlayerPosition(players[0]);
        updatePlayerPosition(players[1]);
    }
});
