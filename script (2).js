class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }

    this.displaySortedNumbers();
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(node, value) {
    if (node === null || node.value === value) {
      return node;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    }

    return this.searchNode(node.right, value);
  }

  inOrderTraversal(node, callback) {
    if (node !== null) {
      this.inOrderTraversal(node.left, callback);
      callback(node);
      this.inOrderTraversal(node.right, callback);
    }
  }

  displaySortedNumbers() {
    const sortedList = document.getElementById('sortedList');
    sortedList.innerHTML = '';

    this.inOrderTraversal(this.root, (node) => {
      const listItem = document.createElement('li');
      listItem.textContent = node.value;
      sortedList.appendChild(listItem);
    });
  }
}

const bst = new BinarySearchTree();

document.getElementById('insertForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const value = parseInt(document.getElementById('insertInput').value);

  if (!isNaN(value)) {
    bst.insert(value);
    document.getElementById('insertInput').value = '';
  }
});

function searchNumber() {
  const value = parseInt(document.getElementById('searchInput').value);

  if (!isNaN(value)) {
    const node = bst.search(value);
    if (node !== null) {
      alert(`Number ${value} found in the BST.`);
    } else {
      alert(`Number ${value} not found in the BST.`);
    }
    document.getElementById('searchInput').value = '';
  }
}
