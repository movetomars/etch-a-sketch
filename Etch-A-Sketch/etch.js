/**
 * Created by maiapetee on 4/10/15.
 */

$(document).ready(function() {

    var generateGrid = function() {
        var $conSide = $(".container").width();
        var $pixelSide = ($conSide / 16);
        var $pixelNum = ($conSide / $pixelSide) * ($conSide / $pixelSide);

        for(var $i = 1; $i < ($pixelNum + 1); $i++) {
                $(".container").append("<div class='pixel'></div>");
            }

        $(".pixel").width($pixelSide-2).height($pixelSide-2);
    }

    generateGrid();

    var hover = function() {

        $(".pixel").mouseenter(function() {
            $(this).attr("id", "hover");
        }).mouseleave(function() {
            $(this).removeAttr("id", "hover");
        });

    }

    hover();

    var reset = function() {
        $("button").click(function() {
            var ask = prompt("How many squares would you like alongside your grid? Enter a number 2 to 100.");
        });

    }

    reset();

});