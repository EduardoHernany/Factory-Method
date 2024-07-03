"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(name) {
        this.name = name;
    }
    pickUp(customerName) {
        console.log(`${this.name} está buscando ${customerName}`);
    }
    stop() {
        console.log(`${this.name} parou`);
    }
}
exports.Car = Car;
