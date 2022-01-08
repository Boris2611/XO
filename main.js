// 3 == Waiting... , 2 == None, 1 == X, 0 == O

var a1 = 2;
var b1 = 2;
var c1 = 2;

var a2 = 2;
var b2 = 1;
var c2 = 2;

var a3 = 2;
var b3 = 2;
var c3 = 2;

var xScore = 0;
var oScore = 0;

var timer;

// row1
function clicka1() {
    if (a1 == 2) {
        document.getElementById("a1t").innerHTML = "O";
        a1 = 0;
        logic()
    }
}
function clickb1() {
    if (b1 == 2) {
        document.getElementById("b1t").innerHTML = "O";
        b1 = 0;
        logic()
    }
}
function clickc1() {
    if (c1 == 2) {
        document.getElementById("c1t").innerHTML = "O";
        c1 = 0;
        logic()
    }
}


// row2
function clicka2() {
    if (a2 == 2) {
        document.getElementById("a2t").innerHTML = "O";
        a2 = 0;
        logic()
    } 
}
function clickb2() {
    if (b2 == 2) {
        document.getElementById("b2t").innerHTML = "O";
        b2 = 0;
        logic()
    } 
}
function clickc2() {
    if (c2 == 2) {
        document.getElementById("c2t").innerHTML = "O";
        c2 = 0;
        logic()
    } 
}


// row3
function clicka3() {
    if (a3 == 2) {
        document.getElementById("a3t").innerHTML = "O";
        a3 = 0;
        logic()
    } 
}
function clickb3() {
    if (b3 == 2) {
        document.getElementById("b3t").innerHTML = "O";
        b3 = 0;
        logic()
    } 
}
function clickc3() {
    if (c3 == 2) {
        document.getElementById("c3t").innerHTML = "O";
        c3 = 0;
        logic()
    } 
}




