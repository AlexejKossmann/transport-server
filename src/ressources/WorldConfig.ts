export class WorldConfig {
    static TILE_SIZE:number = 10;

    static TYPE_GRASS = 0;
    static TYPE_WATER = 1;
    static TYPE_MOUNTAIN = 2;

    // Chance of one type of tile to be spawned
    static RATIO_GRASS = .7;
    static RATIO_WATER = .2;
    static RATIO_MOUNTAIN = .1;
}
