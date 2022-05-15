const ticketPrice =200;

function calculateValue(){
    let amount=document.getElementById("amount").value
    let category= document.getElementById("category").value
    let discount;
   
    if (category==1){
        discount=80
    } else if (category==2){
        discount=50
    }else if(category==3){
        discount=15
    }else{
        discount=0
    }
   


    let total=amount*ticketPrice;
    total-=total*discount/100;
    document.getElementById("total").innerHTML=total;
}