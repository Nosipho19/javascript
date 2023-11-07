const student =  {

//data property
firstName:'nosi',
surname : 'ndlovu',
age :'34',
number : '096648478',

//accessor property (getter)
get getName () {
return this.firstName
},

get getDetails (){
return [this.firstName, this.surname, this.age, this.number]
},


//accessor property (setter)
set changeName(newName){
this.firstName=newName

}
}

console.log(student.firstName)
console.log(student.getName)

//call all the information
console.log(student.getDetails)

student.changeName="sihle"