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

for (let employeeObj of company) {
function newemployeeObject (employeeObj) {
  let objResult = {};
  let name = employee.name;
  let bonusPercent = bonusCalc(reviewRating);
  let totalBonus = Number(employees.annualSalary) * bonusPercent;
  let totalComp = totalBonus + Number(employees.annualSalary);
  }
  console.log (objResult);
}


//console.log( employeeObject );

function bonusCalc (employeeObject) {
  let bonus = 0;
  let numLength = employeeObject.employeeNumber;
  {if (numLength.length === 4 && employeeObject.reviewRating <= 2 && Number(employeeObject.annualSalary) > 65000) {
      bonus += 0.06;
    }
    else if (employeeObject.employeeNumber.length === 4 && employeeObject.reviewRating <= 2 ) {
      bonus += 0.05;
    }
    else if (employeeObject.reviewRating <= 2) {
      bonus += 0;
    }
    else if (Number(employeeObject.annualSalary) > 65000) {
      bonus += 0.01;
    }
    else if (employeeObject.employeeNumber.length === 4 && employeeObject.reviewRating === 3) {
      bonus += 0.09;
    }
    else if (employeeObject.employeeNumber.length === 4 && employeeObject.reviewRating === 4) {
      bonus += 0.10;
    }
    else if (employeeObject.employeeNumber.length === 4 && employeeObject.reviewRating === 5) {
      bonus += 0.13;
    }
    else if (employeeObject.reviewRating === 3 ) {
      bonus += 0.04;
    }
    else if (employeeObject.reviewRating === 4 ) {
      bonus += 0.06;
    }
    else if (employeeObject.reviewRating === 5 ) {
      bonus += 0.10;
    }
  } return `${employeeObject.name} ${bonus}`
} 

console.log(bonusCalc(employees[0]));
console.log(bonusCalc(employees[1]));
console.log(bonusCalc(employees[2]));
console.log(bonusCalc(employees[3]));
console.log(bonusCalc(employees[4]));
