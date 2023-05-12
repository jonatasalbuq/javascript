var num = document.querySelector('input#txtnum')
var resul = document.querySelector('div#resul')
var list = document.querySelector('select#lista')
var valores = []

function Adicionar() {
    if(isNumber(num.value) && !inList(num.value, valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        list.appendChild(item)
        item.text = `Número ${num.value} adicionado.`
    } else{    
        alert('Número inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function Finalizar() {
    if(valores.length == 0){
        alert('Digite um número antes de finalizar')
    } else{
        resul.innerHTML = ''
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var média = 0
        for(var cont in valores){
            soma += valores[cont]
            if (valores[cont] > maior) {
                maior = valores[cont]
            }
            if (valores[cont < menor]){
                menor = valores[cont]
            }
        }
        média = soma / total
        resul.innerHTML += `<p>Temos no total ${total} números inseridos</p>`
        resul.innerHTML += `<p>O maior número digitado é ${maior}</p>`
        resul.innerHTML += `<p>O menor número digitado é ${menor}</p>`
        resul.innerHTML += `<p>A soma dos números é ${soma}</p>`   
        resul.innerHTML += `<p>A média dos números é ${média}</p>`
    }
}

function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}