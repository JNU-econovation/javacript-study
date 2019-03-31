function Calculator(){
  var tmp = getInput().split(' ');

  this.leftNum = Number(tmp[0]);
  this.operator = tmp[1];
  this.rightNum = Number(tmp[2]);

  this.result = function(){
      if(this.operator==='+'){
        return sum(this.leftNum, this.rightNum);
      }
      if(this.operator==='-'){
        return substract(this.leftNum, this.rightNum);
      }
      if(this.operator==='/'){
        return divide(this.leftNum, this.rightNum);
      }
      if(this.operator==='*'){
        return multiply(this.leftNum, this.rightNum);
      }
    }
    this.print = function(){
      setResult(this.result());
    }
}

function sum(num_1, num_2){
  return num_1 + num_2;
}
function substract(num_1, num_2){
  return num_1 - num_2;
}
function multiply(num_1, num_2){
  return num_1 * num_2;
}
function divide(num_1, num_2){
  if(num_1/num_2 == NaN){
    clearBtn()
    alert('0나누기 경고');
    return;
  }
  return num_1 / num_2;
}
