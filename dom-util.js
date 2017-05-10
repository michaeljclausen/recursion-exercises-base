
const visitAllNodes = function(node, callback) {
  callback(node);
  let children = node.childNodes;
  if (children.length > 0) {
    children.forEach(el => visitAllNodes(el, callback));
  }
};

const flattenTreeToArray = function(node) {
  let arr = [];
  visitAllNodes(node, el => arr.push(el));
  return arr;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};