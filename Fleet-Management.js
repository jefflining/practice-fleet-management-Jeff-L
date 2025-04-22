class Vehicle {
    constructor(type, make, model, year, mileage = 0) {
        this.type = type;
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
 } 

drive(distance) {
return this.mileage += distance;
}

getDetails() {    
return `${this.type} is a ${this.year} ${this.make} ${this.model} with ${this.mileage} miles.`;
}
}

const myCar = new Vehicle("car", "Honda", "Accord", 2018);

const myTruck = new Vehicle("truck", "Ford", "Ranger", 2023);

const myMotorcycle = new Vehicle("motorcycle", "Honda", "CBR600", 2025);

myCar.drive(20);  

myTruck.drive(120);

myMotorcycle.drive(255);

console.log(myCar.getDetails()); 

console.log(myTruck.getDetails());

console.log(myMotorcycle.getDetails());