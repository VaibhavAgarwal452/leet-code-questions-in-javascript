/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let vals = {}
    if (s.length != t.length) {
        return false
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] in vals) {
            vals[s[i]]++
        } else {
            vals[s[i]] = 1
        }
    }

    for (let i = 0; i < t.length; i++) {
        console.log(vals, "vals")
        if (t[i] in vals) {
            if (vals[t[i]] == 0) {
                return false
            }
            vals[t[i]]--
        } else {
            return false
        }
    }
    return true
};

console.log(isAnagram("aacc", "ccac"))