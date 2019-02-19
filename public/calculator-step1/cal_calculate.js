function start_cal(){
    var input = documnet.getElementById('input');
    var number = input.split(/[\*\/\+\-]/);
    var left_number = number[0];
    var right_number = number[1];
    var after_leftnum = parseInt(left_number);
    var after_rightnum = parseInt(right_number);
    var input_symbol = /[+*/-]/g;
    var symbol = input.match(input_symbol);

    if(symbol == '+'){
        function plus(after_leftnum,after_rightnum){
            return after_leftnum + after_rightnum;
            }
        }
    
    if(symbol == '-'){    
        function minus(after_leftnum,after_rightnum){
            return after_leftnum - after_rightnum;
            }
        }
    
    if(symbol == '*'){    
        function multiply(after_leftnum,after_rightnum){
            return after_leftnum * after_rightnum;
            }
        }

    if(symbol  == '/'){    
        function divide(after_leftnum,after_rightnum){
            return after_leftnum / after_rightnum;
            }
        }

        
}


