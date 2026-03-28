function showAll() {

  // 1. VARIABLES
  var city = "Kathmandu";
  let semester = 5;
  const college = "KEC";

  document.getElementById("varSection").innerHTML =
    `City: ${city} <br> Semester: ${semester} <br> College: ${college}`;


  // 2. FUNCTIONS

  // normal function
  function multiply(x, y) {
    return x * y;
  }

  // arrow function
  const subtract = (x, y) => x - y;

  document.getElementById("funcSection").innerHTML =
    `Multiply (4,2): ${multiply(4,2)} <br> Subtract (10,3): ${subtract(10,3)}`;


  // 3. OBJECT

  let car = {
    brand: "Toyota",
    model: "Corolla",
    info() {
      return `${this.brand} ${this.model}`;
    }
  };

  document.getElementById("objSection").innerHTML =
    `Car Brand: ${car.brand} <br> Model: ${car.model} <br> Info: ${car.info()}`;


  // 4. ARRAY METHODS

  let marks = [45, 60, 75, 30, 90];

  // map
  let addedMarks = marks.map(m => m + 5);

  // filter
  let passed = marks.filter(m => m >= 50);

  // spread
  let extraMarks = [100, 80];
  let allMarks = [...marks, ...extraMarks];

  document.getElementById("arrSection").innerHTML =
    `Marks: [${marks}] <br>
     After adding 5: [${addedMarks}] <br>
     Passed: [${passed}] <br>
     Combined: [${allMarks}]`;
}