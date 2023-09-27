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
let infoBar;

function create() {
    setupScreen = this.add.container(0, 0);
    tokenOptions = [
        { id: 'dog', emoji: '🐶' },
        { id: 'cat', emoji: '🐱' },
        { id: 'frog', emoji: '🐸' },
        { id: 'alien', emoji: '👽' }
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
    const cellHeight = (game.canvas.height - 2 * cellHeight) / 20;
    for (let x = 0; x <= game.canvas.width; x += cellWidth) {
        for (let y = 0; y <= game.canvas.height - 2 * cellHeight; y += cellHeight) {
            gridGraphics.strokeRect(x, y, cellWidth, cellHeight);
        }
    }
}

function selectToken(id) {
    if (selectedTokens.length < 4) {
        selectedTokens.push(id);
        if (selectedTokens.length === 2) {
            startGame.call(this);
        }
    }
}

function startGame() {
    const cellWidth = game.canvas.width / 20;
    const cellHeight = (game.canvas.height - 2 * cellHeight) / 20;

    setupScreen.setVisible(false);

    // Initialize the Game Info Bar
    infoBar = this.add.graphics();
    infoBar.fillStyle(0x000000, 0.8);
    infoBar.fillRect(0, game.canvas.height - 2 * cellHeight, game.canvas.width, 2 * cellHeight);

    // Initialize player tokens
    players = selectedTokens.map(tokenId => {
        const token = tokenOptions.find(option => option.id === tokenId);
        return this.add.text(cellWidth / 2, game.canvas.height - 3 * cellHeight / 2, token.emoji, { fontSize: '32px' });
    });

    // Initialize Game Info Bar elements
    turnText = this.add.text(cellWidth, game.canvas.height - cellHeight, '', { fontSize: '24px' });
    diceRollButton = this.add.text(game.canvas.width / 2, game.canvas.height - cellHeight, '🎲', { fontSize: '48px' });
    diceRollResult = this.add.text(game.canvas.width - 2 * cellWidth, game.canvas.height - cellHeight, '', { fontSize: '24px' });

    diceRollButton.setInteractive();
    diceRollButton.on('pointerdown', rollDice);

    updateTurnText();
}

function rollDice() {
    currentRoll = Math.floor(Math.random() * 6) + 1;
    diceRollResult.setText(`Rolled: ${currentRoll}`);
    movePlayer();
}

function movePlayer() {
    let currentPlayer = players[currentPlayerIndex];
    const cellWidth = game.canvas.width / 20;
    let newGridX = (currentPlayer.x - cellWidth / 2) / cellWidth + currentRoll;

    if (newGridX * cellWidth + cellWidth / 2 <= game.canvas.width - cellWidth / 2) {
        currentPlayer.x = newGridX * cellWidth + cellWidth / 2;
    } else {
        currentPlayer.x = game.canvas.width - cellWidth / 2;
    }

    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    updateTurnText();
}

function updateTurnText() {
    const currentEmoji = tokenOptions.find(option => option.id === selectedTokens[currentPlayerIndex]).emoji;
    turnText.setText(`Turn: ${currentEmoji}`);
}

function update() {
    // Empty for now
}
