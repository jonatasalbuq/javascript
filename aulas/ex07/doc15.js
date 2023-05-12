function parImpar(num) {
    if(num % 2 == 0){
        return "O número digitado é PAR! \n"
    } else{
        return "O número digitado é ÍMPAR! \n"
    }
}
// var result = parImpar(14)
// console.log(result)
console.log(parImpar(14))

// --------------------------------------------------------------------------

function Multiplicar(n1=1, n2=1) {
    return n1*n2
}
console.log(`O resultado é ${Multiplicar(5, 5)} \n`)

// --------------------------------------------------------------------------

var res = function (valor) {
    return valor*2
}
console.log(res(10) + '\n')

// --------------------------------------------------------------------------

function Fatorial(n=1) { // TRADICIONAL
    var fator = 1
    for(var c=n; c>1; c--){
        fator *= c 
    }
    return fator
}

function FatorRecur(n=1) { // RECURSIVIDADE
    if (n == 1) {
        return 1
    } else {
        return n * FatorRecur(n-1)
    }
}

console.log(`Fatorial de maneira tradicional ${Fatorial(5)}`)
console.log(`Fatorial de maneira recursiva ${FatorRecur(6)}`)