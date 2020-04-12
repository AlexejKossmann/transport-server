import { World } from "./ressources/World";

let world = new World(100, 100);
world.createTiles();
world.generate();
console.log(world.getTiles());
