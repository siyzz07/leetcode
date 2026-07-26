/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length < 2) return strs[0]
    strs.sort((a, b) => a.length - b.length)
    let minStr = strs[0]
    let word = ""
    for (let i = 0; i < minStr.length; i++) {
        let flag = 0
        for (let j = 0; j < strs.length; j++) {

            if (minStr[i] != strs[j][i]) {
                flag = 1
                break
            }
        }

        if (flag != 1) {
            word += minStr[i]
        } else {
            break
        }
    }
    return word
};