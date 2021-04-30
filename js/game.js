var height = 0
var wight = 0

function adjustStageSize() {

    height = window.innerHeight
    wight = window.innerWidth
    console.log(height, wight)
}

adjustStageSize()

// function positionRandom() {

    var positionX = Math.floor(Math.random() * height) - 90
    var positionY = Math.floor(Math.random() * wight) - 90

    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY
        
    console.log(positionX, positionY)
    
    // Criar o elemento HTML
    var gnat = document.createElement('img')
    gnat.src = 'img/gnat.png'
    gnat.className = 'gnat1'
    gnat.style.left = positionX + 'px'
    gnat.style.top = positionY + 'px'
    gnat.style.position = 'absolute'
    
    document.body.appendChild(gnat)

// }]

function sizeRandom() {
    let class = Math.random()
}


