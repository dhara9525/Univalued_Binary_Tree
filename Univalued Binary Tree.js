// Simple Javascript solution, faster than 100.00% of JavaScript online submissions 
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) 
{
    if(root==null)
            return true;
    
    var value=root.val;
    
    return isUnival(root, value);
    
    function isUnival(root,value)
    {
        if(root==null)
            return true;
        if(root.left!=null && root.left.val!=value)
            return false;
        if(root.right!=null && root.right.val!=value)
            return false;
        return isUnival(root.left,value) && isUnival(root.right,value);
    }
};