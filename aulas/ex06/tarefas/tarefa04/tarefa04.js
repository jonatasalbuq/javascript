function Calcular() {
    var num = document.querySelector('input#txtnum')
    var selec = document.querySelector('select#tab')
    var cont = 1
    var res
    if(num.value.length == 0){
        alert("Digite um número na caixa")
    } else{
        num = Number(num.value)
        selec.innerHTML = ''
        do{
            res = document.createElement('option')
            selec.appendChild(res)
            res.innerText = `${num} x ${cont} = ${num*cont}`
            cont++
        } while(cont <= 10)
    }
}