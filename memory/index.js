const bord = document.querySelector(".bord");
const bordSection = document.querySelector(".game-bord");
const btnGame1 = document.querySelector(".game1");
const btnGame2 = document.querySelector(".game2");
const btnGame3 = document.querySelector(".game3");

const darkmode = document.querySelector(".darkmode-btn");


let emojis2 = ["☃️", "☃️", "😄", "😄"];
let emojis12 = ["😄", "😄", "🥰", "🥰", "😅", "😅", "❤️", "❤️", "🌜", "🌜", "🫨", "🫨", "☘️","☘️", "🌞", "🌞", "☃️", "☃️", "🦖", "🦖", "🍃", "🍃", "🐘", "🐘"];
let emojis16 = ["😄", "😄", "🥰", "🥰", "😅", "😅", "❤️", "❤️", "🫨", "🫨", "☘️","☘️", "🌞", "🌞", "☃️", "☃️", "🦖", "🦖", "🐘", "🐘", "👍", "👍", "🍎", "🍎","🐈", "🐈", "🦋", "🦋", "🍎", "🍎", "🫡", "🫡"];

let emojis20 = ["😄", "😄", "🥰", "🥰", "😅", "😅", "❤️", "❤️", "🌜", "🌜", "🫨", "🫨", "☘️","☘️", "🌞", "🌞", "☃️", "☃️", "🦖", "🦖", "🍃", "🍃", "🐘", "🐘", "👍", "👍", "🍎", "🍎","🐈‍⬛", "🐈‍⬛", "🐈", "🐈", "🦋", "🦋", "🍎", "🍎", "🌵", "🌵", "🫡", "🫡"];

//****************** */ handel click events ********************
darkmode.onclick = (e) => {
    document.body.classList.toggle("darkmode")
    console.log()
}
btnGame1.onclick = function () {
    bord.innerHTML = "";
    playMemory(emojis12)
}
btnGame2.onclick = function () {
    bord.innerHTML = "";
    playMemory(emojis16)
}

btnGame3.onclick = function () {
    bord.innerHTML = "";
    playMemory(emojis20)
}

document.querySelector(".resetbtn").onclick = () => {
    const elements = document.querySelectorAll('.match');
    elements.forEach((element) => {
        element.classList.remove('match');
    });
}


playMemory(emojis12)

let timesPlayed = document.createElement("h2");
bordSection.appendChild(timesPlayed)
timesPlayed.innerHTML = "Lets play!"
timesPlayed.className = "times-played"

function playMemory(cardDeck) {
    //sorteringen i emoji arrayen shuflas runt med en math.random(vet ej hur detta funkar rent matematiskt)
    var shuffleEmojis = cardDeck.sort(() => (Math.random() > .5) ? 2 : -1)
    
    //en loop som loopar igenom emojin arrayens längd och tar bort det 2 första föremålen(detta baseras på i första värde)
    for (let i = 0; i < cardDeck.length; i++) {
        let card = document.createElement("div");
        bord.append(card);
        card.innerHTML = shuffleEmojis[i]
        card.className = "card"
        let timesMemoryPlayed = 0;
        //klicka på ett kort och openCard classen läggs på kortet(vänderkortet) 
        card.onclick = function () {
            this.classList.add('openCard');
            //en funktion som efter 5 millesek kollar om följande if satser stämmer. 
            setTimeout(() => {
                //om alla vald med classen openCard är mer än 1 (index 1 dvs 0 och 1 vilket blir 2 kort) kollar följande if satser.
                if (document.querySelectorAll(".openCard").length > 1) {

                    // console.log(document.querySelectorAll(".openCard").length )
                    if (document.querySelectorAll(".openCard")[0].innerHTML == document.querySelectorAll(".openCard")[1].innerHTML) {
                        if (undefined) {
                            console.log("error")
                        }
                        document.querySelectorAll(".openCard")[1].classList.add("match")
                        document.querySelectorAll(".openCard")[0].classList.add("match")

                        document.querySelectorAll(".openCard")[1].classList.remove("openCard")
                        document.querySelectorAll(".openCard")[0].classList.remove("openCard")
                    } if (document.querySelectorAll(".match").length == cardDeck.length) {
                        alert("you win the game")
                        timesMemoryPlayed++
                        //if timesplayed is more then 0 wite out the times you playd (this resets every time you change deck of cards)
                        if (timesMemoryPlayed > 0) {
                            timesPlayed.innerHTML = "you won the game: " + timesMemoryPlayed
                        }
                     
                    } else {
                        document.querySelectorAll(".openCard")[1].classList.remove("openCard")
                        document.querySelectorAll(".openCard")[0].classList.remove("openCard")
                        console.log("else")
                    }
                }
            }, 500)
        }
    }
}

