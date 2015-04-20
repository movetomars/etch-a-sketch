/**
 * Created by maiapetee on 4/10/15.
 */

$(document).ready(function() {

    var generateGrid = function() {
        $("button").click(function() {

            var $value = $("input").val();

            if($value > 1 && $value < 101) {
                var $conSide = $(".container").width();
                var $pixelSide = ($conSide / $value);
                var $pixelNum = ($conSide / $pixelSide) * ($conSide / $pixelSide);

                for(var $i = 1; $i < ($pixelNum + 1); $i++) {
                    $(".container").append("<div class='pixel'></div>");
                }

                $(".pixel").width($pixelSide).height($pixelSide);

                hover();
            } else {
                alert("That is not a number between 2 and 50! Please try again.");
            }
        });
    }

    generateGrid();

    var hover = function() {

        $(".pixel").mouseenter(function() {
            $(this).attr("id", "hover");
        });

    }

    hover();

    var colors = ["pink", "#800576", "#24807E", "purple", "blue", "#273B80"];
    var interval = 500;

    function randomizeTextColor() {
        var text = $(".title").text();
        $(".title").empty();
        for (var i = 0; i < text.length; i++) {
            var color = colors[Math.floor(colors.length * Math.random())];
            var letter = $("<h1>", {
                text: text.charAt(i),
                css: {
                    color: color
                }
            });
            $(".title").append(letter);
        }
    }

    function randomize(selector) {
        $(selector).each(function() {
            randomizeTextColor(this);
        });
    }

    $(randomize(".title"));
    window.setInterval(function() { randomize(".title") }, interval);


});