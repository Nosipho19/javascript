
let school = {
 Name: "Education alive school",
 location :"Marshall town ",
 established: "1970",
 20:100,

displayInfo: function(){
    console.log(`Welcome to ${school.Name}, located at 
    ${school.location}
    ${school.established}, having the rate of
    ${school[20]}`); //for numbersor integarwe strictly use braces

    //the $ sign insde backticks is the identifyer 
    // the ${} inside the backticks is called dynamic callback method
}
}


school.displayInfo ()
console.log([school.Name])
console.log([school.location])
console.log([school.established])