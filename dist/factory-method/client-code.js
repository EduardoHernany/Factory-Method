"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const random_numbers_1 = require("./utils/random-numbers");
const car_factory_1 = require("./factories/car-factory");
const carFactory = new car_factory_1.CarFactory();
const customerNames = ['Valmir', 'Regis', 'Lucas', 'Pablo'];
const CarsName = ['Fusca rebaixado', 'Celta Tunado', 'Mercedes busão'];
for (let i = 0; i < 10; i++) {
    const name = customerNames[(0, random_numbers_1.randomNumbers)(customerNames.length)];
    const car = CarsName[(0, random_numbers_1.randomNumbers)(CarsName.length)];
    const newCar = carFactory.pickUp(name, car);
    newCar.stop();
    console.log('---');
}
