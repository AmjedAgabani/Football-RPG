"use strict";
function UserInterface() {

    function renderNamePage(gotName) {

        // unhide
        $("#name-page").removeClass("hide");

        // listen for form submission
        $("#name-form").submit(function (event) {
            event.preventDefault();
            $(this).unbind('submit');

            $("#name-page").addClass("hide");
            var playerName = $("#name-form-name").val()
       
            gotName(playerName);
        });

    };

    function renderPositionPage(gotPosition) {

        // unhide
        $("#position-page").removeClass("hide");

        // listen
        var playerPosition = undefined
        $("#position-options button[type='button']").click(function (event) {
            playerPosition = $(this).text();
        });

        $("#position-options button[type='submit']").click(function (event) {
            event.preventDefault();
            $(this).unbind('submit');

            $("#position-page").addClass("hide");
                        
            gotPosition(playerPosition);

        });
    };

    return {
        renderNamePage: renderNamePage,
        renderPositionPage: renderPositionPage
    };
}