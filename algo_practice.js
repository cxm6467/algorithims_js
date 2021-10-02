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

/**
 * Find max sub array
 *
 * @param {int []} - Integer array to check for max sub array
 * @returns {number} - Max Sum
 *
 */

 function maximumSubarray(arr) {
  let maximum = -Infinity;
  let localMax = 0;
  for(let i of arr){
    localMax = Math.max(i, localMax + i);     //Should we take this one or current sum?
    maximum = Math.max( maximum, localMax);   //Is this or the current max more?
  }
  return maximum;
}

//console.log(maximumSubarray([2,-2,3,1,4,2,-10,2,7]));

/***
 *
 *  Reverse a BST
 *
 *  @param {Node} - Root Node to be reversed
 */

 function reverseTree(root){
  if(root==null) return;
  [root.left, root.right] = [root.right, root.left]; // use new ES6 way to swap values via deconstruction
  reverseTree(root.left);  //Start from left, be consistent
  reverseTree(root.right);
 }

 //No example here
 ///TODO: Add BST to be manipulated via these functions


 /**
 * Find longest substr without repeating chars
 * 
 * @param {string} - String to check for the longest substr
 * @return {boolean} - check if str has repeating chars
 */

  function withoutRepeating(str){
    let visited = [...Array(128)].map(x => false); // map each number (char code) to false 
    for(let i = 0; i < str.length; i++){
        if(visited[str.charCodeAt(i)]) return false; // return false if we find a char in the str
        else visited[str.charCodeAt(i)] = true;
    }
    return true;
}  

 /**
 * Find longest substr without repeating chars
 * 
 * @param {string} - String to check for the longest substr
 * @return {number} - length of longest substr
 */

function longestSubstringWithoutRepeating(str){
    let maxLength = 0;
    for(let i = 0; i < str.length; i++){
        for(let j = i; j < str.length; j++){
            let substr = str.substring(i, j+1);
            if(withoutRepeating(substr) && substr.length > maxLength)
                maxLength = substr.length;
        }
    }
    return maxLength;
}