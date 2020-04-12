const express = require('express');
const dotenv = require('dotenv').config();
const app = express();

if (dotenv.error) {
    throw dotenv.error;
}

const port = process.env.SERVER_PORT || 3001;

app.listen(port, () => {
    console.log("Server running on port " + port);
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const World_1 = require("./dist/ressources/World");
let world = new World_1.World(100, 100);
world.createTiles();
world.generate();
console.log(world.getTiles());
//# sourceMappingURL=index.js.map
