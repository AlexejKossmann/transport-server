import { Tile } from './Tile';
import { WorldConfig } from "./WorldConfig";
import { Position } from "./Position";
import { Perlin } from "./Perlin/Perlin";

export class World {

    private readonly width: number;
    private readonly height: number;
    private isInitialized: boolean;
    public tiles: Tile[][] = [];

    constructor(width: number, height: number ) {
        this.width = width;
        this.height = height;
        this.isInitialized = false;
    }

    createTiles() {
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

    getTiles() {
        return this.tiles;
    }

    setTileValue(posX:number, posY:number, value:number) {
        this.tiles[posX][posY].setValue(value);
    }

    generate() {
        let yoff = 0;
        for (let y = 0; y < this.height; y++) {
            let xoff = 0;
            for (let x = 0; x < this.width; x++) {
                this.tiles[x][y].value = Perlin.perlin2(x,y);
                xoff += WorldConfig.PERLIN_INCREMENT;
            }
            yoff += WorldConfig.PERLIN_INCREMENT;
        }
    }

    getRandomPosition(){
        return new Position(Math.floor(Math.random() * Math.floor(this.width)), Math.floor(Math.random() * Math.floor(this.height)));
    }

    render() {
        //TODO: implement rendering of Tiles
    }
}
