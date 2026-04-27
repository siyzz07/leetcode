/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let arr = []
    for (let i = 0; i < s.length; i++) {
        if (i == 0) {
            arr.push(s[i])
        } else {

            if (arr[arr.length - 1] == "(" && s[i] == ")" || arr[arr.length - 1] == "{" && s[i] == "}" || arr[arr.length - 1] == "[" && s[i] == "]") {
                arr.pop()
            } else {
                arr.push(s[i])
            }
        }
    }
    return arr.length==0
};