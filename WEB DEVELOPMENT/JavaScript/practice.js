// order = [{item: "rice", quantity: 2, price:1400},{item: "wheat", quantity: 3, price:900},{item: "curd", quantity: 1, price:100}]
// grandTotal = 0;
//     for(i=0;i<order.length;i++){
//         console.log("RECEIPT");
//         var eachitem = order[i].item;
//         var eachquantity = order[i].quantity;
//         var eachprice = order[i].price;
//         grandTotal+=order[i].quantity * order[i].price;
//         console.log(`${eachitem} - ${eachquantity} - ${eachprice} `);
        
//     }
//     console.log("TOTAL ORDER:" + grandTotal);

const password = ["Vedhasri132","gamini1","vegamini231dha"];
for(i=0;i<password.length;i++){
    if(password[i].length>8 && password[i].length<20 && /[a-zA-Z0-9]/.test(password[i])){
        console.log(`${password[i]} is Valid`);
    }
    else{
        console.log(`${password[i]} is Invalid`);
    }
}
