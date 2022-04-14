
// function rverceString(str) {
//     var newStr = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newStr += str[i];
// }
// return newStr;
// }


// console.log(rverceString("creature"));

function acronym(text) {
    return text
        .split(/\s/)
        .reduce(function (accumulator, word) {
            return accumulator + word.charAt(0);
        }, '');
}

var str = (acronym("there's no free lunch - gotta pay yer way"));
var res = str.toUpperCase();
console.log(res);
