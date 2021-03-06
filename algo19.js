

// Balance Point & Balance Index

// [1,2,3,2,1] == False;

// Balance Point is False

// [1,2,2,1] == True;

// Balance Point is True



// Balance Point checks if the array can be split evenly. 
//
// Balance Index checks if the array can be split evently & returns the index value of the array.
// Balance Index will be the point between the array where it can be split evenly. 

// [1,1,1, { 2 } ,3]

// 2 == Balance Index





// Balance Point

// Write a function that returns whether the given array has a balance point BETWEEN indices, where one side’s sum is equal to the other’s. 
// Ex: given [1,1,1,1] > return true, because between indices 1 and 2 the sum on the left and right are equal
// Ex: given [2,1,1] > return true, because between indices 0 and 1 the sum of the left and right are equal
// Ex: given [3,1,1] > return false, because at no point is the left sum equal to the right sum

function balancePoint(arr){
    let left = 0
    for(i=0; i < arr.length; i++) {
        left += arr[i]
        let right = 0 
        for(j = i+1; j < arr.length; j++) {
            right += arr[j]
        } 
        if (left == right) {
            return true
        } 
    } return false
}

console.log(balancePoint([1,2,3,2,1]))




// Balance Index

// Here, a balance point is ON an index, not between indices. Return the balance index where sums are equal on either side (exclude its own value).
// Return -1 if none exist.
// Ex: given [1,20,1] > return 1 because the sums of the values on the left and right of index 1 are equal
// Ex: given [1,20,2] > return -1 because the sums of the values on the left and right of index 1 are not equal
// Ex: given [1,2,1,20,4] > return 3
// Ex: given [2,2,9,6,-2] > return 2

function balanceIndex(arr){
    let left = 0
    for(i=0; i < arr.length; i++) {
        left += arr[i]
        let right = 0 
        for(j = i+2; j < arr.length; j++) {
            right += arr[j]
        }
        if (left == right) {
            return i+1
        } 
    } return -1
}

console.log(balanceIndex([1,2,1,1,20,1]))

