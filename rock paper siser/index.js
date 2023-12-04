let rock  = "rock";
let scissors  = "scissors";
let paper  = "paper";

let btnRock = document.createElement("button");
let btnPaper = document.createElement("button");
let btnScissors = document.createElement("button");


btnRock.innerHTML= "🪨";
btnPaper.innerHTML ="🧻";
btnScissors.innerHTML = "✂️";

btnRock.className= "your-choice-btn";
btnPaper.className ="your-choice-btn";
btnScissors.className = "your-choice-btn";

let yourChoice =  document.createElement("h2");
let computersChoice = document.createElement("h2");
let yourChoiceSpan = document.createElement("span");
let computerChoiceSpan = document.createElement("span");
let winner = document.createElement("h2");
let winnerSpan = document.createElement("span")

yourChoice.innerText = "Your choice: "
computersChoice.innerText= "computers Choice:"

yourChoice.className = "result"
computersChoice.className = "result"
winner.className = "result"

document.querySelector(".button-div").append(btnRock, btnPaper, btnScissors)
document.querySelector(".result-div").append(yourChoice, computersChoice, winner)
yourChoice.append(yourChoiceSpan)
computersChoice.append(computerChoiceSpan)
winner.append(winnerSpan)

btnRock.onclick = ()=> {
    yourChoiceSpan.innerHTML = "🪨" 
    computersTurn()
    setTimeout(()=>{
        showWinner()
    }, 200)
}

btnPaper.onclick = ()=> {
    yourChoiceSpan.innerText = "🧻"
     computersTurn()
     setTimeout(()=>{
        showWinner()
    }, 200)
}

btnScissors.onclick = ()=> {
    yourChoiceSpan.innerText = "✂️"
    computersTurn()
    setTimeout(()=>{
        showWinner()
    }, 200)
}

function computersTurn(){
    let computerLogic = Math.floor(Math.random() * 3)

    if(computerLogic === 0) {
        return computerChoiceSpan.innerText="🪨"
    } else if (computerLogic === 1) {
        return computerChoiceSpan.innerText= "🧻"
    } else{
        return computerChoiceSpan.innerText= "✂️"
    }
}

function showWinner(){
    if(computerChoiceSpan.innerText == yourChoiceSpan.innerText){
      winnerSpan.innerText = "its a draw";
    }else if(computerChoiceSpan.innerHTML == "🪨" && yourChoiceSpan.innerHTML == "🧻"){
        winnerSpan.innerText = "you win";
    }
    else if(computerChoiceSpan.innerHTML == "🧻" && yourChoiceSpan.innerHTML == "🪨"){
        winnerSpan.innerText = "computer win";
    } else if(computerChoiceSpan.innerHTML == "✂️" && yourChoiceSpan.innerHTML == "🧻"){
        winnerSpan.innerText = "computer win";
    }
    else if(computerChoiceSpan.innerHTML == "🧻" && yourChoiceSpan.innerHTML == "✂️"){
        winnerSpan.innerText = "you win";
    }else if(computerChoiceSpan.innerHTML == "🪨" && yourChoiceSpan.innerHTML == "✂️"){
        winnerSpan.innerText = "computer win";
    }
    else if(computerChoiceSpan.innerHTML == "✂️" && yourChoiceSpan.innerHTML == "🪨"){
        winnerSpan.innerText = "you win";
    }
}
