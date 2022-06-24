

const price = document.getElementById("price");
const tax = document.getElementById("tax");
const ads = document.getElementById("ads");
const discount = document.getElementById("discount");

 function getTotal(){
    if(price.value !="" ){
        const weke = (+price.value + +tax.value + +ads.value) / 100 * (+discount.value) ;
        const  result = (+price.value + +tax.value + +ads.value) - weke;
         
         total.innerHTML = result.toFixed(1);
         total.style.background = "green";
         total.style.color = "white";
        
   }
   else {
       total.innerHTML = "";
       total.style.background = "red";
   }
}    

discount.onkeyup = function (){
    if (discount.value >=100){
        total.innerHTML = "free"
    }
    else{
        getTotal()
    }
}





