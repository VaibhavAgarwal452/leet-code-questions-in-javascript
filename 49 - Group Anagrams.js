

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    var map = new Map()

    for (let i = 0; i < strs.length; i++) {
        const key = strs[i].split('').sort().join('')

        if (map.has(key)) {
            map.get(key).push(strs[i])
        } else {
            map.set(key, [strs[i]])
        }
    }
    return [...map.values()]
};

function sort(word) {
    return word.split('').sort().join('')
}


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))