const config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 800
    },
    scene: {
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

let setupScreen;
let tokenOptions;
let selectedTokens = [];
let players;
let diceRollButton;
let currentRoll;
let currentPlayerIndex = 0;
let turnText;
let gridGraphics;
let diceRollResult;
let gameInfoText;
let infoBarHeight = 100;
let bagsOfHolding = [];

function create() {
    setupScreen = this.add.container(0, 0);
    tokenOptions = [
        { id: 'dog', emoji: '🐶' },
        { id: 'cat', emoji: '🐱' }
    ];
    drawSetupScreen.call(this);

    gridGraphics = this.add.graphics();
    drawGrid.call(this);
}

function drawSetupScreen() {
    let yPosition = 100;
    tokenOptions.forEach((option, index) => {
        const text = this.add.text(100, yPosition, option.emoji, { fontSize: '48px' });
        text.setInteractive();
        text.on('pointerdown', () => selectToken.call(this, option.id));
        setupScreen.add(text);
        yPosition += 60;
    });
}

function drawGrid() {
    gridGraphics.lineStyle(1, 0xFFFFFF, 0.8);
    const cellWidth = game.canvas.width / 20;
    const cellHeight = (game.canvas.height - infoBarHeight) / 20;
    for (let x = 0; x <= game.canvas.width; x += cellWidth) {
        for (let y = 0; y <= game.canvas.height - infoBarHeight; y += cellHeight) {
            gridGraphics.strokeRect(x, y, cellWidth, cellHeight);
        }
    }
}

function selectToken(id) {
    selectedTokens.push(id);
    if (selectedTokens.length === 2) {
        startGame.call(this);
    }
}

function startGame() {
    const cellWidth = game.canvas.width / 20;
    const cellHeight = (game.canvas.height - infoBarHeight) / 20;

    setupScreen.setVisible(false);
    players = selectedTokens.map((tokenId, index) => {
        const token = tokenOptions.find(option => option.id === tokenId);
        bagsOfHolding[index] = this.add.text(400 + index * 200, game.canvas.height - infoBarHeight / 2, `${token.emoji} 👜`, { fontSize: '24px' });
        return this.add.text(cellWidth / 2, game.canvas.height - infoBarHeight - cellHeight / 2, token.emoji, { fontSize: '32px' });
    });

    turnText = this.add.text(60, game.canvas.height - infoBarHeight / 2, '', { fontSize: '24px' });
    updateTurnText();

    diceRollButton = this.add.text(20, game.canvas.height - infoBarHeight / 2, '🎲', { fontSize: '48px' });
    diceRollButton.setInteractive();
    diceRollButton.on('pointerdown', rollDice);

    diceRollResult = this.add.text(80, game.canvas.height - infoBarHeight / 2, '', { fontSize: '48px' });

    gameInfoText = this.add.text(700, game.canvas.height - infoBarHeight / 2, '', { fontSize: '24px' });
}

function updateTurnText() {
    const currentEmoji = tokenOptions.find(option => option.id === selectedTokens[currentPlayerIndex]).emoji;
    turnText.setText(`${currentEmoji}'s Turn`);
}

function rollDice() {
    currentRoll = Math.floor(Math.random() * 6) + 1;
    diceRollResult.setText(`${currentRoll}️⃣`);
    movePlayer();
}

function movePlayer() {
    let currentPlayer = players[currentPlayerIndex];
    const cellWidth = game.canvas.width / 20;
    const cellHeight = (game.canvas.height - infoBarHeight) / 20;
    let newGridX = (currentPlayer.x - cellWidth / 2) / cellWidth + currentRoll;

    if (newGridX * cellWidth + cellWidth / 2 <= game.canvas.width - cellWidth / 2) {
        currentPlayer.x = newGridX * cellWidth + cellWidth / 2;
    } else {
        currentPlayer.x = game.canvas.width - cellWidth / 2;
    }

    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    updateTurnText();
}

function update() {
    // Empty for now
}
