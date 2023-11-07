const {citizens}= require ('./citizens');

let resident1 = new citizens('jonny', 3098759);
resident1.addAddress('Gauteng');
resident1.getDetails();

console.log()