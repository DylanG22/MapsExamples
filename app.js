
// 1. [1,2,3,4]

// 2. 'ref'

// 3. {array(3) => true, array(3) => false}



function hasDuplicate(arr){
    let testSet = new Set(arr);
    return arr.length !== testSet.size;
}

function vowelCount(str){
    let lowerCaseStr = str.toLowerCase();
    let vowels = new Set('aeiou');
    let vowelMap = new Map();
    for(let letter of lowerCaseStr){
        if(vowels.has(letter)){
            if(!vowelMap.get(letter)){
                vowelMap.set(letter,1);
            }
            else{vowelMap.set(letter,(vowelMap.get(letter)+1));}
        }
    }
    return vowelMap;
}