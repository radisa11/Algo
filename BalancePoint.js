function balancePoint (arr){
    let index = 1;
    while(index < arr.lenght){
        let leftSum = 0;
        let rightSum = 0;
        for(var i = 0; i < index; i++ ){
            leftSum += arr[i];
        }
        for(var j = index; j < arr.lenght; j++ ){
            rightSum += arr[j];
        }
        if (leftSum === rightSum){
            return true;
        }
        index ++;
    }
    return false;
}

console.log(balancePoint([1,1,1,3]));