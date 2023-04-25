var diceNumber = Math.floor((Math.random()*6)+1);   // Player 1
var diceNumber2 = Math.floor((Math.random()*6)+1);  // Player 2

if (diceNumber===1) {
    document.querySelector(".c1").classList.add("transparent");
    document.querySelector(".c2").classList.add("transparent");
    document.querySelector(".c3").classList.add("transparent");
    document.querySelector(".c4").classList.add("transparent");
    document.querySelector(".c6").classList.add("transparent");
    document.querySelector(".c7").classList.add("transparent");
    document.querySelector(".c8").classList.add("transparent");
    document.querySelector(".c9").classList.add("transparent");    
}

if (diceNumber2===1) {
    document.querySelector(".c01").classList.add("transparent");
    document.querySelector(".c02").classList.add("transparent");
    document.querySelector(".c03").classList.add("transparent");
    document.querySelector(".c04").classList.add("transparent");
    document.querySelector(".c06").classList.add("transparent");
    document.querySelector(".c07").classList.add("transparent");
    document.querySelector(".c08").classList.add("transparent");
    document.querySelector(".c09").classList.add("transparent");    
}

if (diceNumber===2) {
    document.querySelector(".c1").classList.add("transparent");
    document.querySelector(".c2").classList.add("transparent");
    document.querySelector(".c4").classList.add("transparent");
    document.querySelector(".c5").classList.add("transparent");
    document.querySelector(".c6").classList.add("transparent");
    document.querySelector(".c8").classList.add("transparent");
    document.querySelector(".c9").classList.add("transparent");    
}

if (diceNumber2===2) {
    document.querySelector(".c01").classList.add("transparent");
    document.querySelector(".c02").classList.add("transparent");
    document.querySelector(".c04").classList.add("transparent");
    document.querySelector(".c05").classList.add("transparent");
    document.querySelector(".c06").classList.add("transparent");
    document.querySelector(".c08").classList.add("transparent");
    document.querySelector(".c09").classList.add("transparent");    
}


if (diceNumber===3) {
    document.querySelector(".c1").classList.add("transparent");
    document.querySelector(".c2").classList.add("transparent");
    document.querySelector(".c4").classList.add("transparent");
    document.querySelector(".c6").classList.add("transparent");
    document.querySelector(".c8").classList.add("transparent");
    document.querySelector(".c9").classList.add("transparent");    
}

if (diceNumber2===3) {
    document.querySelector(".c01").classList.add("transparent");
    document.querySelector(".c02").classList.add("transparent");
    document.querySelector(".c04").classList.add("transparent");
    document.querySelector(".c06").classList.add("transparent");
    document.querySelector(".c08").classList.add("transparent");
    document.querySelector(".c09").classList.add("transparent");    
}


if (diceNumber===4) {
    document.querySelector(".c2").classList.add("transparent");
    document.querySelector(".c4").classList.add("transparent");
    document.querySelector(".c5").classList.add("transparent");
    document.querySelector(".c6").classList.add("transparent");
    document.querySelector(".c8").classList.add("transparent");    
}

if (diceNumber2===4) {
    document.querySelector(".c02").classList.add("transparent");
    document.querySelector(".c04").classList.add("transparent");
    document.querySelector(".c05").classList.add("transparent");
    document.querySelector(".c06").classList.add("transparent");
    document.querySelector(".c08").classList.add("transparent");    
}

if (diceNumber===5) {
    document.querySelector(".c2").classList.add("transparent");
    document.querySelector(".c4").classList.add("transparent");
    document.querySelector(".c6").classList.add("transparent");
    document.querySelector(".c8").classList.add("transparent");    
}

if (diceNumber2===5) {
    document.querySelector(".c02").classList.add("transparent");
    document.querySelector(".c04").classList.add("transparent");
    document.querySelector(".c06").classList.add("transparent");
    document.querySelector(".c08").classList.add("transparent");    
}

if (diceNumber===6) {
    document.querySelector(".c4").classList.add("transparent");
    document.querySelector(".c5").classList.add("transparent");
    document.querySelector(".c6").classList.add("transparent");
}

if (diceNumber2===6) {
    document.querySelector(".c04").classList.add("transparent");
    document.querySelector(".c05").classList.add("transparent");
    document.querySelector(".c06").classList.add("transparent");
}


if (diceNumber > diceNumber2) {
    document.querySelector(".flag1").classList.add("appear");
    document.querySelector("h1").innerHTML = "Player 1 wins!"
} else if (diceNumber < diceNumber2) {
    document.querySelector(".flag2").classList.add("appear");
    document.querySelector("h1").innerHTML = "Player 2 wins!"
} else {
    document.querySelector(".flag1").classList.add("appear");
    document.querySelector(".flag2").classList.add("appear");
}