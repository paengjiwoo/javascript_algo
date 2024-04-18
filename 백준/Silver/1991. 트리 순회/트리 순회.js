const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// 이진 트리 (Binary Tree)
// 각 노드의 자식이 2개 이하인 트리

let tree = {}
const N = Number(input.shift())
for (let i = 0; i < N; i++) {
  let [root, left, right] = input[i].split(' ')
  tree[root] = [left, right]
}

// 전위 순회(preorder traversal)
let prestr = ''
function preorder(root) {
  if (root === '.') return;
  prestr += root
  preorder(tree[root][0])
  preorder(tree[root][1])
}

// 중위 순회(inorder traversal)
let instr = ''
function inorder(root) {
  if (root === '.') return;
  inorder(tree[root][0])
  instr += root
  inorder(tree[root][1])
}

// 후위 순회(postorder traversal)
let poststr = []
function postorder(root) {
  if (root === '.') return;
  postorder(tree[root][0])
  postorder(tree[root][1])
  poststr += root
}

preorder('A')
inorder('A')
postorder('A')
console.log(prestr)
console.log(instr)
console.log(poststr)