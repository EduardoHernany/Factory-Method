"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomCarAlgorithm = randomCarAlgorithm;
const car_factory_1 = require("../factories/car-factory");
const bicycle_factory_1 = require("../factories/bicycle-factory");
const random_numbers_1 = require("../utils/random-numbers");
function randomCarAlgorithm() {
    const carFactory = new car_factory_1.CarFactory();
    const bicycleFactory = new bicycle_factory_1.BicycleFactory();
    const car1 = carFactory.getVehicle('Fusca');
    const car2 = carFactory.getVehicle('Celta Preto');
    const bicycle = bicycleFactory.getVehicle('Bicycle');
    const cars = [car1, car2, bicycle];
    return cars[(0, random_numbers_1.randomNumbers)(cars.length)];
}
