export class Position {
    protected latitude: number;
    protected longitude: number;

    constructor(latitude: number, longitude: number ) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    getLatitude() {
        return this.longitude;
    }

    setLatitude(latitude: number) {
        this.latitude = latitude;
    }

    getLongitude() {
        return this.longitude;
    }

    setLongitude(longitude:number) {
        this.longitude = longitude;
    }

}
