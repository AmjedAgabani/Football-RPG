"use strict";
var character = Character();
var userInterfacePlayerStats = UserInterfacePlayerStats();

var userInterface = UserInterface();
var storyline = Storyline(userInterface, userInterfacePlayerStats);

storyline.start();


/* $(document).ready(function() {
    $("#name-form").submit(function(event) {
        event.preventDefault();
        userInterfacePlayerStats.name($("#name-form-name").val());
    });

    var playerPosition = undefined
    $("#position-options button[type='button']").click(function (event) {
        playerPosition = $(this).text();
    });

    $("#position-options button[type='submit']").click(function (event) {
        event.preventDefault();
        userInterfacePlayerStats.position(playerPosition);

        if (playerPosition === "Forward") {
            character.train("shooting", 2);
            character.train("heading", 2);
            userInterfacePlayerStats.update(character.getStats());
        }

        if (playerPosition === "Midfielder") {
            character.train("dribbling", 2);
            character.train("passing", 2);
            userInterfacePlayerStats.update(character.getStats());
        }

        if (playerPosition === "Defender") {
            character.train("defending", 2);
            character.train("heading", 2);
            userInterfacePlayerStats.update(character.getStats());
        };
    });
});
*/


/*
if (playerPosition !== undefined || playerPosition !== "") {
    userInterfacePlayerStats.position(playerPosition);
    playerPosition = playerPosition.toLowerCase();
}

if (!name) {
    name = userInterface.input("I didn't catch your name?");
    userInterfacePlayerStats.name(name);

}

if (!name) {
    name = userInterface.input("Not the way to be starting kiddo, last chance. What's your name?");
    userInterfacePlayerStats.name(name);
    character.dropReputation(5);
    userInterfacePlayerStats.update(character.getStats());
}

if (!name) {
    name = "Newbie";
    userInterface.print("Alright kiddo, you're already off to a bad start. Ill just address you as " + name + ".");
    character.dropReputation(5);
    userInterfacePlayerStats.name(name);
    userInterfacePlayerStats.update(character.getStats());
}



while (true) {

    var drillChoice = userInterface.input("First thing we're doing today " +
            name +
            " is training drills, what would you like to work on first? (Choose from pace, dribbling, passing, defending, heading, shooting)")
        .toLowerCase();

    var drillProgress = Math.floor(Math.random() * 10);
    var result = character.train(drillChoice, drillProgress);
    userInterfacePlayerStats.update(character.getStats());

    if (result.error !== undefined) {
        userInterface.print(result.error);
        userInterface.print(character.printStats());
    } else {
        userInterface.print("Your " + drillChoice + " increased by " + drillProgress + ".");
        if (drillProgress > 5) {
            var message = character.raiseReputation();
            if (message !== undefined) {
                userInterface.print(message.message);
            }
            userInterfacePlayerStats.update(character.getStats());
        }
        userInterface.print(character.printStats());
    }
}*/