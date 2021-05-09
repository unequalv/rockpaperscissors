function computerplay() {
    var a = Math.floor(Math.random() * 3)
    if (a == 0)
        console.log("Computer Chooses Rock");
    else if (a == 1)
        console.log("Computer Chooses Paper");
    else
        console.log("Computer CHooses Scissors");
    return a;
}

function pp() {
    let pp = prompt("Choose");
    let ppno;

    pp = pp.toLowerCase;
    if (pp == "rock")
        ppno = 0;
    else if (pp == "paper")
        ppno = 1;
    else if (pp == "scissor")
        ppno = 2;
    return ppno;
}

function playround(cp, ppno) {
    if (cp == ppno)
        console.log("Draw")
    else if ((cp == 0 && ppno == 1) || (cp == 1 && ppno == 2) || (cp == 2 && ppno == 0)) {

        console.log("Win")
    }
    else
        console.log("Lose")
}
function game() {
    let i;
    for (i = 0; i < 5; i++) {
        let cp = computerplay();
        let ppno = pp();
        playround(cp, ppno);
    }
}
game();