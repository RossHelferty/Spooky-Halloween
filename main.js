let name = prompt("What's your name?");

function startGame() {
    alert("Welcome, " + name+ " to the Haunted All Saints High School!");
    alert("From a 'trusted' source, you've learned that if you find all of the spooky items hidden in the school, then a spooky event will occur!");
    let location = prompt("Where will you go? If you want to visit the library, type 'library'. You can also check the 'basement', 'autoshop', or 'leave'.");
    if (location.toLowerCase() == "library") {
        library();
    } else if (location.toLowerCase() == "basement") {
        basement();
    } else if (location.toLowerCase() == "autoshop") {
        autoshop();
    } else if (location.toLowerCase() == "leave") {
        alert("You leave the school. Like a coward.");
        if (confirm("try again?")) {
            startGame()
        }
    } else{
        alert("Well, since no one understands what you've said, how about you try again?");
        startGame();
    }
}

/* PATH FUNCTIONS UNDERNEATH */

// library function talks of scenarios taking place in the library
function library() {
    alert("You enter the library, to your right is a large window, and to your left is a room labelled 'Jamieson'");
    let response = prompt("Which way do you go?\nLeft\nRight");
    if (response.toLowerCase() = "right") {
        alert("as you walk towards the window, you see a large hole in the atrium floor") // please forgive me optimization gods
        response = prompt("What do you do?\nGo Back\nInvestigate Further")
        if (response.toLowerCase() == "go back") {
            library();
        } else if (response.toLowerCase().includes("investigate")) {
            alert("You move closer to investigate, but you fall through the window into the sinkhole that errupted there literally five minutes ago.");
            outDie();
        }
        } else if (response.toLowerCase() = "left") {
            alert("You enter 'Jamieson's room', and find the spooky 'Mr. Jamieson' (WoOoOoOoO)");
            alert("That's all, thanks for playing. (made in ~65 minutes)")
        }
}

// basement scenarios happen function basement
function basement() {
    
    
}

// autoshop lets you chill in the autoshop
function autoshop() {
    
    
}


/* TEEE HEEEE OUTCOMES UNDERNEATH */


    
}
function outDie(){
    alert("You died. You should probably reload if you want to try again " + name);
}

function outNotEnough(){
    alert("Since you didn't have enough spooky items, the spooky event didn't occur. Your sadness leaves behind a reminder to never do half the work needed.");
}

function outWin(){
    alert("YAY!!! You got the things! The spooky ghouls congratulate you on your ability to find things and you win the ability to leave mostly unscathed.");
}


startGame();