// HOC
// callback is a function passed in as an argument
function mapAndManipulate(arr, callback) {
  const result = [];
  for (let item of arr) {
    result.push(callback(item));
  }
  return result;
}

const multiplyBy2 = function (input) {
  return input * 2;
};

const result1 = mapAndManipulate([1, 2, 3], multiplyBy2);
