function UserInterfacePlayerStats() {
    function name(value) {
        $("#player-stats-name").text(value);

    }

    function position(value) {
        $("#player-stats-position").text(value);
    }

    function update(stats) {
        $("#player-stats-defending").text(stats.defending);
        $("#player-stats-dribbling").text(stats.dribbling);
        $("#player-stats-heading").text(stats.heading);
        $("#player-stats-pace").text(stats.pace);
        $("#player-stats-passing").text(stats.passing);
        $("#player-stats-shooting").text(stats.shooting);
        $("#player-stats-skills").text(stats.skills);
        $("#player-stats-weakfoot").text(stats.weakFoot);
        $("#player-stats-reputation").text(stats.reputation);
    }

    return {
        name: name,
        position: position,
        update: update
    }
}

function Character() {
    var stats = {
        defending: 3,
        dribbling: 3,
        heading: 3,
        pace: 3,
        passing: 3,
        reputation: 10,
        shooting: 3,
        skills: 3,
        weakFoot: 3
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

    function raiseReputation() {
        var drillPerformance = Math.random();
        if (drillPerformance > 0.9) {
            stats.reputation += 25;
            return {
                message: "As a result of a spectacular performance in training your reputation has risen by 25"
            }
        } else if (drillPerformance > 0.75) {
            stats.reputation += 10;
            return {
                message: "As a result of an amazing performance in training your reputation has risen by 10"
            };
        } else if (drillPerformance > 0.6) {
            stats.reputation += 5;
            return {
                message: "As a result of a good performance in training your reputation has risen by 5"
            };
        }

        return undefined;
    }

    function dropReputation(value) {
        stats.reputation -= value;
    }

    function getStats() {
        return stats;
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
        raiseReputation: raiseReputation,
        train: train,
        getStats: getStats,
        printStats: printStats
    };
}

function Storyline() {

    return {
    };
}

var character = Character();
var userInterfacePlayerStats = UserInterfacePlayerStats();
var storyline = Storyline();

$(document).ready(function() {
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