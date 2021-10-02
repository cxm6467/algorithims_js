/**
 * Find a pair that sums up to k
 *
 *  @param {int []} arr - Array to search for the sum
 *  @param {number} k  - Target sum
 *  @returns {boolean} - Whether or not there is a pair
 *
 */

function findPair(arr, k) {
  const ht = {};
  for (let i = 0; i < arr.length; i++) {
    if (ht[k - arr[i]]) {
      return true;
    } else {
      ht[arr[i]] = true;
    }
  }
  return false;
}

//console.log(findPair([1, 3, 4, 5, 2, 1], 2));


/**
 *  Find first repeating char in a string
 * 
 *  @param {string} - String to check
 *  @returns {char} - First repeating char
 *
 */
function firstRepeatingChar(str) {
  let visited = {};
  for (c of str) {
    console.log(c);
    if (visited[c]) {
      return c;
    } else {
      visited[c] = true;
    }
  }
  return '\0'
}

//console.log(firstRepeatingChar("Christopher Marasco"))


/**
 * Remove duplicates from an array
 *  
 * @param {int []} - Integer array to find a duplicate
 * @returns {int []} - Int array without duplicates
 * 
 */

function removeDuplicates(arr) {
  let visited = {};
  for (x of arr) {
    visited[x] = true;
  }
  return (Object.keys(visited));
}

//console.log(removeDuplicates([1,1,3,3,3,3,4,1,2]));

/**
 * Find duplicate in array { assumes n+1 elements between 1 and n }
 *  
 * @param {int []} - Integer array that has duplicates
 * @returns {number} - Duplicate number
 * 
 */

function findDuplicate(arr) {
  let visited = {};
  for (let x of arr) {
    if (visited[x]) {
      return x;
    } else {
      visited[x] = true;
    }
  }
}

//console.log(findDuplicate([1,3,2,4,1]))