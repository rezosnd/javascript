const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Q1: Use map function to square each element of an array
rl.question("Enter numbers separated by spaces: ", (input) => {
  const numbers = input.split(" ").map(Number);
  const squaredNumbers = numbers.map(num => num * num);
  console.log("Squared Numbers:", squaredNumbers);
  
  // Q2: Function to get grade based on score using ternary operators
  rl.question("Enter student's score: ", (score) => {
    console.log("Grade:", getGrade(Number(score)));

    // Q3: Object representing a car with property and a function to change year
    let car = {
      companyName: "Toyota",
      model: "Camry",
      year: 2019
    };

    rl.question("Enter new year for the car: ", (newYear) => {
      changeYear(car, Number(newYear));
      const { model, year } = car;
      console.log(`Model: ${model}, Year: ${year}`);

      // Q4: Filter function to get prime numbers from an array
      rl.question("Enter numbers separated by spaces: ", (input) => {
        const numbers2 = input.split(" ").map(Number);
        const primeNumbers = numbers2.filter(num => isPrime(num));
        console.log("Prime Numbers:", primeNumbers);
        
        // Q6: Asynchronous function using async-await to fetch data from an API
        fetchData();

        // Q7: Nested object representing a person and accessing phone number with optional chaining
        const person = {
          name: "John Doe",
          address: "123 Main St",
          // contact: { email: "john@example.com"}
        };
        const phoneNumber = person.contact?.phone;
        console.log("Phone Number:", phoneNumber); // Output: undefined (if contact property is missing)

        rl.close();
      });
    });
  });
});

// Q2: Function to get grade based on score using ternary operators
function getGrade(score) {
  return score >= 90 ? 'A' :
         score >= 80 ? 'B' :
         score >= 70 ? 'C' :
         score >= 60 ? 'D' :
                       'F';
}

// Q3: Object representing a car with property and a function to change year
function changeYear(car, newYear) {
  car.year = newYear;
}

// Q4: Filter function to get prime numbers from an array
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Q6: Asynchronous function using async-await to fetch data from an API
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log("Fetched Data:", data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
