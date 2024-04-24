var idade= 22
console.log(`Sua idade é de ${idade}`)
if (idade<16) {
    console.log('não vota')
} else if (idade < 18 || idade > 65) {
     console.log('voto opcional')
} else if (idade>= 18){
    console.log('Voto obrigatório')
} 