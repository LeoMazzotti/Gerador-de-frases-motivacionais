const frases = [
  'Aprender é muito bom',
  'A persistência sempre ganha do talento',
  'Melhore 1% a cada dia',
  'A vida começa onde sua zona de conforto termina',
  'Confia no processo',
  'Valorize as pequenas vitórias',
  'Faça o bem sem olhar a quem',
  'Faça sempre o seu melhor',
  'Cada um sabe a dor e a delícia de ser o que é',
  'Que teus sonhos sejam maiores do seus medos'
]

let exiba = document.getElementById('exiba')

function ebixirFrase() {
  var sortear = Math.floor(Math.random() * frases.length)
  exiba.innerHTML = frases[sortear]
}
