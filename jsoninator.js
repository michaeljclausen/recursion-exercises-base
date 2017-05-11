const _ = require('underscore'); // the real one! :)

const stringify = function(obj) {
  let result = '';
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (obj === null) {
    return 'null';
  }
  if (Array.isArray(obj)) {
    result += '[';
    obj.forEach((el, index, obj) => {
      result += stringify(el);
      if (index < obj.length - 1) {
        result += ',';
      }
    });
    result = result + ']';
    return result;
  }
  result += '{';
  for (key in obj) {
    result += stringify(key) + ':' + stringify(obj[key]);
  }
  result = result + '}';
  return result;
};

module.exports = {
  stringify: stringify
};