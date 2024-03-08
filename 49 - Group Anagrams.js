/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    if (strs.length <= 1) {
        return [strs]
    }
    let vals = {}
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].split("").sort().join('') in vals) {
            vals[strs[i].split("").sort().join('')].push(strs[i])
        } else {
            vals[strs[i].split("").sort().join('')] = [strs[i]]
        }
    }
    return Object.values(vals)
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))