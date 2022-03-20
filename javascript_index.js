var carta1 = {
  nome:"Yamato",                                  
  imagem:"http://pm1.narvii.com/6235/18a5bbbc4ac6bd638a45f54392c4505cb0e530cd_00.jpg",
  atributo:{
    ataque:60,
    defesa:75,
    chackra:48,
  }
}

var carta2 = {
  nome:"Nagato", 
  imagem:"http://pm1.narvii.com/6366/77c5a3f9d7e6b3a90ed3373ab471861736d6715a_00.jpg",
  atributo:{
    ataque:57,
    defesa:10,
    chackra:100
  }
}

var carta3 = {
  nome:"Madara",
  imagem:"https://sm.ign.com/ign_br/screenshot/default/madara-uchiha_yu1j.jpg",
  atributo:{
    ataque:100,
    defesa:100,
    chackra:100
  }
}

var cartas = [carta1, carta2, carta3]
var cartaMaquina
var cartaJogador

function sortearCarta() {
  var i = parseInt(Math.random() * 3)
  cartaMaquina = cartas[i]
  
  var ij = parseInt(Math.random() * 3)
  while(cartaMaquina == cartaJogador) {
   ij = parseInt(Math.random() * 3)
  }
  cartaJogador = cartas[ij]

  document.getElementById("btnSortear").disabled = true
  document.getElementById("btnJogar").disabled = false
  
  exibirCartaJogador()
}


function puxarAtributo() {
  var radioSelec = document.getElementsByName("atributo")
  
  for(var i= 0;i < radioSelec.length; i++) {
    if(radioSelec[i].checked === true) {
      return radioSelec[i].value
    }
    
  }
  
}

function jogar() {
  var atributoSelecionado = puxarAtributo()
  var mostrar = document.getElementById("resultado")
  var valorJogador = cartaJogador.atributo[atributoSelecionado]
  var valorMaquina= cartaMaquina.atributo[atributoSelecionado]
  var divResultado = document.getElementById("resultado")
    
  if(valorJogador > valorMaquina) {
    divResultados = "<p class='resultado-final'>Parabéns,você venceu!</p>"
  } else if (valorMaquina > valorJogador) {
    divResultados = "<p class='resultado-final'>Você perdeu!</p>"
  } else {
    divResultados = "<p class='resultado-final'>Deu empate</p>"
  }
  
  divResultado.innerHTML = divResultados
  console.log(cartaMaquina.atributo[atributoSelecionado])
  document.getElementById("btnJogar").disabled = true
  
  exibirCartaMaquina()
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador")
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
  
  var tagExbida = "<div id='opcoes' class='carta-status'>"
  
    var exoptxt = ""
  for(var atributo in cartaJogador.atributo) {
    exoptxt += "<input type='radio' name='atributo' value='" + atributo + "'>"+ atributo + " " + cartaJogador.atributo[atributo] + "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  
  divCartaJogador.innerHTML = moldura + nome + tagExbida + exoptxt + '</div>'
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina")
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
  
  var tagExbida = "<div id='opcoes' class='carta-status'>"
  
    var exoptxt = ""
  for(var atributo in cartaMaquina.atributo) {
    exoptxt += "<p type='text' name='atributo' value='" + atributo + "'>"+ atributo + " " + cartaMaquina.atributo[atributo] + "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  
  divCartaMaquina.innerHTML = moldura + nome + tagExbida + exoptxt + '</div>'
  
}