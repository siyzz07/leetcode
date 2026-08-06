/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
    let product = (value) =>{
        let a = value.toString().split('')
        let val = a[0]*1
        
        for(let i = 1 ; i<a.length ; i++){
            console.log('99',i)
            val *=  a[i]*1
        }
        return val
    }

    for(let i = n ; i < Infinity ; i++){
            let val =product(i)
            console.log(val)
            if(val%t ==0){
                return i
            }
    }
};