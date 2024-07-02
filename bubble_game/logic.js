function makeBubble() {
    var clutter = ""

    for (var i = 1; i <= 154; i++) {
        var randomValue = Math.floor(Math.random() * 50)
        clutter += `<div class="bubble">${randomValue}</div>`
    }

    document.querySelector("#pbtm").innerHTML = clutter
}

var timer=60
function runTimer(){
    var timerInterval = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timer").textContent = timer;
        }else{
            clearInterval(timerInterval)
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER</h1> <br /> <h2>Your Score is ${score}</h2>`
        }
    }, 1000)
}

var randomVal=0
function getNewHit(){
   randomVal = Math.floor(Math.random()*10)

   document.querySelector("#hit").textContent = randomVal
}

var score=0
function increaseScore(){
    score += 10;
    document.querySelector("#score").textContent = score;
}
function decreaseScore(){
    score -= 10;
    if(score == -50){
        timer = 0;
        document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER</h1> <br/> <h2>Your Score is ${score}</h2>`
    }
    document.querySelector("#score").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function(details){
    var clickedNum = Number(details.target.textContent)
    if(clickedNum == randomVal){
        increaseScore()
        makeBubble()
        getNewHit()
    }
    else{
        decreaseScore()
        makeBubble()
        getNewHit()
    }
})

runTimer()
makeBubble()
getNewHit()