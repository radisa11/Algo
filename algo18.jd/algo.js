function iterativeBinarySearch(arr, val) {
    var start = 0;
    var end = arr.length - 1;

    while (start <= end){
        var middle = Math.floor((start + end) / 2);
        if (arr[middle] === val){
            return true;
        } else if (arr[middle] < val){
            start = middle + 1;
        }else {
            end = middle - 1;
        }
    }
    return false;
}
console.log(iterativeBinarySearch([1,2,3,5,7,9,10,11,13,14,15,56,78],6))