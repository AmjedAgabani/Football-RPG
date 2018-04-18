"use strict";
/*
 *  UserInterfacePlayerStats
 *  
 *  Purpose:
 *      *) to display the players stats to user
 */

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