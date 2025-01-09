const buttons = document.querySelectorAll('button')
const expression = document.getElementById('expression')
let operators = ['+', '-', '*', '/', '%']


let output = ""

function calculate(btnValue) {
    if(btnValue == "=" && output !== ""){
        output = eval(output)
    }else if (btnValue == 'AC') {
        output = ''
    }else if(btnValue == "+/-"){
        output *= -1
    }else if(btnValue == "del"){
        output = output.slice(0, -1)
    }

    else{
        if(operators.includes(btnValue) && operators.includes(output(output.length - 1))){
            output = output.slice(0, -1) + btnValue
        }else{
        output += btnValue
        }
    }
    expression.value = output
}

buttons.forEach(button => {
    button.addEventListener('click', (e) =>{
        calculate(e.target.dataset.value)
    })
})