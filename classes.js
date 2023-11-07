export class vehicle{
constructor (make, name, model){
this.make = make;
this.name = name;
this.model = model;

};

get getName(){
    return (`The name of the vehicle is ${this.name}`)
}

}

let bike = new vehicle("volvo cars", "volvo", "12345c");
let bus = new vehicle ("Motors", "BMW", "X5");
let truck = new vehicle ("Premium", "Mercendes", "C63")


console.log(`${bike.name}`)
console.log(`${bike.getName}`) 
console.log(`${bus.getName}`)
console.log(`${bus.model}`)