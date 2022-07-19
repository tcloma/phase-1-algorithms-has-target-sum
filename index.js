function hasTargetSum(array, target) {

  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] + array[j] === target && array[j] !== array[i]) {
        return true;
      }
    }
  }
  return false;
}
/* 
Write the Big O time complexity of your function here
0(n^2)
*/

/* 
  Add your pseudocode here
  Itirate over the array,
  for each individual element, itirate over the array again to check the sum of values
  take the sum of the initial element and the second element
  compare if the sum of the elements is equal to the target value
  return true if the values matchup
*/

/*
  Add written explanation of your solution here
  Itirates over an array, during each pass of an element it itirates over array again
  during each pass of the second itirations elements, it adds the sum of the first element
  and the second element, and compares it to the target. Returns true if it matches
  Returns false if the entire array has been itirated over with no matches
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
