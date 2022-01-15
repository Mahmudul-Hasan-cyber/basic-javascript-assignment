

function kilometerToMeter(kilometer) {
    if (kilometer <= 0) {
        return 'negative number not allowed'
    }else{
        const meter = kilometer * 1000;
         return meter;
    }
}


function budgetCalculator(watch,phone,laptop){
   if (watch,phone,laptop <= 0) {
       return " You should put valid quantity"
   }else {
    watchPrice = watch * 50;
    phonePrice = phone * 100;
    laptopPrice = laptop * 500;
    const total = watchPrice + phonePrice + laptopPrice;
    return total;
   }
}
function hotelCost(day){
    let price = 0
    if(day <= 0){
        return " You should put valid number of the day"
    }
    else if(day <= 10){
        price = day * 100; 
    }else if(day <= 20){
        firstTenDays = 10 * 100;
        remaining = day - 10;
        secondTenDays = remaining * 80;
        price = firstTenDays + secondTenDays;
    }else{
        firstTenDays = 10 * 100;
        secondTenDays = 10 * 80;
        remaining = day - 20;
        aboveTwentyDays = remaining * 50;
        price = firstTenDays + secondTenDays + aboveTwentyDays;
    }
    return price;
}




function megaFriend(friend){
    let friendsName = 0;
    let biggerName;
    for (let i = 0; i < friend.length; i++) {
        if(friend[i].length > friendsName){
            biggerName = friend[i];
        }
        
    }
    return biggerName;
}