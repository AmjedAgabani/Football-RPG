function Character() {
    var stats = {
        pace: 3,
        dribbling: 3,
        passing: 3,
        defending: 3,
        heading: 3,
        shooting: 3,
        weakFoot: 3,
        skills: 3,
        reputation: 10,
    };

    function train(stat, improvement) {
        if (stat === "reputation") {
            return {
                error: "You can't train reputation."
            };
        }

        if (stats[stat] === undefined) {
            dropReputation(3);
            return {
                error: "You can't train " + stat + "."
            }
        }

        stats[stat] += improvement;

        return {
            value: stats[stat]
        }
    }

    function dropReputation(value) {
        stats.reputation -= value;
    }

    function getStats(stat) {
        return stats[stat];
    }

    function printStats() {
        return "Your current stats are," +
            " pace = " +
            stats.pace +
            " dribbling = " +
            stats.dribbling +
            " passing = " +
            stats.passing +
            " defending = " +
            stats.defending +
            " heading = " +
            stats.heading +
            " shooting = " +
            stats.shooting +
            " weak foot = " +
            stats.weakFoot +
            " skills = " +
            stats.skills +
            " reputation = " +
            stats.reputation;
    }

    return {
        dropReputation: dropReputation,
        train: train,
        getStats: getStats,
        printStats: printStats
    };
}


var name = window.prompt("Welcome to the training camp kiddo, what is your name?");

var character = Character();

var playerPosition = window.prompt("Do you play as a forward, midfielder or defender?");
if (playerPosition !== undefined || playerPosition !== "") {
    playerPosition = playerPosition.toLowerCase();
}

if (!name) {
    name = window.prompt("I didn't catch your name?");
}

if (!name) {
    name = window.prompt("Not the way to be starting kiddo, last chance. What's your name?");
    character.dropReputation(5);
}

if (!name) {
    name = "Newbie";
    window.alert("Alright kiddo, you're already off to a bad start. Ill just address you as " + name + ".");
    character.dropReputation(5);
};

if (playerPosition === "forward") {
    character.train("shooting", 2);
    character.train("heading", 2);
}

if (playerPosition === "midfielder") {
    character.train("dribbling", 2);
    character.train("passing", 2);
}

if (playerPosition === "defender") {
    character.train("defending", 2);
    character.train("heading", 2);
}

if (playerPosition === undefined || playerPosition === "") {
    window.alert("Welcome " +
        name +
        ". Our job is to get you into a football club as an up and coming " +
        "player" +
        " for next season, how you perform during this training camp will affect which clubs come knocking for you.");

} else {
    window.alert("Welcome " +
        name +
        ". Our job is to get you into a football club as an up and coming " +
        playerPosition +
        " for next season, how you perform during this training camp will affect which clubs come knocking for you.");
}

while (true) {

    var drillChoice = window.prompt("First thing we're doing today " +
            name +
            " is training drills, what would you like to work on first? (Choose from pace, dribbling, passing, defending, heading, shooting)")
        .toLowerCase();

    drillProgress = Math.floor(Math.random() * 10);
    var result = character.train(drillChoice, drillProgress);

    if (result.error !== undefined) {
        window.alert(result.error);
        window.alert(character.printStats());
    } else {
        window.alert("Your " + drillChoice + " increased by " + drillProgress + ".");

        window.alert(character.printStats());
    }
}