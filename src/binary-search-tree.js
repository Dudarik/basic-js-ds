const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor(data, left, right) {
    this.data = data || null;
    this.left = left || null;
    this.right = right || null;
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
          currentNode.left = new BinarySearchTree(data);
          return;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = new BinarySearchTree(data);
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

  _removeBSTNode(root, data) {
    if (!root) return root;
    // console.log(root, data);

    // debugger;
    if (root.data < data) {
      root.right = this._removeBSTNode(root.right, data);
    } else if (root.data > data) {
      root.left = this._removeBSTNode(root.left, data);
    } else {
      // one or no children
      if (!root.left) return root.right;
      if (!root.right) return root.left;
      // return root.left || root.right;
      // debugger;

      //two children find min right
      root.data = this._findMinFromNode(root.right);

      root.right = this._removeBSTNode(root.right, root.data);
    }
    return root;
  }

  remove(data) {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here

    let root = this.root();
    root = this._removeBSTNode(root, data);
  }

  _findMinFromNode(root) {
    while (root.left) {
      root = root.left;
    }

    return root.data;
  }

  min() {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here

    return this._findMinFromNode(this.root());
    // let root = this.root();

    // while (root.left) {
    //   root = root.left;
    // }

    // return root.data;
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
