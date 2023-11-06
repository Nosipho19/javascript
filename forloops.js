let i=0 //counter
let courses = ["Business","Maths","Database","Science"];
let len = courses.length;//call the total number of elements in an array
let develops = "" //just the space at the begininning

for (; i< len;){
develops += courses[i] + '\n'
 // the += allows the elements to be printed
i++; 
}
console.log(develops);