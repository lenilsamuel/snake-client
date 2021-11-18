# Snake Client
Snake is a very popular video game concept where the player manoeuvres a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth manoeuvres. The goal is to grow the snake to become as long as possible without bumping into the side walls, or bumping into itself, upon which it dies.

## Purpose
**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at [Lighthouse Labs](https://github.com/lighthouse-labs). 

## Credits
The server code for this game was not written from scratch. It is a heavily modified version of the single player game [Snek](https://github.com/taniarascia/snek) created by [Tania Rascia](https://github.com/taniarascia). 

## Instructions
* Clone server code from repository

```bash
git clone https://github.com/lighthouse-labs/snek-multiplayer.git

# install and run via npm
npm install
npm run play
```
* Run client server
```bash
node client.js
```
* Use the **w** key to move the snake up
* Use the **a** key to move the snake left
* Use the **s** key to move the snake down
* Use the **d** key to move the snake right
* Avoid colliding into the wall or on yourself, or the game ends
* Press `CTRL + C` to quit the game


