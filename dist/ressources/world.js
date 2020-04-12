"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tile_1 = require("./Tile");
const WorldConfig_1 = require("./WorldConfig");
const Position_1 = require("./Position");
const Perlin_1 = require("./Perlin/Perlin");
class World {
    constructor(width, height) {
        this.tiles = [];
        this.width = width;
        this.height = height;
        this.isInitialized = false;
    }
    createTiles() {
        for (let i = 0; i < this.width; i++) {
            let temp = [];
            for (let j = 0; j < this.height; j++) {
                let tile = new Tile_1.Tile(WorldConfig_1.WorldConfig.TILE_SIZE);
                tile.setPosition(i, j);
                temp.push(tile);
            }
            this.tiles.push(temp);
        }
    }
    getTiles() {
        return this.tiles;
    }
    setTileValue(posX, posY, value) {
        this.tiles[posX][posY].setValue(value);
    }
    generate() {
        let yoff = 0;
        for (let y = 0; y < this.height; y++) {
            let xoff = 0;
            for (let x = 0; x < this.width; x++) {
                this.tiles[x][y].value = Perlin_1.Perlin.perlin2(x, y);
                xoff += WorldConfig_1.WorldConfig.PERLIN_INCREMENT;
            }
            yoff += WorldConfig_1.WorldConfig.PERLIN_INCREMENT;
        }
    }
    getRandomPosition() {
        return new Position_1.Position(Math.floor(Math.random() * Math.floor(this.width)), Math.floor(Math.random() * Math.floor(this.height)));
    }
    render() {
        //TODO: implement rendering of Tiles
    }
}
exports.World = World;
//# sourceMappingURL=World.js.map