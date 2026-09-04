/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (s, t) {
    var temps = [... new Set(s.split(""))].join("")
    var tempt = [... new Set(t.split(" "))]
    console.log(temps, tempt)
    if (temps.length !== tempt.length) {
        return false
    }
    var vals = {}
    for (let i = 0; i < temps.length; i++) {
        if (temps[i] in vals == false) {
            vals[temps[i]] = tempt[i]
        }
    }

    var resultStr = ""
    console.log(vals, s, t)
    for (let i = 0; i < s.length; i++) {
        resultStr += vals[s[i]] + " "
    }

    return resultStr.trim() == t
};