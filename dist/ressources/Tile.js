"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Position_1 = require("./Position");
class Tile {
    constructor(size) {
        this.value = null;
        this.size = size;
    }
    getPosition() {
        return this.position;
    }
    setPosition(lat, lng) {
        this.position = new Position_1.Position(lat, lng);
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
}
exports.Tile = Tile;
//# sourceMappingURL=Tile.js.map