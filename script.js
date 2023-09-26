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

function preload() {
    this.load.image('dog', 'https://img.icons8.com/color/dog/50');
    this.load.image('cat', 'https://img.icons8.com/color/cat/50');
}

let players;
let currentPlayerIndex = 0;

function create() {
    for (let x = 0; x < 20; x++) {
        for (let y = 0; y < 20; y++) {
            const rect = this.add.rectangle(x * 40, y * 40, 40, 40, 0xFFFFFF);
            rect.setStrokeStyle(2, 0x0000FF);
        }
    }
    players = [
        this.add.image(0, 0, 'dog'),
        this.add.image(0, 0, 'cat')
    ];
    
    const rollButton = this.add.text(820, 40, 'Roll Dice', { fill: '#00FF00' });
    rollButton.setInteractive();
    rollButton.on('pointerdown', rollDice);
}

function rollDice() {
    const roll = Math.floor(Math.random() * 6) + 1;
    players[currentPlayerIndex].x += roll * 40;
    if (players[currentPlayerIndex].x >= 800) {
        players[currentPlayerIndex].x = 760;
    }
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
}

function update() {
    // Empty for now
}
