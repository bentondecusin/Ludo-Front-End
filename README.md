# Ludo (3110-Final-Project)

## Hi! Welcome to Ludo (Release Version)

## Game Manual

In short, this is a chess game that has many variants such as the Chinese variant Aeroplane chess and the Indian variant Pachisi.

In the fully implemented version, the game is to be played by 4 players (2 human and 2 AI)

Each player has 4 tokens at "Home" and takes a turn in playing.

The gameboard has 3 parts, Homes, Track, and Strips, each containing several squares.

The token starts at Home, then moves around the Track, and finally enters the strips.

There are many criteria for winning, but they are to be implemented.

### In each round:

The player tosses a dice.

If it is a six, the player may choose to

1. Move a Home token to the Track or
2. Forward a Track token by 6 squares

and  
**After the movement, the player has a "bonus round", and he/she can
toss the dice again**

If it is not a six, the player can only move a Track token or Strip token by the squares of the number indicated by the dice.

## Play the game

We have are pleased to offer playing options for this game:

1. Playing the game in a web browser
2. Playing the game in a \*NIX System terminal

### Play on a broswer

Visit https://ludo-front-end.vercel.app :)

### Play on a terminal

Install the game (see below)

In your terminal, type
`git clone https://github.coecis.cornell.edu/cl2597/CS-3110-Final-Project`  
`cd game_path`
where game_path is the path of the game folder.

Then type  
`make play` (Terminal based, Smart AI, has timeout mechanism) or  
`make ta` (Terminal based, Smart AI, no timeout mechanism) or  
`make to` (Terminal based, Dull AI, has timeout mechanism) or  
`make tr` (Terminal based, Dull AI, no timeout mechanism) or

In a game you can either type `t` (toss) to toss a dice or `m i` (move i) to move token i (As the only player your token numbers will be 1, 2, 3 and 4.

### For advanced user (hosting a server)

Install Next.js and Node.js  
`cd ludo-front-end`  
`yarn` then `yarn dev`  
Create local sever: `make ba`

Now when you visit http://localhost:6942/, you can play the game on a browser!

### For advanced user (customize the game!)

Use the existing module to design your own AI algorithm, timeout mechanism, moving rule.

## Installation

### OCaml (basic part)

We assume you have OCaml installed on your device.

If you do not meet the system requirement, feel free to play the web game remotely during demo.

### OCaml (server part)

You may need to install gmp and lib-dev on your system  
MacOS: `brew install libev` `brew install gmp`  
Ubuntu: `apt install pkg-config`, `apt install libev-dev`, `apt install libgmp3-dev`

`cd game_path`
where game_path is the path of the game folder.
`make install` to install the extra packages via opam

### Node.js

Check out https://nodejs.org/en/download/package-manager/
