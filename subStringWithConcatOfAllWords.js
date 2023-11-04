/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {

    let result = [];
    let windowLength = words.length * words[0].length;
    let wordLength = words[0].length;
    let hMap = new Map();
    for(let i=0; i<words.length; i++) {
        hMap.set(words[i], (hMap.get(words[i]) || 0) + 1);
    }
    for(let start = 0; start <= s.length - windowLength; start++) {
        let currentWindow = s.slice(start, start+windowLength);
        let currWindowHmap = new Map();
        for(let currStart = 0; currStart <= currentWindow.length - wordLength; ) {
            let eachWord = currentWindow.slice(currStart,currStart+wordLength);
            currWindowHmap.set(eachWord, (currWindowHmap.get(eachWord) || 0) + 1);
            currStart += wordLength;
        }
        
        let allStringsFound = true;
        for(let [key,val] of hMap) {
            if(val != currWindowHmap.get(key)) {
                allStringsFound = false;
                break;
            }
        }

        if(allStringsFound)
            result.push(start);
    }
    return result; 
};

console.log(findSubstring("barfoothefoobarman", ["foo","bar"]));