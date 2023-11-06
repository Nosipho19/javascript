let courses = ["Angular", "javascript", "html", "React" ]; // pre defined array


courses.length = 5;
courses [3]= "Typescript";

courses [5] = "flutter";

console.log("courses available" + courses );
console.log("typeof coureses"); //if you want the array to return object
courses.push("C#", "python", "C/C++", "Svelte");
console.log("new seamaster courses" + courses);

//when you want an array to return strictly as an array
console.log(courses instanceof Array);


console.log(courses.toString());
console.log(courses);


   
let learners = new Array (3);

learners [0] = 1;
learners [1] = 2;
learners [2] = 3;
learners [3] = 4;
// learners[3 = 4]

let i;
let len = courses.len
let space = " "

for (; i< len;){
    space += courses[i] + '\n'
     // the += allows the elements to be printed
    i++; 
    }


console.log(space);

console.log("number of learners:" + learners );


