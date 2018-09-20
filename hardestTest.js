/*
Challenge Description: Imagine that you have been assigned to write a program for a school that needs to determine which test was the hardest for the students. Your program should be able to take an object as an argument that has a list of students with their respective list of grades. The output of the program should be able to clearly tell the user which test was the hardest (lowest class average)

Sample Test Cases: grades are in order by test #. 1st index is test 1, 2nd is test 2..

CASE 1
Input: {
  Ron: [90, 89, 99, 87, 100, 74],
  Leslie: [78, 74, 92, 87, 77, 81],
  Tom: [77, 61, 89, 47, 57, 83],
  Andy: [35, 54, 44, 58, 39, 41]
}

CASE2
Input : {
          April: [88, 56, 55, 97, 100, 88, 100, 98],
          Tammy1: [78, 46, 92, 84, 55, 74, 89, 80],
          Ben: [77, 59, 89, 47, 57, 83, 90, 89],
          Garry: [54, 90, 84, 88, 39, 73, 67, 79],
          Tammy2: [86, 49, 90, 77, 89, 92, 88, 75]
}
*/

const case1 = {
  Ron: [90, 89, 99, 87, 100, 74],
  Leslie: [78, 74, 92, 87, 77, 81],
  Tom: [77, 61, 89, 47, 57, 83],
  Andy: [35, 54, 44, 58, 39, 41]
};
// Expected output: 'The hardest test was test number 5'
const case2 = {
  April: [88, 56, 55, 97, 100, 88, 100, 98],
  Tammy1: [78, 46, 92, 84, 55, 74, 89, 80],
  Ben: [77, 59, 89, 47, 57, 83, 90, 89],
  Garry: [54, 90, 84, 88, 39, 73, 67, 79],
  Tammy2: [86, 49, 90, 77, 89, 92, 88, 75]
};
// Expected output: 'The hardest test was test number 2'

function findHardestTest (students) {
  const grades = Object.values(students);

  const end = {
    num: 0,
    sum: 9999
  };

  for (let i = 0; i < grades[0].length; i++) {
    let sum = 0;
    grades.map(grade => sum += grade[i]);
    if (sum < end.sum) {
      end.sum = sum;
      end.num = i + 1;
    }
  }

  return `The hardest test was test number ${end.num}`
}

console.log(findHardestTest(case1));
console.log(findHardestTest(case2));
