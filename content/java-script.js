
function priceCalc(){
    var quantityBirthdayCake = document.querySelector("#quantityBirthdayCake").value;
    var quantityPartyCups = document.querySelector("#quantityPartyCups").value;
    var quantityBeerkegs = document.querySelector("#quantityBeerkegs").value;
    var quantityPoundOfBeef = document.querySelector("#quantityPoundOfBeef").value;
    var quantityBulletProofVest = document.querySelector("#quantityBulletProofVest").value;
        price = quantityBirthdayCake * 49.95;
        price1 = quantityPartyCups * 0.1;
        price2 = quantityBeerkegs * 45.95;
        price3 = quantityPoundOfBeef * 14.9;
        price4 = quantityBulletProofVest * 450.00;
        totalPrice = price + price1 + price2 + price3 + price4;
        price = totalPrice;
        return document.querySelector(".totalPrice").innerHTML = totalPrice;
    }
    priceCalc()
   
    function showPrice(){
        var price = document.querySelector(".totalPrice").innerHTML;
        console.log(price)
        return alert("Total price is "+ price);
    }