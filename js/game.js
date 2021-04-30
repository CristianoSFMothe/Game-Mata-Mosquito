
var height = 0
var wight = 0

function ajustaTamanhoPalcoJogo() {
	height = window.innerHeight
	wight = window.innerWidth

	console.log(wight, height)
}

ajustaTamanhoPalcoJogo()


function posicaoRandomica() {

	var positionX = Math.floor(Math.random() * wight) - 90
	var positionY = Math.floor(Math.random() * height) - 90

	positionX = positionX < 0 ? 0 : positionX
	positionY = positionY < 0 ? 0 : positionY

	console.log(positionX, positionY)

	//criar o elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = sizeRandom() + ' ' + sideRandom()
	mosquito.style.left = positionX + 'px'
	mosquito.style.top = positionY + 'px'
	mosquito.style.position = 'absolute'

	document.body.appendChild(mosquito)
}

function sizeRandom() {
	var classe = Math.floor(Math.random() * 3)
	
	switch(classe) {
		case 0:
			return 'mosquito1'
		
		case 1:
			return 'mosquito2'

		case 2:
			return 'mosquito3'
	}
}

function sideRandom() {
    var classe = Math.floor(Math.random() * 2)
	
	switch(classe) {
		case 0:
			return 'sideA'
		
		case 1:
			return 'sideB'
	}
}

