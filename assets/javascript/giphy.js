//Create an array of starter topics//
var topics = ["Mario Bros", "Metroid", "The Legend of Zelda",
    "Mega Man X", "Donkey Kong", "Yoshi's Island", "Kirby"];

//Dynamically create a button for each topic in the array
//Display the topic name as text on each button

$(document).ready(function buttonReload() {

    for (var j = 0; j < topics.length; j++) {
        var searchButton = $("<button>");
        searchButton.attr("class", "searchButton")
        searchButton.attr("id", topics[j]);

        var searchText = $("<p>").text(topics[j]);

        searchButton.append(searchText);
        $("#button-div").append(searchButton);

    }

    $(".searchButton").on("click", function () {
        $("#gif-div").empty();
        console.log("searchTest")
        //Search URL//
        var searchTopic = $(this).attr("id");

        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=5LwKUHVdtzq6bG86qoyOo1sH8YzLUpUk&q=SuperNintendo: "
            + searchTopic + "&limit=10&offset=0&rating=PG&lang=en";

        //GET request//
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            //GET response//
            .then(function (response) {
                console.log(queryURL);
                console.log(response);

                var results = response.data;

                //for loop to display gifs - run in starter button for loop
                for (var i = 0; i < results.length; i++) {


                    var gifImage = $("<img>");
                    gifImage.attr("class", "gifButton")
                    gifImage.attr("data-state", "still")
                    var gifImageStill = results[i].images.fixed_height_still.url
                    var gifImageAnimated = results[i].images.fixed_height.url

                    gifImage.attr("data-still", gifImageStill);
                    gifImage.attr("data-animate", gifImageAnimated);
                    gifImage.attr("src", gifImageStill);

                    $("#gif-div").prepend(gifImage);

                }
                $(".gifButton").on("click", function () {
                    var state = $(this).attr("data-state");

                    if (state === "still") {
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                    } else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                    };

                });
            })
    });
    //user input field adds to array and runs starter button for loop again
    $(".submitButton").on("click", function () {
        event.preventDefault();
        var newGame = $("#game-input").val().trim();

        topics.push(newGame);
        console.log(topics);
        $("#button-div").empty();
        $("#game-input").empty();
        buttonReload();
    })

});




