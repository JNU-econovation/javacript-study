function handle() {
  const isClicked = true;
  const numRex = /['0-9']/;
  const operatorRex = /[%*/+-]/;
  window.addEventListener('keydown', function(event){
    if(event.key.match(numRex)){
      isClicked = false;
      document.getElementById("blank").value += event.key;
    }
    if(event.key.match(operatorRex)){
      if(isClicked){
        return;
      }
      document.getElementById("blank").value += event.key;
    }
    if(element.keyCode == 8){
      reset();
    }
    if(element.keyCode == 13){
      calculate();
    }
  });
}
function insert(inputValue){
  document.getElementById("blank").value += inputValue;
}
function reset(){
  document.getElementById("blank").value = "";
  document.getElementById("result").value = "";
  console.log("clear");
}
function error(){
  alert("에러입니다.");
}
function check(inputValue, leftnum, rightnum){
    var checkSign = true;
    if((/[%*/+-]/.exec(inputValue.value))!=null || (leftnum ==""|| rightnum =="") || isNaN(leftnum)){
        checkSign = false;
    }
    return checkSign;
}
function operator(inputValue){
  var blankMath = /[%*/+-]/g;
  var blankArea = /\d+/g;
  var leftnum = parseFloat(inputValue.match(blankArea)[0]);
  var rightnum = parseFloat(inputValue.match(blankArea)[1]);
  var sign = inputValue.match(blankMath);
  var result = selectOperator(sign)(leftnum,rightnum);
}
function selectOperator(sign){
  var result = {
    '+' : function add(leftnum,rightnum){ return leftnum+rightnum; },
    '-' : function substruct(leftnum,rightnum){ return leftnum-rightnum; },
    '*' : function multifly(leftnum,rightnum){ return leftnum*rightnum; },
    '/' : function divide(leftnum,rightnum){ return leftnum/rightnum; },
    '%' : function surplus(leftnum,rightnum){ return leftnum%rightnum; }
  }
  return result[sign];
}
function calculate(){
  var inputValue = document.getElementById("blank").value;
  var resultLine = operator(inputValue);
  var resultValue = selectOperator(resultLine.leftnum, resultLine.rightnum, resultLine.sign);

  document.getElementById("result").value = resultValue;
  return resultValue;
}