//This is the simple project in Js 
// Black jack 
//Logic behind it is 
//count increment on low card like 2-6
//count decrement on high card like 10 A K Q J 
//Remaining doesn't affect any thing 
//lets code it
let count=0;

function blackJack(params) {
    if (params >= 2 && params <=6 ){
        count++;
    }
    else if(params===10 || params==='A' || params==='Q' || params==='K' || params==='J'){
        count--;
    }
    if(count>0){
        return count + "bet";
    }
    else{
        return count +"hold";
    }
}
console.log(blackJack(3));