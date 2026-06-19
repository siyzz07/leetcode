/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    paragraph = paragraph.toLowerCase()
    let arr = paragraph.split(/[\s !?',;.]+/)
    let obj = {}

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].trim().length>=1   && !/[\s?',;.]+/.test(arr[i])) {
            if (!obj[arr[i]]) {
                obj[arr[i]] = 1
            } else {
                obj[arr[i]]++
            }
        }
    }
    let val=0
    let para
    for(let i in obj){
        if(!banned.includes(i) && obj[i]>val){
            val=obj[i]
            para=i
        }
    }

    return para
};