function Carregar(){
    var agr = new Date()
    var hora = agr.getHours()

    var info = document.querySelector('#info')
    var foto = document.querySelector('#imagem')
    var fundo = document.querySelector('body')

    info.innerText = `Agora são ${hora} hora(s).`

    if(hora >= 0 && hora < 12){
        fundo.style.background = '#ecb563'
        foto.src = 'manhã.png'
    } else if(hora >= 12 && hora < 18){
        fundo.style.background = '#c08630'
        foto.src = 'tarde.jpg'
    } else{
        fundo.style.background = '#383838'
        foto.src = 'noite.jpg'
    }
}