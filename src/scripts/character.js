"use strict";
/*
 *  Character
 *  
 *  Purpose:
 *      *) control player stats
 *      *) control player name
 *      *) control player position
 */

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

    return {
        dropReputation: dropReputation,
        raiseReputation: raiseReputation,
        train: train,
        getStats: getStats
    };
}