const nota = 79
let estado = null

if (nota < 60) {
  estado = 'reprovada'
} else if (nota < 80) {
  estado = 'lista'
} else {
  estado = 'aprovada'
}

switch (estado) {
  case 'reprovada' :
    console.log('Você foi reprovada(o)')
    break
  case 'lista' :
    console.log('Você está na nossa lista de espera')
    break
  case 'aprovada' :
    console.log('Parabéns, você foi aprovada(o)')
    break
}
