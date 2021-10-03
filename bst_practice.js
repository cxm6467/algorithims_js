/**
 * 
 * Binary Search Tree - Breadth First
 * 
 */

class Tree {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }


}

// Parameters:
//  root: Tree
// return type: undefined

function dfsPreorder(root) {
  // your code here
  console.log(root.data)
  dfsPreorder(root.left)
  dfsPreorder(root.right)
}

function dfsInorder(root) {
  // your code here
  dfsInorder(root.left)
  console.log(root.data)
  dfsInorder(root.right)
}

function dfsPostorder(root) {
  // your code here
  dfsPostorder(root.left)
  dfsPostorder(root.right)
  console.log(root.data)
}


class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }
  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(data) {
    const removeNode = function (node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        // node has no children 
        if (node.left == null && node.right == null) {
          return null;
        }
        // node has no left child 
        if (node.left == null) {
          return node.right;
        }
        // node has no right child 
        if (node.right == null) {
          return node.left;
        }
        // node has two children 
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data);
  }
  isBalanced() {
    return (this.findMinHeight() >= this.findMaxHeight() - 1)
  }
  findMinHeight(node = this.root) {
    if (node == null) {
      return -1;
    };
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    };
  }
  findMaxHeight(node = this.root) {
    if (node == null) {
      return -1;
    };
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    };
  }
  inOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();

      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    };
  }
  preOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();

      function traversePreOrder(node) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      };
      traversePreOrder(this.root);
      return result;
    };
  }
  postOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();

      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      };
      traversePostOrder(this.root);
      return result;
    }
  }

  levelOrder() {
    let result = [];
    let Q = [];
    if (this.root != null) {
      Q.push(this.root);
      while (Q.length > 0) {
        let node = Q.shift();
        result.push(node.data);
        if (node.left != null) {
          Q.push(node.left);
        };
        if (node.right != null) {
          Q.push(node.right);
        };
      };
      return result;
    } else {
      return null;
    };
  };
}



const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

/**
 * Breadth first search
 * 
 * @param {Binary Tree Node} - BST
 * @returns {int []} - Sorted BST by breadth
 * 
 */

function sortBSTBreadthFirst(node) {
  let queue = [node];
  let i = 0;
  while (i < queue.length) {
    let poppedNode = queue[i];
    i++
    if (!poppedNode) {
      continue;
    } else {
      print(poppedNode.data)
      queue.push(node.left)
      queue.push(node.right)
    }
  }
  return queue;
}

/**
 * Check if BST is valid
 * 
 * @param {node} - current Node
 * @param {minValue} - min value for node
 * @param {maxValue} - max value for node
 * @returns {boolean} - if node is valid
 * 
 */

function isBSTValid(node, min = -Infinity, max = Infinity) {
  if (!node) {
    return true;
  } else if (node.data < min || node.data >= max) {
    return false;
  } else {
    return isBSTValid(node.left, min, root.data) && isBSTValid(root.right, root.data, max)
  }
}


/**
 * Get height of BST
 * 
 * @param {node} - gets height of Tree
 * @returns {number} - height of tree
 * 
 */

function bstHeight(node) {
  if (!node) {
    return -1;
  } else {
    left = bstHeight(node.left);
    right = bstHeight(node.right);
    return (1 + Math.max(left, right));
  }
}

/**
 * Check if BST is balanced
 * 
 * @param {Tree} - Tree to check
 * @returns {boolean} - Whether or not BST is balanced
 * 
 */

function isBSTBlanced(node) {
  if (!node) return true;
  let left = bstHeight(node.left);
  let right = bstHeight(node.right);
  return Math.abs(left - right) <= 1 && isBSTBlanced(root.left) && isBSTBlanced(root.right);
}

/**
 * Get Level values of BST
 * 
 * @param {Tree} - Tree to process
 * @returns {int[int[]]} - 2D int [] with level data
 * 
 */

function getLevelValuesOfBST(node) {
  let output = [];
  let queue = [
    [node], 0
  ];
  let i = 0;

  while (i < queue.length) {
    let poppedNode = queue[i][0];
    let level = queue[i][1];
    i++;
    if (!poppedNode) {
      continue;
    } else {
      if (output.length <= level) {
        output.push([]);
      }
      output[level].push(node.data);
      queue.push(node.left, level + 1);
      queue.push(node.right, level + 1);
    }
  }
  return output;
}


function swapNodes(indexes, queries) {
  // Write your code here
  const result = [];

  for (let i = 0; i < queries.length; i++) {
    let swapDepth = queries[i];

    let traversed = [];

    traversed = traverseIndices(indexes, swapDepth);

    result.push(traversed);
  }

  function traverseIndices(indexes, swapDepth) {
    const traverseIndices = [];

    traverse(indexes, 1, 1);

    function traverse(indexes, index, depth) {
      if (index === -1) {
        return null;
      }

      let leftIndex = indexes[index - 1][0];
      let rightIndex = indexes[index - 1][1];

      if (depth % swapDepth === 0) {
        indexes[index - 1] = [rightIndex, leftIndex];
        [leftIndex, rightIndex] = [rightIndex, leftIndex];
      }

      traverse(indexes, leftIndex, depth + 1);
      traverseIndices.push(index);
      traverse(indexes, rightIndex, depth + 1);
    }
    return traverseIndices;
  }

  return result;
}