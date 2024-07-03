import { randomCarAlgorithm } from './main/random-vehicle-algorithm';
import { randomNumbers } from './utils/random-numbers';
import { CarFactory } from './factories/car-factory';

const carFactory = new CarFactory();
const customerNames = ['Valmir', 'Regis', 'Lucas', 'Pablo'];
const CarsName = ['Fusca rebaixado', 'Celta Tunado', 'Mercedes busão'];

for (let i = 0; i < 10; i++) {
  const name = customerNames[randomNumbers(customerNames.length)];
  const car = CarsName[randomNumbers(CarsName.length)];
  const newCar = carFactory.pickUp(name, car);
  newCar.stop();

  console.log('---');
}
