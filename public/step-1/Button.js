function clearBtn(){
  document.getElementById("input").value ='';
}
function calculateBtn(){
   checkInput();
   var cal = new Calculator();
   cal.print();
   clearBtn();
}
