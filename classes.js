export class vehicle{
constructor (make, name, engine){
this.make = make;
this.name = name;
this.engine = engine;

};

get getName(){
    return (`The name of the vehicle is ${this.name}`)
}

}

let bike = new vehicle("boat", "volvo", "12345c");
let bar = new vehicle ("polo", "bmw", "jaguar");
let bus = new vehicle ("honda", "benze", "isuzu")


console.log(`${bike.name}`)
console.log(`${bike.getName}`) 