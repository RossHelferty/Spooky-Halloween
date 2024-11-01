let score = 0;
let name = prompt("What's your name?");

function startGame() {
    alert("Welcome  to the Haunted All Saints High School, " + name + "!");
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
    alert("You stand in the doorway of the library, to your right is a large window, and to your left is a room labelled 'Jamieson'");
    let response = prompt("Which way do you go?\n'Left'\n'Right'");
    if (response.toLowerCase() == "right") {
        alert("As you walk towards the window, you see a large hole in the atrium floor.") // please forgive me optimization gods
        response = prompt("What do you do?\n'Go Back'\n'Investigate' Further")
        if (response.toLowerCase() == "go back") {
            library();
        } else if (response.toLowerCase().includes("investigate")) {
            alert("You move closer to investigate, but you fall through the window into the sinkhole that errupted there literally five minutes ago.");
            basement("f");
            alert("looking around you, you see a long corridor that looks to be slowly narrowing.")
        }
    } else if (response.toLowerCase() == "left") {
        alert("You enter 'Jamieson's room', and find the spooky 'Mr. Jamieson' (WoOoOoOoO)");
        alert("+1 Jamieson")
        score++;
        let location = prompt("So where will you go now? You've got the 'basement', the 'autoshop' or you can 'leave'.")
        if (location.toLowerCase() == "basement") {
            basement();
        } else if (location.toLowerCase() == "autoshop") {
            autoshop();
        } else if (location.toLowerCase() == "leave") {
            leaving();
        }
    }
}
// basement scenarios happen function basement
function basement(option) {
    if (option == null) {
        alert("You stumble into the basement, almost falling into a new random hole that just seemed to be there.");
    }
    let response = prompt("As you walk in almost complete silence and darkness, you find yourself in front of a set of two doors. One of them claims to kill you, while the other has no signage. \nWhich one will you go through? You can enter the 'death' door, the 'not death' door, or you can 'leave'.");
    if (response.toLowerCase() == "death"){
        alert("Doors don't lie, doofus.");
        outDie();
    } else if (response.toLowerCase() == "not death"){
        score++;
        alert("Congratulations! You didn't die because you're smart!!");
        alert("You find a small skeleton of what is assumedly a child, and take the key out of the child's hand.");
        alert("+1 key");
        let location = prompt("So where will you go now? You've got the 'library', the 'autoshop' or you can 'leave'.")
        if (location.toLowerCase() == "library") {
            library()
        } else if (location.toLowerCase() == "autoshop") {
            autoshop();
        } else if (location.toLowerCase() == "leave") {
            leaving();
        }
    } else if (response.toLowerCase() == "leave"){
        alert("You left the basement, too frightened of what may be beyond either of the doors.");
        leaving();
    }
    
}

// autoshop lets you chill in the autoshop
function autoshop() {
    
    alert("You enter the auto shop.\nYou find yourself looking at a.. very spooky car.")
    let response = prompt("On your right is the machine shop, and straight ahead of you is the car. What do you do?\nGo 'right'\nGo 'straight'");
    if (response.toLowerCase().includes("right")) {
        alert("You enter the machineshop & find a locked box. Lucky!")
        alert("+1 Box")
        let location = prompt("So where will you go now? You've got the 'library', the 'basement' or you can 'leave'.")
        if (location.toLowerCase() == "library") {
            library();
        } else if (location.toLowerCase() == "basement") {
            basement();
        } else if (location.toLowerCase() == "leave") {
            leaving();
        }
    } else if (response.toLowerCase().includes("straight") || response.toLowerCase().includes("forward")) {
        alert("You are standing under a two post lift, however, you dont have the proper safety training, and the lift falls on you.");
        outDie();
    }

}

/* TEEE HEEEE OUTCOMES UNDERNEATH */
    
function leaving(){
    if (score < 3){
        outNotEnough();
    } else if (score >= 3) {
        outWin();
    }
}

function outDie(){
    alert("You died. You should probably get better at the game if you want to try again. ");
    if (confirm("try again?")) {
        startGame();
    }
}

function outNotEnough(){
    alert(`Since you didn't have enough spooky items before you left (${score}/3), the spooky event didn't occur. Your sadness leaves behind a reminder to never do half the work needed.`);
    if (confirm("try again?")) {
        startGame();
    }
}

function outWin(){
    alert("YAY!!! You got the things! The spooky ghouls congratulate you on your ability to find things and you win the ability to leave mostly unscathed.");
    alert("As you sit outside of the school, you put down the old box and use the key on it, to which it starts to open, about halfway.");
    alert("Mr. Jamieson frowns at the box, runs off for a moment, and comes back with a hammer. \n \n He smashes the box open.");
    alert("Yippee! You got an old candy out of the box. It's a melted chocolate bar.");
    if (confirm("try again?")) {
        startGame();
    }
}

startGame();