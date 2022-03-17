
const n1 = document.getElementById("num1")
const n2 = document.getElementById("num2")
const n3 = document.getElementById("num3")
const n4 = document.getElementById("num4")
const resultado = document.getElementById('result')

function somaMedia(){
const soma =  parseInt(n1.value) + parseInt(n2.value) + parseInt(n3.value) + parseInt(n4.value)
const divisao = soma / 4

    if(divisao >= 7 && divisao <= 10){
        resultado.style.color = 'green'
        resultado.innerHTML = "Média: " + divisao 
    }
    else if (divisao < 7 && divisao >= 0){
        resultado.style.color = 'red'
        resultado.innerHTML = "Média: " + divisao 
    }
    else {
        resultado.innerHTML = 'Nota invalida'
        resultado.style.color = 'yellow'
    }

}
