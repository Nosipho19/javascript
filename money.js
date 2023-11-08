const student = {
  name: "Nosipho",
  age: 34,
  module: "Pyschology behaviour",
  course: "Business",
};

const fs = require("fs");

function writeData(object) {
  fs.writeFile("./student.json", JSON.stringify(object), (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("sucess");
    }
  });
}

function readData() {
  fs.readFile("./student.json", "utf-8", (error, jsonstringify) => {
    if (error) {
      console.log(error);
    } else {
      try {
        const data = JSON.parse(jsonstringify);
        console.log(data);
        console.log("sucess");
      } catch (error) {
        console.log("Error parsing JSON", error);
      }
    }
  });
}
writeData(student);
readData();
