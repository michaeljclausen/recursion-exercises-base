const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  let arr = flattenTreeToArray(root);
  let result;
  arr.forEach(el => {
    if (el.id === id) {
      result = el;
    }  
  });
  return result;
};

const getElementsByClassName = function(root, className) {
  let arr = flattenTreeToArray(root);
  let results = [];
  arr.forEach(el => {
    if (el.classList) {
      for (let name in el.classList) {
        if (el.classList[name] === className) {
          results.push(el);
        }
      }
    }
  });
  return results;
};

const getElementsByTagName = function(root, tagName) {
  let arr = flattenTreeToArray(root);
  let results = [];
  arr.forEach(el => {
    if (el.tagName === tagName) {
      results.push(el);
    }
  });
  return results;
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
