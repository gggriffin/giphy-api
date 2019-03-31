//Create an array of starter topics//
var topics = ["Super Mario World", "Super Metroid", "The Legend of Zelda: A Link to the Past",
    "Mega Man X", "Donkey Kong Country", "Super Mario RPG",
    "Yoshi's Island", "Kirby's Dream Land", "Super Mario Kart", "NBA Jam"];

//Dynamically create a button for each topic in the array
//Display the topic name as text on each button

$(document).ready(function buttonReload() {

    for (var j = 0; j < topics.length; j++) {
        var searchButton = $("<button>");
        searchButton.attr("class", "searchButton")
        searchButton.attr("id", topics[j]);

        var searchText = $("<p>").text(topics[j]);

        searchButton.append(searchText);
        $("#button-div").prepend(searchButton);

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

                var gifButton = $("<button>");

                var gifDiv = $("<div>");

                var gifImage = $("<img>");
                gifImage.attr("src", results[i].images.fixed_height.url);

                gifButton.append(gifDiv);
                gifDiv.append(gifImage);


                $("#gif-div").prepend(gifButton);

            }
            //user input field adds to array and runs starter button for loop again
        })
    });
});






