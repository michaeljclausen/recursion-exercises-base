
const visitAllNodes = function(node, callback) {
  callback();
  if(node.size > 1) {
    let children = node.childNodes;
    children.forEach(el => visitAllNodes(el, callback));
  }
};

const flattenTreeToArray = function(node) {
  // Hint: Use visitAllNodes()
  // Your code here
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};