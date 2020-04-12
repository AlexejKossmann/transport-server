import { Tile } from './Tile';
import { WorldConfig } from "./WorldConfig";
import { Position } from "./Position";

export class World {

    private readonly width: number;
    private readonly height: number;
    private isInitialized: boolean;
    private tiles: Tile[][] ;
    private center: Position;

    constructor(width: number, height: number ) {
        this.width = width;
        this.height = height;
        this.isInitialized = false;
        this.center = this.getRandomPosition();
    }

    createTiles(width: number, height: number) {
        for (let i = 0; i<width; i++){
            for (let j = 0; j<height; j++) {
                let tile = new Tile(WorldConfig.TILE_SIZE);
                tile.setPosition(i,j);
                this.tiles[i][j] = tile;
            }
        }
    }

    getTiles() {
        return this.tiles;
    }

    setTileValue(posX:number, posY:number, value:number) {
        this.tiles[posX][posY].setValue(value);
    }

    generate() {
        this.tiles[this.center.getLatitude()][this.center.getLongitude()].setValue(WorldConfig.TYPE_GRASS);
    }

    getRandomPosition(){
        return new Position(Math.floor(Math.random() * Math.floor(this.width)), Math.floor(Math.random() * Math.floor(this.height)));
    }

    render() {
        //TODO: implement rendering of Tiles
    }
}
