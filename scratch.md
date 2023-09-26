
---

# PoofBall Board Game - Instruction Manual and Game Layout

## Introduction

The PoofBalls Board Game is a 2D grid-based game designed for 2 to 4 players. It uses a variety of emoji tokens to represent players, enemies, and other game elements. The game is developed using Phaser.js and consists of multiple levels, with the first being a 20x20 grid. The goal is to reach the Princess emoji at the Finish square before the other players.

---

## Game Components

### Players

- Players: 2 to 4
- Token Choices: Dog 🐶, Alien 👽, Frog 🐸, Cat 🐱, etc.
  
### Game Board

- Grid Size: 20x20 for Level 1.
- Special Squares: Lava 🌋, Water 💧.
- Start 🏁 and Finish 🏁 squares.
  
### Dice

- Emoji representations: 1️⃣, 2️⃣, 3️⃣, 4️⃣, 5️⃣, 6️⃣.
  
### Bad Guys

- Types: Weakling 😈, Tough Guy 👹.
  
### Treasures

- Types: Hammer 🔨, Sword 🗡️, Coins (Gold 🥇, Silver 🥈, Copper 🥉).
  
### Shop

- Items: Sword, Hammer.
- Costs: Defined in terms of coins.

---

## Game Mechanics

### Setup

1. **Number of Players**: The game asks for the number of players (2-4).
2. **Token Selection**: Each player selects an emoji token.
3. **Turn Order**: The turn order is randomly determined.

### Main Game Loop

1. **Roll Dice**: A player clicks a button to roll a six-faced dice.
2. **Movement**: The player moves the number of squares indicated by the dice roll.
3. **Square Interaction**: Players interact based on the square they land on:
    - **Bad Guys**: 
        - *Weaklings* have a 50/50 chance of running away.
        - *Tough Guys* never run away.
        - Players can use inventory items like hammers and swords.
    - **Treasures**: Players can collect them and use them later.
    - **Special Squares**: Roll dice to determine movement. Odd numbers move backward one space, even numbers move forward one space.
4. **Turn End**: Check if any player has reached the Finish square. If not, the next player takes their turn.

### Inventory

- No limit to the number of items.
- Items can only be used once and must be selected at the beginning of a battle.

### Winning Condition

- The first player to reach the Princess emoji at the Finish square wins the game.

### Progression

- Upon completion of a level, the board is re-randomized for the next level.

---

## Potential Issues and Resolutions

1. **Bad Guy Difficulty**: There are two types, Weaklings and Tough Guys.
2. **Multiple Treasures**: Players can hold multiple items, but items are single-use.
3. **Game Balance**: No specific balancing done; it's acceptable for some players to have an advantage by finding treasures first.
4. **Backward Movement**: The Start square is the limit for backward movement.
5. **Draws**: In case of a draw, players will roll off until there is a winner.

---

## Development Phases

1. **Phase 1**: Basic grid layout and player movement.
2. **Phase 2**: Bad guys and basic battle mechanics.
3. **Phase 3**: Treasures and their utilities.
4. **Phase 4**: Special squares and their effects.
5. **Phase 5**: Winning conditions and level transitions.
6. **Phase 6**: Implementation of the shop (post-Level 1).

---

This manual and layout description encapsulate the complete mechanics, rules, and phases of development for the Emojis Board Game. It serves as a comprehensive guide for both playing and developing the game further.

Feel free to refer back to this document in any future development or gameplay sessions.