function handle() {
  let isClicked = true;
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
    if(event.key == 'Backspace'){
      reset();
    }
    if(event.key == 'Enter'){
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
}
function error(){
  alert("에러입니다.");
}
function check(inputValue, leftnum, rightnum){
    if((/[%*/+-]/.exec(inputValue.value))!=null || leftnum ==""|| rightnum ==""){
        checkSign = false;
    }
    return checkSign;
}
function operator(inputValue){
  const blankMath = /[%*/+-]/g;
  const blankArea = /\d+/g;
  var leftnum = parseFloat(inputValue.match(blankArea)[0]);
  var rightnum = parseFloat(inputValue.match(blankArea)[1]);
  var sign = inputValue.match(blankMath);
  var result = selectOperator(sign)(leftnum,rightnum);
}
function selectOperator(sign){
  var SignOperator = {
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
}