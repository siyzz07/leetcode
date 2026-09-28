/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
   let max = 0
   let stack  =[]

   for(let val of s){
    if(val == "("){
        stack.push("(")
        if(max < stack.length){
            max = stack.length
        }
    }
    if(val == ")") stack.pop()
     }  
   return max

};