var agr = new Date()
var hora = agr.getHours()
var min = agr.getMinutes()
var diaSemana = agr.getDay()
var dia = agr.getDate()
var mês = agr.getUTCMonth( )
var ano = agr.getFullYear()

console.log(`Agora são ${hora}:${min}.`);

switch (diaSemana) {
    case 0:
        console.log('Hoje é Domingo');
        break
    case 1:
        console.log('Hoje é Segunda-feira');
        break
    case 2:
        console.log('Hoje é Terça-feira');
        break
    case 3:
        console.log('Hoje é Quarta-feira');
        break 
    case 4:
        console.log('Hoje é Quinta-feira');
        break
    case 5:
        console.log('Hoje é Sexta-feira');
        break
    case 6:
        console.log('Hoje é Sábado');
        break
    default:
        console.log('Dia inexistente');
        break
}

if(hora < 6 || hora == 24){
    console.log('Boa madrugada!');
} else if(hora < 12){
    console.log('Bom dia!');
} else if(hora < 18){
    console.log('Boa tarde!');
} else{
    console.log('Boa noite!');
}