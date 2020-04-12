export class Grad {
    public x:number;
    public y:number;
    public z:number;
    constructor(x:number, y:number, z:number) {
        this.x = x; this.y = y; this.z = z;
    }

    dot2(x:number, y:number) {
        return this.x * x + this.y * y;
    };
    dot3 = function (x:number, y:number, z:number) {
        return this.x * x + this.y * y + this.z * z;
    };
}