/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

 //var minDiff = Number.MAX_SAFE_INTEGER;
 //var num1;
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {

    let minDiff = Number.MAX_SAFE_INTEGER;
    let num1 = null;
   const inOrder = function(root) {
    if(root) {
        inOrder(root.left,num1,minDiff);
        let num2 = root.val;
        if(num1 != null) {
            if(Math.abs(num2-num1) < minDiff) {
                minDiff = Math.abs(num2-num1);
            }
        }
        num1 = num2;      
        inOrder(root.right,num1,minDiff);
    }
   }
   inOrder(root);
   return minDiff;
};

let node3 = new TreeNode(3,null,null);
let node5 = new TreeNode(5,node3,null);
let node1 = new TreeNode(1,null,node5);

console.log(getMinimumDifference(node1));
