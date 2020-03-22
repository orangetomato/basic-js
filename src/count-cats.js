module.exports = function countCats(matrix) {
    let count = 0;
    matrix.forEach(function(arr) {
        arr.forEach(function(item) {
            if (item === '^^') {
                count++;
            }
        });
    });
    return count;
}