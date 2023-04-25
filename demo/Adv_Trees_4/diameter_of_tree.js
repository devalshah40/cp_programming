class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
let preOrderArr, inOrderArr;
// preOrderArr = [1, 2, 4, 8, 5, 3, 6, 7];
// inOrderArr = [4, 8, 2, 5, 1, 6, 3, 7];

preOrderArr = [8, 3, 1, 6, 4, 7, 10, 20, 13];
inOrderArr = [1, 3, 4, 6, 7, 8, 10, 13, 20];

const n = preOrderArr.length;
const preOrderMap = new Map(),
  inOrderMap = new Map();
for (let i = 0; i < preOrderArr.length; i++) {
  preOrderMap.set(preOrderArr[i], i);
}
for (let i = 0; i < inOrderArr.length; i++) {
  inOrderMap.set(inOrderArr[i], i);
}
let root = constructTreeInPreOrderTraversal(0, n - 1, 0, n - 1);
console.log(root);
let pathArr = [];

class TreeInfo {
  constructor(diameter, height) {
    this.diameter = diameter;
    this.height = height;
  }
}
let diameter = 0;
// let ans = diameterTree(root);
let ans = diameterTreeScaler(root);

console.log(ans);

function constructTreeInPreOrderTraversal(sPre, ePre, sIn, eIn) {
  const root = new TreeNode(preOrderArr[sPre]);
  if (sIn > eIn) {
    return null;
  }
  const idX = inOrderMap.get(preOrderArr[sPre]);
  // ePre - sPre -1 + 1 = idX - 1 - sIn + 1;
  // ePre - sPre = idX - sIn;
  // ePre = idX - sIn + sPre;
  const numOfElements = idX - sIn;
  ePre = sPre + numOfElements;
  root.left = constructTreeInPreOrderTraversal(
    sPre + 1,
    sPre + numOfElements,
    sIn,
    idX - 1
  );
  root.right = constructTreeInPreOrderTraversal(
    sPre + numOfElements + 1,
    ePre,
    idX + 1,
    eIn
  );
  return root;
}

// Approach 1 using global variable diameter
function diameterTree(root) {
  if (root === null) {
    return -1;
  }

  const left = diameterTree(root.left);
  const right = diameterTree(root.right);

  diameter = Math.max(diameter, left + right + 2);
  return Math.max(left, right) + 1;
}

// Approach 2 without global variable
function diameterTreeScaler(root) {
  if (root === null) {
    return new TreeInfo(0, -1);
  }

  const leftInfo = diameterTreeScaler(root.left);
  const rightInfo = diameterTreeScaler(root.right);

  let diameter = Math.max(
    leftInfo.diameter,
    rightInfo.diameter,
    leftInfo.height + rightInfo.height + 2
  );
  return new TreeInfo(
    diameter,
    Math.max(leftInfo.height, rightInfo.height) + 1
  );
}
