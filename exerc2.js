var agora = new Date()
var hora = agora.getHours()
if (hora == 6 || hora <= 11) {
    console.log("Bom diaaa")
} else if (hora == 12 || hora <= 17){
    console.log('Boa tardeee')
} else{
    console.log('boa noiteee')
}