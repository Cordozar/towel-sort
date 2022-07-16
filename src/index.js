// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix) {
    return []
  }  
  for (let i = 1; i < matrix.length; i += 2) {
      matrix[i] = matrix[i].reverse();
    }
    let res = [];
    for (let i = 0; i < matrix.length; i++) {
        res = res.concat(matrix[i]);
    }
    return res

};
