/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    var temps = [... new Set(s.split(""))].join("")
    var tempt = [... new Set(t.split(""))].join("")

    if (temps.length !== tempt.length) {
        return false
    }
    var vals = {}
    for (let i = 0; i < s.length; i++) {
        if (s[i] in vals == false) {
            vals[s[i]] = t[i]
        }
    }

    var resultStr = ""
    console.log(vals, s, t)
    for (let i = 0; i < s.length; i++) {
        resultStr += vals[s[i]]
    }

    return resultStr == t
};