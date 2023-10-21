/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {

    let map = new Map(), resultStart = 0, resultEnd = -1, minLength = Number.MAX_SAFE_INTEGER, start = 0, end = 0;

    for(let i = 0; i < t.length; i++){
        map.set(t[i], (map.get(t[i]) || 0) + 1);
    }

    //number of distinct characters to collect
    let distinctChars = map.size;

    while(end < s.length) {

        if(map.has(s[end])) {
            map.set(s[end], map.get(s[end]) - 1);
        }

        if(map.get(s[end]) == 0)
            distinctChars--;
        
        while(distinctChars == 0) {

            if(end - start + 1 < minLength) {
                minLength = end - start + 1;
                resultStart = start;
                resultEnd = end;
            }
            
            if(map.has(s[start])) {
                map.set(s[start], map.get(s[start]) + 1);
            }

            if(map.get(s[start]) == 1)
                distinctChars++;
            
            start++;

        }

        end++;

    }

    return s.substring(resultStart, resultEnd + 1);
    
};

//slightly modified version

var minWindow = function(s, t) {

    let map = new Map(), resultSubString = "", start = 0, end = 0;

    for(let i = 0; i < t.length; i++){
        map.set(t[i], (map.get(t[i]) || 0) + 1);
    }

    //number of distinct characters to collect
    let distinctChars = map.size;

    while(end < s.length) {

        if(map.has(s[end])) {
            map.set(s[end], map.get(s[end]) - 1);
        }

        if(map.get(s[end]) == 0)
            distinctChars--;
        
        while(distinctChars == 0) {

            if(!resultSubString || end - start + 1 < resultSubString.length) {
                resultSubString = s.slice(start,end+1)
            }
            
            if(map.has(s[start])) {
                map.set(s[start], map.get(s[start]) + 1);
            }

            if(map.get(s[start]) == 1)
                distinctChars++;
            
            start++;

        }

        end++;

    }

    return resultSubString;
    
};


