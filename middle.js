
const middle = function(arr) {
  const index = Math.round((arr.length - 1) / 2);
  const output = [];
  if (arr.length % 2 !== 0) {
    output.push(arr[index]);
    return output;
  } else {
    output.push(arr[index - 1], arr[index]);
    return output;
  }
};

module.exports = middle;

