var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];

function isPresent2d(arr2d,value){
    for(var i = 0; i < arr2d.length; i++){
        for(var j = 0; j < arr2d[i].length; j++){
            if(arr2d[i][j] == value){
                return true;
            }
        }
    }
    return false;
}              
if(isPresent2d,6){
    console.log("6 is present in the 2d array!!");
}
else{
    console.log(("6 is NOT present in the 2d array!!"));
}


var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];

function flatten(arr2d){
    var flat = [];
    for(var i = 0; i <arr2d.length; i++){
        for(var j = 0; j <arr2d[i].length; j++){
            flat.push(arr2d[i][j]);
        }
    }
    return flat;
}              
console.log(flatten(arr2d));