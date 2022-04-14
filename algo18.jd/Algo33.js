//Create a standalone function that accepts a string
//and an integer, and rotates the characters in the
//string to the right by that amount.
//this one must be done without built in methods
//("Did I shine my shoes today?", 9) ->
//"es today?Did I shine my shoe"
const rotateString = (str, num) => {
    let restOfStr = str.length - num;
    let str2 = '';
    for (let i = restOfStr; i < str.length; ++i) {
        str2 += str[i];
    }
    for (j = 0; j < restOfStr; j++) {
        str2 += str[j];
    }
    return str2;
}

let testString = "012345";
console.log(rotateString(testString, 3));
let shoes = "Did I shine my shoes today?";
console.log(rotateString(shoes, 9));

//write a function that will return true if str2 is a
//rotation of str1. otherwise return false
//("Did I shine my shoes today?", "es today?Did I shine my shoe")
// -> returns true
const isRotation = (str1, str2) => {

    for (let i = 0; i < str1.length; ++i) {
        let newStr = rotateString(str1, i);
        if (newStr == str2) {
            return true;
        }
    }
    return false;
}


console.log(isRotation("Did I shine my shoes today?", "es today?Did I shine my sho"));
console.log(isRotation("Did I shine my shoes today? ", "es today?Did I shine my sho"));