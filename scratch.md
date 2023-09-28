# PoofBall Board Game: Resumption Guide

## Project Overview

The PoofBall Board Game is a web-based, grid layout game designed for 2 players. The game is built using Phaser.js and consists of a 20x20 grid. The players move their emoji tokens on the grid based on dice rolls, with the aim of reaching the finish line first.

### Key Features

- Player Token Selection Screen
- Dynamic Grid Layout
- Player Turns and Movement
- Dice Rolling Mechanism
- Game Info Bar with:
  - Turn Indicator
  - Dice and Results
  - Player Inventory ("Bag of Holding")
  - Game Info Messages ("Battle!", "Treasure!", etc.)

## Current State

As of the last update, the game:

- Allows for player token selection
- Renders a 20x20 grid
- Handles player turns and dice rolls
- Includes a basic Game Info Bar

### Known Issues

- The layout of the Game Info Bar needs to be optimized; text and icons are not well-spaced or well-organized.
  
## What's Next

1. **Game Info Bar**: Re-arrange the layout to fit all elements without overlapping or getting cut off. This includes the dice, dice results, player inventory, and messages.
   - Use Phaser's text and image positioning to layout the elements.
  
2. **Player Inventory**: Each player should have a "Bag of Holding" represented by a bag emoji next to their player emoji in the Game Info Bar.
   - This bag should be clickable and should eventually show the player's inventory items.

3. **Game Info Messages**: Implement a mechanism to display in-game messages like "Battle!", "Treasure!", etc. in the Game Info Bar.

4. **Game Mechanics**: As of now, only the basic movement is implemented. Additional game mechanics like battles, treasures, and special squares are to be added.

5. **Code Refactoring**: It's a good idea to keep an eye on the code structure and consider refactoring for cleaner, more maintainable code.

6. **Testing**: As features get added, testing them to make sure they integrate well with existing functionalities is important.

## Project Files

- `index.html`: The HTML layout that hosts the game.
- `script.js`: The main JavaScript file containing the game logic. As of the last update, this file has implemented the above-mentioned features and has known issues that need to be fixed.

## Additional Notes

- All changes should be tested in various browser sizes to ensure responsiveness.

This guide should provide a good starting point for resuming work on the PoofBall Board Game.

# PoofBall Board Game - Updated Instruction Manual and Game Layout

## Introduction

The PoofBalls Board Game is a web-based, 2D grid-based game designed for 2 players. It uses emoji tokens to represent players. Developed using Phaser.js, the game operates on a 20x20 grid. The aim is still to reach a designated finish square before the opponent.

## Game Components

### Players

- Players: 2
- Token Choices: Dog 🐶, Cat 🐱, Frog 🐸, Alien 👽

### Game Board

- Grid Size: 20x20
- **No Special Squares or Bad Guys as of the current version**
- Start 🏁 and Finish 🏁 squares are assumed but not yet implemented.

### Dice

- Emoji representation for the roll button: 🎲
- Result displayed as number block emojis: 1️⃣, 2️⃣, 3️⃣, 4️⃣, 5️⃣, 6️⃣

### Inventory (New)

- Each player has a "Bag of Holding" represented by a bag emoji in the Game Info Bar.
  
### Game Info Bar (New)

- Displays whose turn it is.
- A clickable dice emoji that shows the result when rolled.
- Inventory ("Bag of Holding") for each player.
- Game info messages like "Battle!", "Treasure!", etc. (planned, not yet implemented).

## Game Mechanics

### Setup

1. **Token Selection**: Each player selects an emoji token.
2. **Game Start**: The game begins after both players have selected their tokens.

### Main Game Loop

1. **Roll Dice**: A player clicks the dice emoji to roll a six-faced dice.
2. **Movement**: The player moves the number of squares indicated by the dice roll.
3. **Turn End**: The next player takes their turn.

### Inventory (New)

- "Bag of Holding" is displayed but functionality to use or collect items is not yet implemented.

### Winning Condition

- **Not Yet Implemented**

### Progression

- **Not Yet Implemented**

## Development Phases

1. **Phase 1: Basic Grid Layout and Player Movement**
    - Player Tokens: Players choose from available emoji tokens.
    - Dice Roll Mechanism: A clickable dice emoji in the Game Info Bar.
    - Player Movement: Players move based on the dice roll.
    - Turn Mechanics: Turn passes to the next player after a move.
    - Game Info Bar: Displays turn, dice roll result, and player inventory.

2. **Phase 2**: Implementation of bad guys and basic battle mechanics.
3. **Phase 3**: Implementation of treasures and their utilities.
4. **Phase 4**: Implementation of special squares and their effects.
5. **Phase 5**: Implementation of winning conditions and level transitions.
