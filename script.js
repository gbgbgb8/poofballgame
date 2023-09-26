const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    scene: {
        preload: preload,
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

function preload() {
    this.load.image('dog', 'https://img.icons8.com/color/dog/50');
    this.load.image('cat', 'https://img.icons8.com/color/cat/50');
    this.load.image('frog', 'https://img.icons8.com/color/frog/50');
    this.load.image('alien', 'https://img.icons8.com/color/alien/50');
}

function create() {
    setupScreen = this.add.container(0, 0);
    tokenOptions = [
        { id: 'dog', emoji: '🐶' },
        { id: 'cat', emoji: '🐱' },
        { id: 'frog', emoji: '🐸' },
        { id: 'alien', emoji: '👽' }
    ];
    drawSetupScreen.call(this);
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

function selectToken(id) {
    if (selectedTokens.length < 4) {
        selectedTokens.push(id);
        if (selectedTokens.length === 2) {  // Modify this to 4 for four players
            startGame.call(this);
        }
    }
}

function startGame() {
    setupScreen.setVisible(false);
    players = selectedTokens.map(tokenId => {
        return this.add.image(50, 750, tokenId).setScale(0.5);
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
    currentPlayer.x += currentRoll * 10;
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    turnText.setText(`Turn: ${selectedTokens[currentPlayerIndex]}`);
}

function update() {
    // Empty for now
}
