"use strict";
/*
 *  UserInterface
 *  
 *  Purpose:
 *      *) to accept inputs from user
 *      *) to display user interface to user
 */

function UserInterface(jquery) {
    var $ = jquery;

    function renderNamePage(gotName) {

        // unhide
        $("#name-page").removeClass("hide");

        // listen for form submission
        $("#name-form").submit(function(event) {
            event.preventDefault();

            if ($("#name-form-name").val() === "") {
                $("#name-page .error-message").text("You haven't entered your name");
                return;
            }

            $(this).unbind('submit');
            $("#name-page").addClass("hide");
            $("#name-page .error-message").text("");
            var playerName = $("#name-form-name").val();
            gotName(playerName);

        });

    };

    function renderPositionPage(gotPosition) {

        // unhide
        $("#position-page").removeClass("hide");

        // listen
        var playerPosition = undefined;
        $("#position-options button[type='button']").click(function(event) {
            playerPosition = $(this).text();
        });

        $("#position-options button[type='submit']").click(function(event) {
            event.preventDefault();
            if (playerPosition === undefined) {
                $("#position-page .error-message").text("You haven't selected your position");
                return;
            }

            $(this).unbind('submit');
            $("#name-page .error-message").text("");
            $("#position-page").addClass("hide");

            gotPosition(playerPosition);

        });
    };

    return {
        renderNamePage: renderNamePage,
        renderPositionPage: renderPositionPage
    };
}