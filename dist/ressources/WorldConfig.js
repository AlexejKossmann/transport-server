"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WorldConfig {
}
exports.WorldConfig = WorldConfig;
WorldConfig.WORLD_SEED = 100;
WorldConfig.TILE_SIZE = 10;
WorldConfig.TYPE_GRASS = 0;
WorldConfig.TYPE_WATER = 1;
WorldConfig.TYPE_MOUNTAIN = 2;
WorldConfig.TYPES = [
    WorldConfig.TYPE_GRASS,
    WorldConfig.TYPE_WATER,
    WorldConfig.TYPE_MOUNTAIN
];
// Chance of one type of tile to be spawned
WorldConfig.RATIO_GRASS = .7;
WorldConfig.RATIO_WATER = .2;
WorldConfig.RATIO_MOUNTAIN = .1;
WorldConfig.RATIO = [
    WorldConfig.RATIO_GRASS,
    WorldConfig.RATIO_WATER,
    WorldConfig.RATIO_MOUNTAIN
];
//# sourceMappingURL=WorldConfig.js.map