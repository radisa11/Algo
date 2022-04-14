function bubbleSort(arr){
    var swapped = true;
    while(swapped){
            for( var i = 0; i < arr.lenght-1; i++){
                console.log("${arr[i]}, ${arr[i+1]}");
                if(arr[i] > arr[i+1]){
                    swapped = true;
                    var temp = arr[i];
                    arr[i] = arr[i+1]
                    arr[i+1] = temp;
            }
        }
    }
    return arr;
}
let arr = [5,4,2,6,8,14,1,3];
console.log(arr);
console.log(bubbleSort(arr));