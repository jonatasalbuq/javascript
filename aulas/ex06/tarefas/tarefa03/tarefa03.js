function Contar(){
    let r = document.querySelector('div#res')
    let inic = document.querySelector('input#txtini')
    let fim = document.querySelector('input#txtfim')
    let pass = document.querySelector('input#txtpas')
    
    if(inic.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
        alert('Digite um número na caixa')
    } else{
        r.innerHTML = 'Contando...<br>'
        let i = Number.parseInt(inic.value)
        let f = Number.parseInt(fim.value)
        let p = Number.parseInt(pass.value)
        if(p <=0 ){
            alert('Número inválido. Considerando PASSO 1')
            p = 1
        }
        if(i < f){
            for(let cont = i; cont <= f; cont += p){
                r.innerHTML += ` 👉 ${cont}`
            }
        } else{
            for(let cont = i; cont >= f; cont -= p){
                r.innerHTML += ` 👉 ${cont}`
            }
        }
    }
}