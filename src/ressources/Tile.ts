import { Position } from './Position';

export class Tile {
    position:Position;
    value:number = null;
    size:number;
    constructor(size:number) {
        this.size = size;
    }

    getPosition() {
        return this.position;
    }

    setPosition(lat:number, lng:number){
        this.position = new Position(lat, lng);
    }

    getValue() {
        return this.value;
    }

    setValue(value:number) {
        this.value = value;
    }
}
