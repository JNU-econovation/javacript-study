function insert(inputValue){
  document.getElementById("window").value += inputValue;
}

function typeError(){
    alert("에러입니다.");
}

function reset(){
  document.getElementById("window").value = "";
  document.getElementById("result").value = "";
  console.log("clear");
}

function check(inputValue, left, right){
    var checkSign = true;
    if((/[%*/+-]/.exec(inputValue.value))!=null && (left ==""|| right =="") || isNaN(left)){
        checkSign = false;
    }return checkSign;
}

function save(inputValue){
  var windowMath = /[%*/+-]/g;
  var windowArea = /\d+/g;
  var left = parseFloat(inputValue.match(windowArea)[0]);
  var right = parseFloat(inputValue.match(windowArea)[1]);
  var sign = inputValue.match(windowMath)[0];

    if(check(inputValue, left, right) == false || isNaN(left)){
        typeError();
    }
    
  var useful = {
    'left' : left,
    'right' : right,
    'sign' : sign
  }
  return useful;
}

function add(left,right){
  return left+right;
}
function minus(left,right){
  return left-right;
}
function mul(left,right){
  return left*right;
}
function div(left,right){
  return left/right;
}
function surplus(left,right){
  return left%right;
}

function calculator(){
  var inputValue = document.getElementById("window").value;


  console.log("calculator 실행");
  console.log(inputValue);
  var ResultLine = save(inputValue);
  var resultValue = Math(ResultLine.left, ResultLine.right, ResultLine.sign);

  document.getElementById("result").value = resultValue;
  return resultValue;
}

function Math(left, right, sign){
  switch(sign) {
    case '+':
    return add(left, right);
    case '-':
    return minus(left, right);
    case '*':
    return mul(left, right);
    case '/':
    return div(left, right);
    case '%':
    return surplus(left, right);
  }
}
