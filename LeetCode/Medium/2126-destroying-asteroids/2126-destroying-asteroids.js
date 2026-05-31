/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
   asteroids.sort((a,b)=> a-b)
   let isTrue = true
   let flag = asteroids.reduce((acc,value ) =>{
    console.log(acc, '--->',value)
     if(value>acc){
        isTrue=false
     }   else{
        acc+= value
     }
     return acc
   },mass)
   return isTrue? true:false
};