function logic() {

    //Zavrsnica Vodoravno
    if (a1 == 1 && b1 == 1 && c1 == 2) {
        document.getElementById("c1t").innerHTML = "X";
        c1 = 1;
    }
    else if (b1 == 1 && c1 == 1 && a1 == 2) {
        document.getElementById("a1t").innerHTML = "X";
        a1 = 1;
    }
    else if (a3 == 1 && b3 == 1 && c3 == 2) {
        document.getElementById("c3t").innerHTML = "X";
        c3 = 1;
    }
    else if (b3 == 1 && c3 == 1 && a3 == 2) {
        document.getElementById("a3t").innerHTML = "X";
        a3 = 1;
    }
    else if (a1 == 1 && c1 == 1 && b1 == 2) {
        document.getElementById("b1t").innerHTML = "X";
        b1 = 1;
    }
    else if (a3 == 1 && c3 == 1 && b3 == 2) {
        document.getElementById("b3t").innerHTML = "X";
        b3 = 1;
    }


    //Zavrsnica Uspravno
    else if (a1 == 1 && a2 == 1 && a3 == 2) {
        document.getElementById("a3t").innerHTML = "X";
        a3 = 1;
    }
    else if (a2 == 1 && a3 == 1 && a1 == 2) {
        document.getElementById("a1t").innerHTML = "X";
        a1 = 1;
    }
    else if (a1 == 1 && a3 == 1 && a2 == 2) {
        document.getElementById("a2t").innerHTML = "X";
        a2 = 1;
    }
    else if (c1 == 1 && c2 == 1 && c3 == 2) {
        document.getElementById("c3t").innerHTML = "X";
        c3 = 1;
    }
    else if (c2 == 1 && c3 == 1 && c1 == 2) {
        document.getElementById("c1t").innerHTML = "X";
        c1 = 1;
    }
    else if (c1 == 1 && c3 == 1 && c2 == 2) {
        document.getElementById("c2t").innerHTML = "X";
        c2 = 1;
    }

    // Zavesnica Dijagonalno
    else if (b2 == 1 && a1 == 1 && c3 == 2) {
        document.getElementById("c3t").innerHTML = "X";
        c3 = 1;
    }
    else if (b2 == 1 && c3 == 1 && a1 == 2) {
        document.getElementById("a1t").innerHTML = "X";
        a1 = 1;
    }

    else if (a3 == 1 && b2 == 1 && c1 == 2) {
        document.getElementById("c1t").innerHTML = "X";
        c1 = 1;
    }
    else if (c1 == 1 && b2 == 1 && a3 == 2) {
        document.getElementById("a3t").innerHTML = "X";
        a3 = 1;
    }



    //Odbrana Vodoravno
    else if (a1 == 0 && b1 == 0 && c1 == 2) {
        document.getElementById("c1t").innerHTML = "X";
        c1 = 1;
    }
    else if (b1 == 0 && c1 == 0 && a1 == 2) {
        document.getElementById("a1t").innerHTML = "X";
        a1 = 1;
    }
    else if (a3 == 0 && b3 == 0 && c3 == 2) {
        document.getElementById("c3t").innerHTML = "X";
        c3 = 1;
    }
    else if (b3 == 0 && c3 == 0 && a3 == 2) {
        document.getElementById("a3t").innerHTML = "X";
        a3 = 1;
    }
    else if (a1 == 0 && c1 == 0 && b1 == 2) {
        document.getElementById("b1t").innerHTML = "X";
        b1 = 1;
    }
    else if (a3 == 0 && c3 == 0 && b3 == 2) {
        document.getElementById("b3t").innerHTML = "X";
        b3 = 1;
    }


    //Odbrana Uspravno
    else if (a1 == 0 && a2 == 0 && a3 == 2) {
        document.getElementById("a3t").innerHTML = "X";
        a3 = 1;
    }
    else if (a2 == 0 && a3 == 0 && a1 == 2) {
        document.getElementById("a1t").innerHTML = "X";
        a1 = 1;
    }
    else if (a1 == 0 && a3 == 0 && a2 == 2) {
        document.getElementById("a2t").innerHTML = "X";
        a2 = 1;
    }
    else if (c1 == 0 && c2 == 0 && c3 == 2) {
        document.getElementById("c3t").innerHTML = "X";
        c3 = 1;
    }
    else if (c2 == 0 && c3 == 0 && c1 == 2) {
        document.getElementById("c1t").innerHTML = "X";
        c1 = 1;
    }
    else if (c1 == 0 && c3 == 0 && c2 == 2) {
        document.getElementById("c2t").innerHTML = "X";
        c2 = 1;
    }

    

    //Pocetni Potezi

    else if (a1 == 0 && c3 == 2) {
        document.getElementById("c3t").innerHTML = "X";
        c3 = 1;
    }
    else if (b1 == 0 && c3 == 2) {
        document.getElementById("c3t").innerHTML = "X";
        c3 = 1;
    }
    else if (c1 == 0 && c3 == 2) {
        document.getElementById("c3t").innerHTML = "X";
        c3 = 1;
    }

    else if (a2 == 0 && c3 == 2) {
        document.getElementById("c3t").innerHTML = "X";
        c3 = 1;
    }
    else if (b2 == 0 && c3 == 2) {
        document.getElementById("c3t").innerHTML = "X";
        c3 = 1;
    }
    else if (c2 == 0 && c3 == 2) {
        document.getElementById("c3t").innerHTML = "X";
        c3 = 1;
    }

    else if (a3 == 0 && c3 == 2) {
        document.getElementById("c3t").innerHTML = "X";
        c3 = 1;
    }
    else if (b3 == 0 && c3 == 2) {
        document.getElementById("c3t").innerHTML = "X";
        c3 = 1;
    }
    else if (c3 == 0 && c1 == 2) {
        document.getElementById("a3t").innerHTML = "X";
        a3 = 1;
    }

    // Random Potezi Ako Nema Logicnih

    else if (a1 == 2) {
        document.getElementById("a1t").innerHTML = "X";
        a1 = 1;
    }
    else if (a2 == 2) {
        document.getElementById("a2t").innerHTML = "X";
        a2 = 1;
    }
    else if (a3 == 2) {
        document.getElementById("a3t").innerHTML = "X";
        a3 = 1;
    }

    else if (b1 == 2) {
        document.getElementById("b1t").innerHTML = "X";
        b1 = 1;
    }
    else if (b2 == 2) {
        document.getElementById("b2t").innerHTML = "X";
        b2 = 1;
    }
    else if (b3 == 2) {
        document.getElementById("b3t").innerHTML = "X";
        b3 = 1;
    }

    else if (c1 == 2) {
        document.getElementById("c1t").innerHTML = "X";
        c1 = 1;
    }
    else if (c2 == 2) {
        document.getElementById("c2t").innerHTML = "X";
        c2 = 1;
    }
    else if (c3 == 2) {
        document.getElementById("c3t").innerHTML = "X";
        c3 = 1;
    }





    checkResult();
}




