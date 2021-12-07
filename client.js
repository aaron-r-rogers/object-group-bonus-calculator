const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

function newEmployeeObject (employeeArray) {
  let objResult = [];
  for (employee of company) {

  }
  console.log (objResult);
}

console.log( employees );

function bonusCalc (employeeArray) {
  let bonus = 0
  for (employee of company) {
    if (employee.reviewRating < 2) {
      bonus += 0;
    }
    else if (employee.reviewRating === 3) {
      bonus += 4;
    }
    else if (employee.reviewRating === 4) {
      bonus += 6;
    }
    else if (employee.reviewRating === 5) {
      bonus += 10;
    }
    else if (employee.reviewRating < 2 && employee.employeeNumber.length === 4 ) {
      bonus += 5;
    }
    else if (employee.reviewRating === 3 && employee.employeeNumber.length === 4 ) {
      bonus += 9;
    }
    else if (employee.reviewRating === 4 && employee.employeeNumber.length === 4 ) {
      bonus += 11;
    }
    else if (employee.reviewRating === 5 && employee.employeeNumber.length === 4 ) {
      bonus += 13;
    }
  }
} return 
