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
  for (let i of arr) {
    localMax = Math.max(i, localMax + i); //Should we take this one or current sum?
    maximum = Math.max(maximum, localMax); //Is this or the current max more?
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

function reverseTree(root) {
  if (root == null) return;
  [root.left, root.right] = [root.right, root.left]; // use new ES6 way to swap values via deconstruction
  reverseTree(root.left); //Start from left, be consistent
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

function withoutRepeating(str) {
  let visited = [...Array(128)].map(x => false); // map each number (char code) to false 
  for (let i = 0; i < str.length; i++) {
    if (visited[str.charCodeAt(i)]) return false; // return false if we find a char in the str
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

function longestSubstringWithoutRepeating(str) {
  let maxLength = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      let substr = str.substring(i, j + 1);
      if (withoutRepeating(substr) && substr.length > maxLength)
        maxLength = substr.length;
    }
  }
  return maxLength;
}

/**
 * Reverse a linked list
 * 
 * @param {list} - List to be reversed
 * 
 */

function reverseLinkedList(list) {
  let previous = null;
  let current = list.head;

  while (current !== null) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next
  }
  list.head = previous
}

/**
 * Find peak in arr
 * 
 * @param {int []} - Input array of int []
 * @returns {number} - first peak of array
 * 
 */

function findPeak(arr) {
  for (let i = 0; i < arr.length; i++)
    if ((i == 0 || arr[i] >= arr[i - 1]) && (i == arr.length - 1 || arr[i] >= arr[i + 1])) // find edge cases, too
      return i;
}

/**
 * Check if Linked List is palindrome
 * 
 * @param {list} - List to check
 * @returns {boolean} - Whether or not the linked list is a palindrome 
 */

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

function isPalindromeList(list) {
  let length = 0;
  let temp = list.head;
  while (temp) {
    length++;
    temp = temp.next;
  }
  let left = list.head;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    let right = list.head;
    for (let j = 0; j < length - i - 1; j++) right = right.next;
    if (left.data != right.data) return false;
    left = left.next;
  }
  return true;
}


/**
 * Find length of longest palindrome
 * 
 * @param {string} - string to check
 * @returns {int} - length of longest palindrome
 * 
 */
function longestPalindrome(str) {
  let occurences = [...Array(128)].map(x => 0);
  for (const char of str.split("")) {
    occurences[charCodeAt(char)]++;
  }
  let length = 0
  for (const occurence of occurences) {
    if (occurence % 2 == 0) {
      length += occurence;
    } else {
      length += occurence - 1;
    }
  }
  if (length.length < str.length) {
    length++
  }
  return length;
}

/**
 * Sort Linked List
 * 
 * @param {LinkedList} - List to be sorted in place
 */

function sortLinkedList(list) {
  let i = list.head;
  while (i) {
    let j = list.head;
    while (j.next) {
      if (j.data > j.next.data) {
        [j.data, j.next.data] = [j.next.data, j.data]
      }
      j = j.next;
    }
    i = i.next;
  }
}

/**
 * Get product of array except current index
 * 
 * @param {int []} - Int array of values to check
 * @returns {int []} - Int [] with products
 */

function productExceptSelf(arr) {
  let n = arr.length;
  let cumulativeFromLeft = [...Array(n)].map(x => 0);
  cumulativeFromLeft[0] = 1;
  for (let i = 1; i < n; i++)
    cumulativeFromLeft[i] = cumulativeFromLeft[i - 1] * arr[i - 1];

  let cumulativeFromRight = [...Array(n)].map(x => 0);
  cumulativeFromRight[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--)
    cumulativeFromRight[i] = cumulativeFromRight[i + 1] * arr[i + 1];

  let output = [...Array(n)].map(x => 0);
  for (let i = 0; i < n; i++)
    output[i] = cumulativeFromLeft[i] * cumulativeFromRight[i];

  return output;
}