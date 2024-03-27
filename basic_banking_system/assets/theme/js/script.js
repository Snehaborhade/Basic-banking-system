let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

function sendMoney(){

    var entername=document.getElementById("entername").value;
    var enteramount=parseInt(document.getElementById("enteramount").value);


    if(enteramount >500000)
    {
        alert("Insufficient Fund.")
    }
    else{
         var findUserBankAccount = entername + "BankBalance";
         var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enteramount;
         var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enteramount
         document.getElementById("myAccountBalance").innerText = myAccountBalance
         document.getElementById(findUserBankAccount).innerHTML = finalAmount;
         alert(`Transation Successful ${enteramount}INR is sent to ${entername}.`)

         var createPTag =document.createElement("li");
         var textNode = document.createTextNode(`${enteramount}INR is sent to reciever with id ${entername}.`)
         createPTag.appendChild(textNode);
         var element = document.getElementById("transition-histroy-body");
         element.insertBefore(createPTag, element.firstChild);


    }
}