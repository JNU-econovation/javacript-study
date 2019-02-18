function add(a,b){
  return a+b;
}
function minus(a,b){
  return a-b;
}
function mul(a,b){
  return a*b;
}
function div(a,b){
  return a/b;
}
function surplus(a,b){
  return a%b;
}

function input(i){
  if(in1.value==0){
      document.getElementById("in1").value =+ i;
  }else {
    document.getElementById("in2").value =+ i;
  }
}

function reset(){
  document.getElementById("in1").value = "";
  document.getElementById("in2").value = "";
  document.getElementById("out").value = "";
}

var v3;

function click_in(X){
  var in1 = document.getElementById("in1");
  var in2 = document.getElementById("in2");
  var out = document.getElementById("out");

  var v1 = parseFloat(in1.value);
  var v2 = parseFloat(in2.value);


  if(X == "+"){
    v3 = add(v1,v2);
  }
  else if(X =="-"){
    v3 = minus(v1,v2);
  }
  else if(X =="*"){
    v3 = mul(v1,v2);
  }
  else if(X =="/"){
    v3 = div(v1,v2);
  }
  else if(X =="%"){
    v3 = surplus(v1,v2);
  }
  else if(X =="="){
    v3;
  }
  document.getElementById("out").value = v3;
}
