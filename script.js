const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
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

function create() {
    setupScreen = this.add.container(0, 0);
    tokenOptions = [
        { id: 'dog', emoji: '🐶' },
        { id: 'cat', emoji: '🐱' },
        { id: 'frog', emoji: '🐸' },
        { id: 'alien', emoji: '👽' }
    ];
    drawSetupScreen.call(this);

    // Create a new graphics object and draw grid
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
    for (let x = 0; x <= 800; x += 40) {
        for (let y = 0; y <= 800; y += 40) {
            gridGraphics.strokeRect(x, y, 40, 40);
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
    setupScreen.setVisible(false);
    gridGraphics.clear();
    drawGrid.call(this);

    players = selectedTokens.map(tokenId => {
        return this.add.text(50, 750, tokenOptions.find(x => x.id === tokenId).emoji, { fontSize: '48px' });
    });
    diceRollButton = this.add.text(700, 700, '🎲 Roll', { fontSize: '48px' });
    diceRollButton.setInteractive();
    diceRollButton.on('pointerdown', rollDice);
    turnText = this.add.text(700, 600, `Turn: ${selectedTokens[currentPlayerIndex]}`, { fontSize: '24px' });
}

function rollDice() {
    currentRoll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${currentRoll}`);
    movePlayer();
}

function movePlayer() {
    let currentPlayer = players[currentPlayerIndex];
    let newX = currentPlayer.x + currentRoll * 10;

    if (newX <= 790) {
        currentPlayer.x = newX;
    } else {
        currentPlayer.x = 790;
    }

    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    turnText.setText(`Turn: ${selectedTokens[currentPlayerIndex]}`);
}

function update() {
    // Empty for now
}
