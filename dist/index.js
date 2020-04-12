"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const World_1 = require("./ressources/World");
let world = new World_1.World(100, 100);
world.createTiles();
world.generate();
console.log(world.getTiles());
//# sourceMappingURL=index.js.map