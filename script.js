
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("interestrate").value;
    var years = document.getElementById("years").value;
    
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    var amount = principal + interest;
    document.getElementById("result").innerHTML="\<br\>If you deposit \<span id='by'\>"+principal+"\</span\>,\<br\>at an interest rate of \<span id='by'\>"+rate+"%\</span\>\<br\>You will receive an amount of \<span id='by'\>"+interest+"\</span\>,\<br\>in the year \<span id='by'\>"+year+"\</span\>\<br\>."
}
        

function updateRate(){
    var rateval = document.getElementById("interestrate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function validateForm() {
  var x = document.getElementById("principal").value;
  if (x < 1 ) {
    document.getElementById("principal").focus();
    alert("Enter a positive number");
    
    
  }else{
      compute();
  }
}