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
    let ap = pp.toLowerCase();
    let ppno;
    if (ap == "rock") { ppno = 0; }
    if (ap == "paper") { ppno = 1; }
    if (ap == "scissor") { ppno = 2; }

    return ppno;
}

function playround(cp, ppno) {
    if (cp == ppno) {
        console.log("Draw");
        return 0;
    }
    else if ((cp == 0 && ppno == 1) || (cp == 1 && ppno == 2) || (cp == 2 && ppno == 0)) {

        console.log("Win");
        return 1;
    }
    else {

        console.log("Lose");
        return - 1;
    }
}
function game() {
    let i;
    let count = 0;
    for (i = 0; i < 5; i++) {
        let ppno = pp();
        let cp = computerplay();
        switch (playround(cp, ppno)) {
            case 1:
                count++;
        }

    }
    console.log(count);
}
game();