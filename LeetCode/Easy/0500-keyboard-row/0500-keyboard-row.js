/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {

    let a = "qwertyuiop"
    let b = "asdfghjkl"
    let c = "zxcvbnm"
    let arr = []
    let flag1
    let flag2
    let flag3

    for (let i = 0; i < words.length; i++) {
        flag1 = 0
        flag2 = 0
        flag3 = 0
        let value = words[i].split('')

        for (let j = 0; j < value.length; j++) {
            if (!a.includes(value[j].toLowerCase())) {
                flag1 = 1
            }
            if (!b.includes(value[j].toLowerCase())) {
                flag2 = 1
            }
            if (!c.includes(value[j].toLowerCase())) {
                flag3 = 1
            }
        }
        if (flag1 == 0 || flag2 == 0 || flag3 == 0) {

            arr.push(words[i])
        }
    }


    return arr

};