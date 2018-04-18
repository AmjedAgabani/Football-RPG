"use strict";
/*
 *  Storyline
 *  
 *  Purpose:
 *      *) controls story progression
 */
function Storyline(character, userInterface, userInterfacePlayerStats) {
    var playerName = undefined;

    function gotName(nameFromTheUi) {
        playerName = nameFromTheUi
        userInterfacePlayerStats.name(playerName);
        getPosition();
    };

    function getName() {
        userInterface.renderNamePage(gotName);
    };

    var playerPosition = undefined;

    function gotPosition(positionFromTheUi) {
        playerPosition = positionFromTheUi
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

    };

    function getPosition() {
        userInterface.renderPositionPage(gotPosition);
    };

    function start() {
        getName();
    }

    return {
        start: start
    };
}
