//to do
    //ensure that decimals round to elimnate long decimal numbers 



//operations 
function add(a,b) {
    return parseFloat(a)+parseFloat(b); 
}

function subtract(a,b){
    return a-b;
}

function divide(a,b){
    return a/b;
}

function multiply(a,b){
    return a*b;
}

//operator function for operations 
function operate(operator, a, b){
    return operator(a,b); 
}

//Used to store data from clicked buttons
let input = [];



//Logs each button clicked and evaluates how to store it in the input
document.addEventListener("click", function(event){

    //only fires when it is a button
    if(event.target.className == "calcButtons"){
        let value = event.target.innerHTML;
        let calcDisplay = document.getElementById("calcDisplay");
        let regex = /[^\-\+\*\/\=]/gi;
        
        console.log(input)
        //Handle clear
        if(value == "Clear"){
            input = [];
            calcDisplay.innerHTML = 0;
            return;
        }

        //if user tries to divide by 0
        if(value == 0 && input[1]=="/"){
            console.log(value)
            calcDisplay.innerHTML = "NO DIVIDING BY 0 CHAMP!";
            input = [input[0],input[1]];
            return;  
        }

        //if clicked button is an operator
        if(value.match(regex)==null){
            if(input.length==3){
                solve(input, value);
            }

            // if two operators are entered consecutively 
            else if(input[input.length-1].match(regex)==null){
                input[1]=value;
            }
            
            else{
                input.push(value);
            }
        }

        //if clicked button is a number button
        else{
            if(input.length==0){
                input.push(value)
            }
            else if(input[input.length-1].match(regex)==null){
                input[input.length] = value;
            }
            else{
                input[input.length-1]+=value;
            }

        }
    
    //Sets up the calculator display to match user input without operators
        if(input[input.length-1].match(regex)!=null){
            calcDisplay.innerHTML = input[input.length-1];
        }

        else{
            calcDisplay.innerHTML = input[0];
        }
}

})



    



// function to solve for current numbers inputted by user 
function solve(array, lastButton){
    let firstNumber = array[0];
    let operation = array[1];
    let secondNumber = array[2];

        
        //when the length of the array is 4, 
        //operate on the first three values 
        //use new value to continue calculator sequence 
        if(array.length==3){
            let result ;
            if(operation=="+"){
                result = operate(add, firstNumber, secondNumber);
                console.log(result)
                input = [result.toFixed(3)];
            }
            if(operation=="-"){
                result = operate(subtract, firstNumber, secondNumber);
                input = [result.toFixed(3)];
            }
            if(operation=="*"){
                result = operate(multiply, firstNumber, secondNumber);
                input = [result.toFixed(3)];
            }
            if(operation=="/"){
                result = operate(divide, firstNumber, secondNumber);
                input = [result.toFixed(3)];
            }
            

        }
            input.push(lastButton)
            
        
}







