function Verificar() {
    var now = new Date()
    var anoAtual = now.getFullYear()
    var anoNasc = document.querySelector('input#txtano')
    var result = document.querySelector('div#result')
    if (anoNasc.value.length == 0 || Number(anoNasc.value) > anoAtual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var sexo = document.getElementsByName('radsex')
        var idade = anoAtual - Number(anoNasc.value)
        var gen = ''
        var foto = document.createElement('img')
        foto.setAttribute('id', 'imagem')
        if (sexo[0].checked){
            gen = 'Homem'
            if (idade >= 0 && idade < 10){
                foto.setAttribute('src', 'crianca-m.jpg')
            } else if (idade < 21){
                foto.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 50){
                foto.setAttribute('src', 'adulto.jpg')
            } else{
                foto.setAttribute('src', 'idoso.jpg')
            }
        } else{
            gen = 'Mulher'
            if (idade >= 0 && idade < 10){
                foto.setAttribute('src', 'crianca-f.jpg')
            } else if (idade < 21){
                foto.setAttribute('src', 'jovem-f.jpg')
            } else if (idade < 50){
                foto.setAttribute('src', 'adulta.jpg')
            } else{
                foto.setAttribute('src', 'idosa.jpg')
            }
        }
        result.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        result.appendChild(foto)
    }
}