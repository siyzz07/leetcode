/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    
    let arr = []

    for(let i = 0 ; i< matrix.length ; i++){

        for(let j = 0 ; j< matrix.length ; j++){
            
            if(!arr[j]){
                arr[j] = []
            }

            arr[j].unshift(matrix[i][j])

        }

    }
    
    matrix.splice(0,matrix.length,...arr)


};