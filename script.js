document.addEventListener("DOMContentLoaded", function(event){
    let numberButtons = document.getElementsByTagName("button");
    let buttonsArray = [];
    for(let i = 0; i<numberButtons.length; i++){
        buttonsArray.push(numberButtons[i])
    }
    buttonsArray.forEach(button=>{
        button.addEventListener("click", ()=>{
            console.log(button.innerHTML);
        })
    })
})

//must evaluate 2 numbers with operator between them first and display that number then move on to the next! 


function add(a,b) {
    return a+b; 
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

function operate(operator, a, b){
    return operator(a,b); 
}