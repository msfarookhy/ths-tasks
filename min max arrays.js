function miniMaxSum(arr) {
    var min = 0 ;
    var max = 0 ;

    arr.sort(function (a,b){
        return a-b;
    });

    for(var i=0 ;i <arr.length-1 ; i++ ) {
        min += arr[i]
        max +=arr[i+1]
    }

    console.log(min,max);

}