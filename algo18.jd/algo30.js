// const combine = (leftArr, rightArr) => {
//     var result = [];

//     // while both arrays have elements in them, zip them together
//     while (leftArr.length && rightArr.length) {
//         // if the left array first element is less than the right array first element, push to result
//         if (leftArr[0] <= rightArr[0]) {
//             result.push(leftArr.shift());
//             // else push the right array first element to result
//         } else {
//             result.push(rightArr.shift());
//         }
//     }

//     // if left is the only array with elements, push them all in
//     while (leftArr.length) {
//         result.push(leftArr.shift());
//         // if right is the only array with elements, push them all in
//     }
//     while (rightArr.length) {
//         result.push(rightArr.shift());
//     }
//     // return final result
//     return result;
// }

// console.log(combine([1,2,7,9],[0,3,4,6,11]));
const combine = (leftArr, rightArr) => {
    console.log(leftArr);
    let left = 0;
    let right = 0;
    let newArr = [];
    while(left < leftArr.length || right < rightArr.length){
        if(left >= leftArr.length){
            newArr.push(rightArr[right]);
            ++right;
        }
        else if(right >= rightArr.length){
            newArr.push(leftArr[left]);
            ++left;
        }
        else if(left < leftArr.length && leftArr[left] < rightArr[right]){
            newArr.push(leftArr[left]);
            ++left;
        }
        else{
            newArr.push(rightArr[right]);
            ++right;
        }
    }
    return newArr;
}

const mergeSort = (arr) => {
    if(arr.length < 2){
        return arr;
    }
    const left = arr.slice(0, arr.length/2);
    const right = arr.slice(arr.length/2, arr.length);
    return combine(mergeSort(left), mergeSort(right));
}

//should return [1,2,3,4,5,6,8,14]
console.log(mergeSort([5,4,2,6,8,14,1,3,11]));