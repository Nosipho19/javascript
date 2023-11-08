const myDetails =
`{
"name": "Nosipho",
"lastName": "Hanyane",
"course": "Business"

}`

const data = JSON.parse(myDetails)
//JSON.stringify(myDetails)
console.log(myDetails)

const results = JSON.stringify(data);
console.log(results.toUpperCase ())

