"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Grad {
    constructor(x, y, z) {
        this.dot3 = function (x, y, z) {
            return this.x * x + this.y * y + this.z * z;
        };
        this.x = x;
        this.y = y;
        this.z = z;
    }
    dot2(x, y) {
        return this.x * x + this.y * y;
    }
    ;
}
exports.Grad = Grad;
//# sourceMappingURL=Grad.js.map