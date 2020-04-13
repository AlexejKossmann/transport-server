import { Tile } from './Tile';
import { WorldConfig } from "./WorldConfig";
import { Position } from "./Position";
import { makeNoise2D } from "open-simplex-noise";

export class World {

    private readonly width: number;
    private readonly height: number;
    private isInitialized: boolean;
    private tiles: Tile[][] = [];

    constructor(width: number, height: number ) {
        this.width = width;
        this.height = height;
        this.isInitialized = false;
    }

    private createTiles() {
        for (let i = 0; i<this.width; i++){
            let temp = [];
            for (let j = 0; j<this.height; j++) {
                let tile = new Tile(WorldConfig.TILE_SIZE);
                tile.setPosition(i,j);
                temp.push(tile);
            }
            this.tiles.push(temp);
        }
    }

    public getTiles(): Tile[][] {
        return this.tiles;
    }

    private setTileValue(posX:number, posY:number, value:number) {
        this.tiles[posX][posY].setValue(value);
    }

    public generate() {
        this.createTiles();

        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                let noise = makeNoise2D(WorldConfig.WORLD_SEED);
                this.tiles[x][y].value = noise(x,y);
            }
        }
    }

    private getRandomPosition(){
        return new Position(Math.floor(Math.random() * Math.floor(this.width)), Math.floor(Math.random() * Math.floor(this.height)));
    }

    render() {
        //TODO: implement rendering of Tiles
    }
}
