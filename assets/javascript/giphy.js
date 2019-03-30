//Create an array of starter topics//
var topics = ["Super Mario World", "Super Metroid", "The Legend of Zelda: A Link to the Past",
                    "Mega Man X", "Donkey Kong Country", "Super Mario RPG",
                    "Yoshi's Island", "Kirby's Dream Land", "Super Mario Kart", "NBA Jam"];

//Dynamically create a button for each topic in the array
//Display the topic name as text on each button
//Create global button.on("click" function() that makes AJAX "GET" request


$(document).ready(function() {
    //Search URL//
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=5LwKUHVdtzq6bG86qoyOo1sH8YzLUpUk&q=SuperNintendo&limit=10&offset=0&rating=PG&lang=en";
    
    //GET request//
$.ajax({
    url: queryURL,
    method: "GET"
})  
    //GET response//
    .then(function(response) {
        console.log(queryURL);
        console.log(response);

        var results = response.data;
        //for loop to display gifs - run in starter button for loop
        for (var i = 0; i < results.length; i++){

            var gifButton = $("<button>");

            var gifDiv = $("<div>");

            var gifImage = $("<img>");
            gifImage.attr("src", results[i].images.fixed_height.url);

            gifButton.append(gifDiv);
            gifDiv.append(gifImage);


            $("#gif-div").prepend(gifButton);
            


        }
    })
});






