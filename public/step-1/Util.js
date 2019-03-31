
function getInput(){
  return document.getElementById("input").value;
}

function setResult(value){
  document.getElementById("result").innerHTML = value;
}
function inputNumber(value){
  var input = getInput();
  input += value;
  document.getElementById("input").value = input;
}
function inputOperator(value){
  var input = getInput();
  input += " "+value+" ";
  document.getElementById("input").value = input;
}
