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

function preload() {
    this.load.image('dog', 'https://img.icons8.com/color/dog/50');
    this.load.image('cat', 'https://img.icons8.com/color/cat/50');
}

function create() {
    setupScreen = this.add.container(0, 0);
    tokenOptions = [
        { id: 'dog', emoji: '🐶' },
        { id: 'cat', emoji: '🐱' },
        { id: 'frog', emoji: '🐸' },
        { id: 'alien', emoji: '👽' }
    ];
    drawSetupScreen();
}

function drawSetupScreen() {
    let yPosition = 100;
    tokenOptions.forEach((option, index) => {
        const text = this.add.text(100, yPosition, option.emoji, { fontSize: '48px' });
        text.setInteractive();
        text.on('pointerdown', () => selectToken(option.id));
        setupScreen.add(text);
        yPosition += 60;
    });
}

function selectToken(id) {
    if (selectedTokens.length < 2) {
        selectedTokens.push(id);
        if (selectedTokens.length === 2) {
            startGame();
        }
    }
}

function startGame() {
    setupScreen.setVisible(false);
    // Initialize and place players based on selectedTokens
    // ... rest of the main game loop
}

function update() {
    // Empty for now
}
