
var height = 0
var wight = 0
var life = 1
var time = 15

function adjustStageSizeGame() {
	height = window.innerHeight
	wight = window.innerWidth

	console.log(wight, height)
}

adjustStageSizeGame()

var timepiece = setInterval(function() {

    time -= 1

    if(time < 0) {
        clearInterval(timepiece)
        clearInterval(createMosquito)
        window.location.href = 'vitoria.html'
    } else {

        document.getElementById('timepiece').innerHTML = time
    }
}, 1000)


function positionRandom() {
    
    // Removendo o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if(life > 3) {
            window.location.href = '../game-over.html'
        } else {

            document.getElementById('v' + life).src = "../imagens/coracao_vazio.png"

            life++
        }
    }

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
    mosquito.id = 'mosquito'

    mosquito.onclick = function() {
        this.remove()
    }

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

