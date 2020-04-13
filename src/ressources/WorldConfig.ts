export class WorldConfig {
    static WORLD_SEED = 100;
    static TILE_SIZE:number = 10;

    static TYPE_GRASS = 0;
    static TYPE_WATER = 1;
    static TYPE_MOUNTAIN = 2;

    static TYPES = [
        WorldConfig.TYPE_GRASS,
        WorldConfig.TYPE_WATER,
        WorldConfig.TYPE_MOUNTAIN
    ];
    // Chance of one type of tile to be spawned
    static RATIO_GRASS = .7;
    static RATIO_WATER = .2;
    static RATIO_MOUNTAIN = .1;

    static RATIO = [
        WorldConfig.RATIO_GRASS,
        WorldConfig.RATIO_WATER,
        WorldConfig.RATIO_MOUNTAIN
    ];
}
