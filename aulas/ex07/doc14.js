var n = [2,14,8]
n[3] = 5

n.sort()
n.push(9)

console.log(n);
console.log(`O vetor tem ${n.length} posições`);
console.log(`A primeira posição do vetor é ${n[0]} \n`);

// for(var c = 0; c < n.length; c++){
//     console.log(n[c]);
// }

for(var posição in n){
    console.log(`A posição ${posição} posssui ${n[posição]}`)
}

console.log(`\nO valor 14 está na posição ${n.indexOf(14)}`)

n.push(10)
var p = n.indexOf(10)

if(p == -1){
    console.log('O valor 10 não foi encontrado.');
} else{
    console.log(`O valor 10 está na posição ${p}`)
}