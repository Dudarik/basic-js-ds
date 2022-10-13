const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor(data, insertLeftRight, left, right) {
    this.data = data || null;
    this.left = left || null;
    this.right = right || null;
    this.leftNode = insertLeftRight || false;
  }
  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.data ? this : null;
  }

  add(data) {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    if (!data) return;
    if (this.data === null) {
      this.data = data;
      return;
    }
    let currentNode = this;

    while (currentNode) {
      if (data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = new BinarySearchTree(data, true);
          return;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = new BinarySearchTree(data, false);
          return;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  has(data) {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    return Boolean(this.find(data));
  }

  find(data) {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    if (!this.root()) return null;

    let root = this.root();

    while (root) {
      // if (!root.data) return null;
      // console.log(root);
      if (root.data === data) return root;
      if (root.data < data) {
        root = root.right;
        continue;
      }
      if (root.data > data) root = root.left;
    }
    return null;
  }

  remove(data) {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here

    let root = this.root();
    let parent = root;

    while (root) {
      // debugger;
      // console.log(parent, root);
      if (root.data === data) {
        if (!root.left && !root.right) {
          // no children
          if (parent.left === root) {
            parent.left = null;
          } else {
            parent.right = null;
          }
          break;
        } else if (root.left && root.right) {
          //have two children

          let newRoot = root.left;
          while (newRoot.right) {
            newRoot = newRoot.right;
          }

          // let RootToDell = root.max(root.left);

          const newDataAfterDell = newRoot.data;

          // RootToDell = null;

          root.data = newDataAfterDell;
          break;
        } else {
          //have one children
          const child = root.left || root.right;

          if (root == parent.left) {
            parent.left = child;
          } else {
            parent.right = child;
          }
          break;
        }
      }

      if (root.data < data) {
        parent = root;
        root = root.right;
        continue;
      }
      if (root.data > data) {
        parent = root;
        root = root.left;
      }
    }
  }

  min() {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here

    let root = this.root();

    while (root.left) {
      root = root.left;
    }

    return root.data;
  }

  max() {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    let root = this.root();

    while (root.right) {
      root = root.right;
    }

    return root.data;
  }
}

module.exports = {
  BinarySearchTree,
};
