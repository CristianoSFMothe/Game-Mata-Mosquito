var height = 0
var wight = 0

function adjustStageSize() {

    height = window.innerHeight
    wight = window.innerWidth
    console.log(height, wight)
}

adjustStageSize()

var positionX = Math.floor(Math.random() * height)
var positionY = Math.floor(Math.random() * wight)

console.log(positionX, positionY)


