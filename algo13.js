// Use the bookIndex function below to receive a sorted array of page numbers
// and then return a STRING that combines consecutive pages to create ranges.

// Example: [1,3,4,5,7,8,10,12,14,15,16,17] returns "1, 3-5, 7-8, 10, 12, 14-17"

// HINTS: 
// You'll want a way to look at the current value and then look at the next one to see if it's one higher
// If it is, then you've found a range, if it's not, you haven't
// You could create a string and add to it, or get rid of the values in the array that aren't needed 
//   and convert to a string, or whatever way you come up with!
// function bookIndex(arr){
//     var first ="";
//     var last ="";
//     var start = False
//     var final = ""
// for (var i = 0; i < arr.length; i++){
//         if (arr[i+1]==arr[i]+1){
//             start = True;
//             first = arr[i];
//         }
//         else {
//             if (start == True){
//                 start = False;
//                 last = arr[i];
//                 var string =
//             }
//         }
// }
// }

// console.log(bookIndex([1,3,4,5,7,8,10,12,14,15,16,17]))
// Use the bookIndex function below to receive a sorted array of page numbers
// and then return a string that combines consecutive pages to create ranges.

// Example: [1,3,4,5,7,8,10,12,13,14,15,16,17] returns "1, 3-5, 7-8, 10, 12, 14-17"

// HINTS: 
// You'll want a way to look at the current value and then look at the next one to see if it's one higher
// If it is, then you've found a range, if it's not, you haven't
// You could create a string and add to it, or get rid of the values in the array that aren't needed 
//   and convert to a string, or whatever way you come up with!


function bookIndex(arr){ //  i=0  [1,3,4,5,7,8,10,12,14,15,16,17]  length = 12
    var str = ""; 
    for (var i = 0 ; i < arr.length ; i++){        
        if (arr[i + 1] === arr[i] + 1){
            var start = arr[i];
            while (arr[i + 1] === arr[i]+1){
                i++;
            }
            var end = arr[i];
            str += start + "-" + end;
        }
        else {
            str += arr[i];
        }
        if (i !== arr.length-1){
            str += ", ";
        }
    }
    return str;
}

console.log(bookIndex([1,3,4,5,7,8,10,12,14,15,16,17]))



function bookIndex(arr){ // [1,3,4,5,7,8,10,12,14,15,16,17]  
    for(var i = 0; i < arr.length; i++){   // i = 1
        //search for consecutive numbers
        if(arr[i]+1 == arr[i+1]){
            var j = 1 // marker to increase during the while loop

            while(arr[i]+j == arr[i+1]){  // j = 3    [1,3-5,7-8,10,12,14-17]  
                //if consecutive numbers find starting and ending indexes. 
                var temp = arr[i+1] 
                //erase indexes no longer needed | splice, from position i+1 removes 1 item
                arr.splice(i+1, 1) 
                j++ // add to j to see if nth time through the loop is nth bigger than arr[i]
            }            
            //Combine values with a '-' in between
            arr[i] = `${arr[i]}-${temp}`
        }
    }
    // join converts an array to a string and separates each element by the passed in value
    return arr.join()
}

console.log(bookIndex([1,3,4,5,7,8,10,12,14,15,16,17]))
