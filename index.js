/*----- constants -----*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

/*----- app's state (variables) -----*/

let board;
let turn = 'X';
let win;
let playerNames = { X: "Player 1", O: "Player 2" };

/*----- cached element references -----*/

const squares = Array.from(document.querySelectorAll('#board div'));
const winAudio = new Audio("sounds/trumpet.mp3");

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);
const messages = document.querySelector('h2');
document.getElementById('reset-button').addEventListener('click', init);


/*----- functions -----*/

function getWinner() {
    let winner = null;
    winningCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
        });
        return winner ? winner : board.includes('') ? null : 'T';
};

function handleTurn(event) {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });
    // Prevent move if square is already filled or game is over
    if (board[idx] || win) return;

    board[idx] = turn;
    win = getWinner();
    turn = turn === 'X' ? 'O' : 'X';
    render();
}

function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    win = null; 
    winAudio.pause();
    winAudio.currentTime = 0;
    render();
};

function render() {
    board.forEach(function(mark, index) {
        squares[index].textContent = mark;
    });
    messages.textContent = win === 'T'
        ? `That's a tie!!!`
        : win
            ? `${playerNames[win]} wins the game!`
            : `It's ${playerNames[turn]}'s turn!`;

    if (win && win !== 'T') {
        winAudio.currentTime = 0;
        winAudio.play();
    }
}
init();
