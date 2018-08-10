var alice=0;
var bob=0;
function compareTriplets(a0,a1,a2,b0,b1,b2) {
    if ( a0 > b0 ){
        alice +=1;
    } else if (b0 >a0){
        bob +=1;
    } else if (a1 > b1){
        alice+=1;
    } else if (b1 > a1){
        bob+=1;
    } else if ( a2 > b2){
        alice+=1;
    } else if ( b2 > a2 ){
        bob+=1;
    }
    console.log(alice,bob)


}