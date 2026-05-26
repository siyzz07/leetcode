/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
    let obj={}
    let caps = ''
    let small = ''
    for (let i = 0; i < word.length; i++) {
        if (word[i] == word[i].toUpperCase()) {
            caps += word[i]
        } else {
            small += word[i]
        }
    }

    for(let i =  0 ; i< small.length ; i++){

        if(!obj[small[i]]){

            if(caps.includes(small[i].toUpperCase())){
                obj[small[i]] = true
            }
        }
    }
   return Object.keys(obj).length

};