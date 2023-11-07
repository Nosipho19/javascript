function persons (name,age){
this.name = name;
this.age = age; 
}
//}} then we we create two persons object

let mary = new persons ("mary", 32); // inheritance
let Joseph = new persons ("Joseph", 20);



console.log(mary);
console.log(Joseph);

let marlo ={
    'name': 'marlo',
    'age': '20'
}
 function students(name,age,course){ //ploymprphic 
 this.name = name
 this.name = age
 this.name = course
 }
  
 let lydia = new students ( marlo, 24, 'business')
 console.log(lydia)

