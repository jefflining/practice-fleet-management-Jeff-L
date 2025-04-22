
/*You’ve been hired to help a logistics company build a system to manage its fleet of
vehicles. The system should be able to:
1. Create individual vehicles with properties like type, make, model, year, and
mileage.
2. Add a method to update the mileage of a vehicle when it is used.
3. Add a method to display the details of the vehicle in a user-friendly format.
4. Instantiate multiple vehicles from the class and test your methods.
Tasks
1. Define the Vehicle Class:
○ The constructor should include properties: type, make, model, year,
and mileage.
○ Use default values for mileage (e.g., 0).
2. Add Methods:
○ drive(distance): Increases the vehicle’s mileage by the given
distance (in kilometers or miles).
○ getDetails(): Returns a formatted string describing the vehicle’s
details.
3. Create and Use Vehicle Objects:
○ Instantiate at least three vehicle objects with different properties (e.g.,
a car, a truck, and a motorcycle).
○ Use the drive method to simulate trips and update mileage.
○ Use the getDetails method to print each vehicle’s updated
information.*/



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