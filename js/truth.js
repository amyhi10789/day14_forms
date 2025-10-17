let fname = "";

function greet() {
    let greetParagraph = document.getElementById("greet");

    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + " " + lname + "!";
}

function trivia1() {
    let triviaAnswer = document.getElementById("trivia1-answer");

    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. You are a sugar addict.";
    }

    if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. That's a fishy answer.";
    }

    if (honeySelected) {
        triviaAnswer.innerHTML = fname + ", you are correct!";
    }
}

function truthandlie() {
    let answer = document.getElementById("truthandlie");

    let truth1Selected = document.getElementById("truth1").checked;
    let lieSelected = document.getElementById("lie").checked;
    let truth2Selected = document.getElementById("truth2").checked;

    if (truth1Selected) {
        answer.innerHTML = fname + ", you are wrong. I'm hurt that you don't appreciate my passionate love for Pure Leaf Sweet Tea.";
    }

    if (lieSelected) {
        answer.innerHTML = fname + ", you are correct! I am absolutely terrified of horror movies...";
    }

    if (truth2Selected) {
        answer.innerHTML = fname + ", you are wrong. I am a chronic lip balm user.";
    }
}

function truthandlie2() {
    let answer = document.getElementById("truthandlie2");

    let truth1Selected = document.getElementById("2truth1").checked;
    let truth2Selected = document.getElementById("2truth2").checked;
    let lieSelected = document.getElementById("2lie").checked;

    if (truth1Selected && truth2Selected && lieSelected) {
        answer.innerHTML = fname + ", you can't just select all of them!";
    } else if (truth1Selected && truth2Selected) {
        answer.innerHTML = fname + ", you are correct!";
    } else if ((truth1Selected && lieSelected) || (truth2Selected && lieSelected)) {
        answer.innerHTML = fname + ", one of this is correct, the other one is wrong!";
    } else if (truth1Selected || truth2Selected) {
        answer.innerHTML = fname + ", you're almost there! there's one more you haven't selected yet.";
    } else if (lieSelected) {
        answer.innerHTML = fname + ", you are wrong.";
    }
}