function checkResult() {
    if (a1 == 1 && b1 == 1 && c1 == 1) {
        playAgain();
        xScore += 1;
        document.getElementById("a1t").style.color = "red";
        document.getElementById("b1t").style.color = "red";
        document.getElementById("c1t").style.color = "red";
        document.getElementById("score").innerHTML = "Score: " + xScore + ":" + oScore;
    }

    else if (a2 == 1 && b2 == 1 && c2 == 1) {
        playAgain();
        xScore += 1;
        document.getElementById("a2t").style.color = "red";
        document.getElementById("b2t").style.color = "red";
        document.getElementById("c2t").style.color = "red";
        document.getElementById("score").innerHTML = "Score: " + xScore + ":" + oScore;
    }

    else if (a3 == 1 && b3 == 1 && c3 == 1) {
        playAgain();
        xScore += 1;
        document.getElementById("a3t").style.color = "red";
        document.getElementById("b3t").style.color = "red";
        document.getElementById("c3t").style.color = "red";
        document.getElementById("score").innerHTML = "Score: " + xScore + ":" + oScore;
    }

    else if (a1 == 1 && a2 == 1 && a3 == 1) {
        playAgain();
        xScore += 1;
        document.getElementById("a1t").style.color = "red";
        document.getElementById("a2t").style.color = "red";
        document.getElementById("a3t").style.color = "red";
        document.getElementById("score").innerHTML = "Score: " + xScore + ":" + oScore;
    }

    else if (b1 == 1 && b2 == 1 && b3 == 1) {
        playAgain();
        xScore += 1;
        document.getElementById("b1t").style.color = "red";
        document.getElementById("b2t").style.color = "red";
        document.getElementById("b3t").style.color = "red";
        document.getElementById("score").innerHTML = "Score: " + xScore + ":" + oScore;
    }

    else if (c1 == 1 && c2 == 1 && c3 == 1) {
        playAgain();
        xScore += 1;
        document.getElementById("c1t").style.color = "red";
        document.getElementById("c2t").style.color = "red";
        document.getElementById("c3t").style.color = "red";
        document.getElementById("score").innerHTML = "Score: " + xScore + ":" + oScore;
    }

    else if (a1 == 1 && b2 == 1 && c3 == 1) {
        playAgain();
        xScore += 1;
        document.getElementById("a1t").style.color = "red";
        document.getElementById("b2t").style.color = "red";
        document.getElementById("c3t").style.color = "red";
        document.getElementById("score").innerHTML = "Score: " + xScore + ":" + oScore;
    }

    else if (a3 == 1 && b2 == 1 && c1 == 1) {
        playAgain();
        xScore += 1;
        document.getElementById("a3t").style.color = "red";
        document.getElementById("b2t").style.color = "red";
        document.getElementById("c1t").style.color = "red";
        document.getElementById("score").innerHTML = "Score: " + xScore + ":" + oScore;
    }

   // O can't win so yeah xD

    else if (a1 != 2 && a2 != 2 && a3 != 2 && b1 != 2 && b2 != 2 && b3 != 2 && c1 != 2 && c2 != 2 && c3 != 2) {
        playAgain();
        document.getElementById("score").innerHTML = "Score: " + xScore + ":" + oScore;
    }
    
}



function playAgain() {

    clearTimeout(timer);

    timer = setTimeout(wait, 2000);

    a1 = 3;
    a2 = 3;
    a3 = 3;

    b1 = 3;
    b2 = 3;
    b3 = 3;

    c1 = 3;
    c2 = 3;
    c3 = 3;

}

function wait() {

    document.getElementById("a1t").innerHTML = '';
    document.getElementById("a2t").innerHTML = '';
    document.getElementById("a3t").innerHTML = '';

    document.getElementById("b1t").innerHTML = '';
    document.getElementById("b2t").innerHTML = "X";
    document.getElementById("b3t").innerHTML = '';

    document.getElementById("c1t").innerHTML = '';
    document.getElementById("c2t").innerHTML = '';
    document.getElementById("c3t").innerHTML = '';

    document.getElementById("a1t").style.color = 'white';
    document.getElementById("a2t").style.color = 'white';
    document.getElementById("a3t").style.color = 'white';

    document.getElementById("b1t").style.color = 'white';
    document.getElementById("b2t").style.color = 'white';
    document.getElementById("b3t").style.color = 'white';

    document.getElementById("c1t").style.color = 'white';
    document.getElementById("c2t").style.color = 'white';
    document.getElementById("c3t").style.color = 'white';

    a1 = 2;
    a2 = 2;
    a3 = 2;

    b1 = 2;
    b2 = 1;
    b3 = 2;

    c1 = 2;
    c2 = 2;
    c3 = 2;


}