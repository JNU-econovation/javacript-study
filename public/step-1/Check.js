function checkInput(){
  var str = getInput().split(' ');

  checkSplit(str.length);
  checkNumber(str[0]);
  checkOperator(str[1]);
  checkNumber(str[2]);
}
function checkSplit(length){
  if(length !=3){
    alert('경고');
    return;
  }
}
function checkNumber(num){
  if(isNaN(num)){
    alert('숫자 경고');
  }
}

function checkOperator(op){
  if(!op ==='/' || !op==='*' || !op ==='+' ||!op === '-'){
    alert('연산자 경고!');
  }
}
