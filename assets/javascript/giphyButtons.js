var platformValue = "";
var genreValue= "";
var ratingValue="";

$(document).ready(function () {
    var userQuery = [];
    console.log("really ready!");

});
//For Platforms ***********************************

var searchFor = [];

$(document).on("click", "#pc", function () {
    platformValue = 94;

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=vhCJlVOgblzc6OCgihCPSyI30TEXkdqj&q=computer%20game%20logo=10&offset=0&rating=G&lang=en";
    console.log(queryURL);
    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .then(function (response) {

            // Storing an array of results in the results variable
            console.log(response);
            var results = response.data;

            var gifDiv = $("<div>");
            gifDiv.attr("class","card-body");
            // Creating an image tag
            var pcImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item

            pcImage.attr("src", results[0].images.fixed_height_still.url);
            pcImage.attr("data-still", results[0].images.fixed_height_still.url);
            pcImage.attr("data-animate", results[0].images.fixed_height.url);
            pcImage.attr("data-type", "still");
            pcImage.attr("class", "gif");
            pcImage.attr("class","card-image-top")

            var pcGifTitle = $("<h5>");
            pcGifTitle.attr("class","card-title");
            pcGifTitle.text("PC");


            // Appending the animalImage we created to the "gifDiv" div we created
            gifDiv.addClass("gifDiv");
            gifDiv.append(pcImage);
            gifDiv.append(pcGifTitle);
            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            // $("#platform-gifs-appear-here").prepend(gifDiv);
            $("#gifs-appear-here").prepend(gifDiv);
        })

    $("body").on("click", ".gif", function () {
        console.log("click")
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-type");
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === ("still")) {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-type", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-type", "still");
        }
    });

    console.log($("#pc").text());
    searchFor.push($("#pc").text());
    console.log(searchFor);
    $("#platform").hide();



});




$(document).on("click", "#nintendoSwitch", function () {

    platformValue = 157;

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=vhCJlVOgblzc6OCgihCPSyI30TEXkdqj&q=nintendo%20switch%20device&limit=10&offset=0&rating=G&lang=en";

    console.log(queryURL);
    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .then(function (response) {

            // Storing an array of results in the results variable
            console.log(response);
            var results = response.data;

            var gifDiv = $("<div>");
            gifDiv.attr("class","card-body");
            // Creating an image tag
            var nswitchImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item

            nswitchImage.attr("src", results[0].images.fixed_height_still.url);
            nswitchImage.attr("data-still", results[0].images.fixed_height_still.url);
            nswitchImage.attr("data-animate", results[0].images.fixed_height.url);
            nswitchImage.attr("data-type", "still");
            nswitchImage.attr("class", "gif");
            nswitchImage.attr("class", "card-image-top");

            var nswitchGifTitle = $("<h5>");
            nswitchGifTitle.attr("class","card-title");
            nswitchGifTitle.text("Nintendo Switch"); 


            // Appending the animalImage we created to the "gifDiv" div we created
            gifDiv.addClass("gifDiv");
            gifDiv.append(nswitchImage);
            gifDiv.append(nswitchGifTitle);
            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            // $("#platform-gifs-appear-here").prepend(gifDiv);
            $("#gifs-appear-here").prepend(gifDiv);

        })

    $("body").on("click", ".gif", function () {
        console.log("click")
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-type");
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === ("still")) {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-type", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-type", "still");
        }
    });

    console.log($("#nintendoSwitch").text());
    searchFor.push($("#nintendoSwitch").text());
    console.log(searchFor);
    $("#platform").hide();

});




$(document).on("click", "#playstation4", function () {

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=vhCJlVOgblzc6OCgihCPSyI30TEXkdqj&q=playstation%20controler&limit=10&offset=0&rating=G&lang=en";

    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .then(function (response) {

            // Storing an array of results in the results variable
            console.log(response);
            var results = response.data;

            var gifDiv = $("<div>");
            gifDiv.attr("class","card-body"); 
            // Creating an image tag
            var play4Image = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item

            play4Image.attr("src", results[0].images.fixed_height_still.url);
            play4Image.attr("data-still", results[0].images.fixed_height_still.url);
            play4Image.attr("data-animate", results[0].images.fixed_height.url);
            play4Image.attr("data-type", "still");
            play4Image.attr("class", "gif");
            play4Image.attr("class", "card-image-top");

            var play4GifTitle = $("<h5>");
            play4GifTitle.attr("class","card-title");
            play4GifTitle.text("Playstation 4"); 


            // Appending the animalImage we created to the "gifDiv" div we created
            gifDiv.addClass("gifDiv");
            gifDiv.append(play4Image);
            gifDiv.append(play4GifTitle);
            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            // $("#platform-gifs-appear-here").prepend(gifDiv);
            $("#gifs-appear-here").prepend(gifDiv);

        })

    $("body").on("click", ".gif", function () {
        console.log("click")
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-type");
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === ("still")) {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-type", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-type", "still");
        }
    });


    console.log($("#playstation4").text());
    searchFor.push($("#playstation4").text());
    console.log(searchFor);
    $("#platform").hide();

});


$(document).on("click", "#xboxOne", function () {

    platformValue = 145;

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=vhCJlVOgblzc6OCgihCPSyI30TEXkdqj&q=xbox=10&offset=0&rating=G&lang=en";

    console.log(queryURL);
    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .then(function (response) {

            // Storing an array of results in the results variable
            console.log(response);
            var results = response.data;

            var gifDiv = $("<div>");
            gifDiv.attr("class","card-body"); 
            // Creating an image tag
            var xboxImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item

            xboxImage.attr("src", results[0].images.fixed_height_still.url);
            xboxImage.attr("data-still", results[0].images.fixed_height_still.url);
            xboxImage.attr("data-animate", results[0].images.fixed_height.url);
            xboxImage.attr("data-type", "still");
            xboxImage.attr("class", "gif");
            xboxImage.attr("class", "card-image-top");

            var xboxGifTitle = $("<h5>");
            xboxGifTitle.attr("class","card-title");
            xboxGifTitle.text("Xbox One"); 


            // Appending the animalImage we created to the "gifDiv" div we created
            gifDiv.addClass("gifDiv");
            gifDiv.append(xboxImage);
            gifDiv.append(xboxGifTitle);
            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            // $("#platform-gifs-appear-here").prepend(gifDiv);
            $("#gifs-appear-here").prepend(gifDiv);

        })

    $("body").on("click", ".gif", function () {
        console.log("click")
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-type");
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === ("still")) {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-type", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-type", "still");
        }
    });


    console.log($("#xboxOne").text());
    searchFor.push($("#xboxOne").text());
    console.log(searchFor);
    $("#platform").hide();

});


// For Age Ranges ***************************************************

$(document).on("click", "#everyone", function () {
    ratingValue = 6;

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=vhCJlVOgblzc6OCgihCPSyI30TEXkdqj&q=no%20age%20limit&limit=10&offset=0&rating=G&lang=en";
    console.log(queryURL);
    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .then(function (response) {

            // Storing an array of results in the results variable
            console.log(response);
            var results = response.data;

            var gifDiv = $("<div>");
            gifDiv.attr("class","card-body"); 
            // Creating an image tag
            var everyoneImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item

            everyoneImage.attr("src", results[0].images.fixed_height_still.url);
            everyoneImage.attr("data-still", results[0].images.fixed_height_still.url);
            everyoneImage.attr("data-animate", results[0].images.fixed_height.url);
            everyoneImage.attr("data-type", "still");
            everyoneImage.attr("class", "gif");
            everyoneImage.attr("class", "card-image-top");

            var everyoneGifTitle = $("<h5>");
            everyoneGifTitle.attr("class","title");
            everyoneGifTitle.text("For All Ages"); 


            // Appending the animalImage we created to the "gifDiv" div we created
            gifDiv.addClass("gifDiv");
            gifDiv.append(everyoneImage);
            gifDiv.append(everyoneGifTitle);
            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            // $("#age-gifs-appear-here").prepend(gifDiv);
            $("#gifs-appear-here").prepend(gifDiv);

        })

    $("body").on("click", ".gif", function () {
        console.log("click")
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-type");
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === ("still")) {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-type", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-type", "still");
        }
    });


    console.log($("#everyone").text());
    searchFor.push($("#everyone").text());
    console.log(searchFor);
    $("#ageRange").hide();

});


$(document).on("click", "#teen", function () {


    ratingValue = 1;


    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=vhCJlVOgblzc6OCgihCPSyI30TEXkdqj&q=teen%20video%20gamer&limit=10&offset=0&rating=G&lang=en";

    console.log(queryURL);
    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .then(function (response) {

            // Storing an array of results in the results variable
            console.log(response);
            var results = response.data;

            var gifDiv = $("<div>");
            gifDiv.attr("class", "card-body");
            // Creating an image tag
            var teenImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item

            teenImage.attr("src", results[0].images.fixed_height_still.url);
            teenImage.attr("data-still", results[0].images.fixed_height_still.url);
            teenImage.attr("data-animate", results[0].images.fixed_height.url);
            teenImage.attr("data-type", "still");
            teenImage.attr("class", "gif");
            teenImage.attr("class", "card-image-top");

            var teenImageGifTitle = $("<h5>");
            teenImageGifTitle.attr("class","title");
            teenImageGifTitle.text("Teen"); 

            // Appending the animalImage we created to the "gifDiv" div we created
            gifDiv.addClass("gifDiv");
            gifDiv.append(teenImage);
            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            // $("#age-gifs-appear-here").prepend(gifDiv);
            $("#gifs-appear-here").prepend(gifDiv);

        })

    $("body").on("click", ".gif", function () {
        console.log("click")
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-type");
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === ("still")) {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-type", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-type", "still");
        }
    });



    console.log($("#teen").text());
    searchFor.push($("#teen").text());
    console.log(searchFor);
    $("#ageRange").hide();

});

$(document).on("click", "#mature", function () {
    ratingValue = 16;
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=vhCJlVOgblzc6OCgihCPSyI30TEXkdqj&q=mature&limit=10&offset=0&rating=G&lang=en";
    console.log(queryURL);
    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .then(function (response) {

            // Storing an array of results in the results variable
            console.log(response);
            var results = response.data;

            var gifDiv = $("<div>");
            // Creating an image tag
            var matureImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item

            matureImage.attr("src", results[0].images.fixed_height_still.url);
            matureImage.attr("data-still", results[0].images.fixed_height_still.url);
            matureImage.attr("data-animate", results[0].images.fixed_height.url);
            matureImage.attr("data-type", "still");
            matureImage.attr("class", "gif");


            // Appending the animalImage we created to the "gifDiv" div we created
            gifDiv.addClass("gifDiv");
            gifDiv.append(matureImage);
            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            // $("#age-gifs-appear-here").prepend(gifDiv);
            $("#gifs-appear-here").prepend(gifDiv);

        })

    $("body").on("click", ".gif", function () {
        console.log("click")
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-type");
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === ("still")) {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-type", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-type", "still");
        }
    });



    console.log($("#mature").text());
    searchFor.push($("#mature").text());
    console.log(searchFor);
    $("#ageRange").hide();

});

$(document).on("click", "#adult", function () {
    ratingValue = 23;
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=vhCJlVOgblzc6OCgihCPSyI30TEXkdqj&q=adult&limit=10&offset=0&rating=G&lang=en";
    console.log(queryURL);
    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .then(function (response) {

            // Storing an array of results in the results variable
            console.log(response);
            var results = response.data;

            var gifDiv = $("<div>");
            // Creating an image tag
            var adultImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item

            adultImage.attr("src", results[0].images.fixed_height_still.url);
            adultImage.attr("data-still", results[0].images.fixed_height_still.url);
            adultImage.attr("data-animate", results[0].images.fixed_height.url);
            adultImage.attr("data-type", "still");
            adultImage.attr("class", "gif");


            // Appending the animalImage we created to the "gifDiv" div we created
            gifDiv.addClass("gifDiv");
            gifDiv.append(adultImage);
            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            // $("#age-gifs-appear-here").prepend(gifDiv);
            $("#gifs-appear-here").prepend(gifDiv);

        })

    $("body").on("click", ".gif", function () {
        console.log("click")
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-type");
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === ("still")) {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-type", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-type", "still");
        }
    });

    $.ageCheck({minAge: minAge = 18}); 

    console.log($("#adult").text());
    searchFor.push($("#adult").text());
    console.log(searchFor);
    $("#ageRange").hide();
});

// For Genres *****************************************


$(document).on("click", "#fighting", function () {

    genreValue = 9;

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=vhCJlVOgblzc6OCgihCPSyI30TEXkdqj&q=video_game%20fighting&limit=10&offset=0&rating=G&lang=en";

    console.log(queryURL);
    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .then(function (response) {

            // Storing an array of results in the results variable
            console.log(response);
            var results = response.data;

            var gifDiv = $("<div>");
            // Creating an image tag
            var fightImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item

            fightImage.attr("src", results[0].images.fixed_height_still.url);
            fightImage.attr("data-still", results[0].images.fixed_height_still.url);
            fightImage.attr("data-animate", results[0].images.fixed_height.url);
            fightImage.attr("data-type", "still");
            fightImage.attr("class", "gif");


            // Appending the animalImage we created to the "gifDiv" div we created
            gifDiv.addClass("gifDiv");
            gifDiv.append(fightImage);
            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            // $("#genre-gifs-appear-here").prepend(gifDiv);
            $("#gifs-appear-here").prepend(gifDiv);

        })

    $("body").on("click", ".gif", function () {
        console.log("click")
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-type");
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === ("still")) {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-type", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-type", "still");
        }
    });

    console.log($("#fighting").text());
    searchFor.push($("#fighting").text());
    console.log(searchFor);
    $("#genre").hide();


});



$(document).on("click", "#puzzles", function () {

    genreValue = 18;

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=vhCJlVOgblzc6OCgihCPSyI30TEXkdqj&q=video_game%20puzzles&limit=10&offset=0&rating=G&lang=en";

    console.log(queryURL);
    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .then(function (response) {

            // Storing an array of results in the results variable
            console.log(response);
            var results = response.data;

            var gifDiv = $("<div>");
            // Creating an image tag
            var puzzleImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item

            puzzleImage.attr("src", results[0].images.fixed_height_still.url);
            puzzleImage.attr("data-still", results[0].images.fixed_height_still.url);
            puzzleImage.attr("data-animate", results[0].images.fixed_height.url);
            puzzleImage.attr("data-type", "still");
            puzzleImage.attr("class", "gif");


            // Appending the animalImage we created to the "gifDiv" div we created
            gifDiv.addClass("gifDiv");
            gifDiv.append(puzzleImage);
            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            // $("#genre-gifs-appear-here").prepend(gifDiv);
            $("#gifs-appear-here").prepend(gifDiv);

        })

    $("body").on("click", ".gif", function () {
        console.log("click")
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-type");
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === ("still")) {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-type", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-type", "still");
        }
    });

    console.log($("#puzzles").text());
    searchFor.push($("#puzzles").text());
    console.log(searchFor);
    $("#genre").hide();


});



$(document).on("click", "#rolePlaying", function () {

    genreValue = 5;

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=vhCJlVOgblzc6OCgihCPSyI30TEXkdqj&q=video games dungeons and dragons&limit=10&offset=0&rating=G&lang=en";

    console.log(queryURL);
    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .then(function (response) {

            // Storing an array of results in the results variable
            console.log(response);
            var results = response.data;

            var gifDiv = $("<div>");
            // Creating an image tag
            var roleImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item

            roleImage.attr("src", results[0].images.fixed_height_still.url);
            roleImage.attr("data-still", results[0].images.fixed_height_still.url);
            roleImage.attr("data-animate", results[0].images.fixed_height.url);
            roleImage.attr("data-type", "still");
            roleImage.attr("class", "gif");


            // Appending the animalImage we created to the "gifDiv" div we created
            gifDiv.addClass("gifDiv");
            gifDiv.append(roleImage);
            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            // $("#genre-gifs-appear-here").prepend(gifDiv);
            $("#gifs-appear-here").prepend(gifDiv);

        })

    $("body").on("click", ".gif", function () {
        console.log("click")
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-type");
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === ("still")) {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-type", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-type", "still");
        }
    });

    console.log($("#rolePlaying").text());
    searchFor.push($("#rolePlaying").text());
    console.log(searchFor);
    $("#genre").hide();


});


$(document).on("click", "#sport", function () {
    genreValue = 3;
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=vhCJlVOgblzc6OCgihCPSyI30TEXkdqj&q=sports%20video%20games&limit=10&offset=0&rating=G&lang=en";
    console.log(queryURL);
    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .then(function (response) {

            // Storing an array of results in the results variable
            console.log(response);
            var results = response.data;

            var gifDiv = $("<div>");
            // Creating an image tag
            var sportsImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item

            sportsImage.attr("src", results[0].images.fixed_height_still.url);
            sportsImage.attr("data-still", results[0].images.fixed_height_still.url);
            sportsImage.attr("data-animate", results[0].images.fixed_height.url);
            sportsImage.attr("data-type", "still");
            sportsImage.attr("class", "gif");


            // Appending the animalImage we created to the "gifDiv" div we created
            gifDiv.addClass("gifDiv");
            gifDiv.append(sportsImage);
            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            // $("#genre-gifs-appear-here").prepend(gifDiv);
            $("#gifs-appear-here").prepend(gifDiv);

        })

    $("body").on("click", ".gif", function () {
        console.log("click")
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-type");
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === ("still")) {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-type", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-type", "still");
        }
    });


    console.log($("#sport").text());
    searchFor.push($("#sport").text());
    console.log(searchFor);
    $("#genre").hide();
});


$(document).on("click", "#adventure", function () {

    genreValue = 43;

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=vhCJlVOgblzc6OCgihCPSyI30TEXkdqj&q=adventure%20video%20games&limit=10&offset=0&rating=G&lang=en";

    console.log(queryURL);
    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .then(function (response) {

            // Storing an array of results in the results variable
            console.log(response);
            var results = response.data;

            var gifDiv = $("<div>");
            // Creating an image tag
            var adventureImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item

            adventureImage.attr("src", results[0].images.fixed_height_still.url);
            adventureImage.attr("data-still", results[0].images.fixed_height_still.url);
            adventureImage.attr("data-animate", results[0].images.fixed_height.url);
            adventureImage.attr("data-type", "still");
            adventureImage.attr("class", "gif");


            // Appending the animalImage we created to the "gifDiv" div we created
            gifDiv.addClass("gifDiv");
            gifDiv.append(adventureImage);
            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            // $("#genre-gifs-appear-here").prepend(gifDiv);
            $("#gifs-appear-here").prepend(gifDiv);

        })

    $("body").on("click", ".gif", function () {
        console.log("click")
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-type");
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === ("still")) {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-type", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-type", "still");
        }
    });

    console.log($("#adventure").text());
    searchFor.push($("#adventure").text());
    console.log(searchFor);
    $("#genre").hide();


});


$(document).on("click", "#arcade", function () {


    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=vhCJlVOgblzc6OCgihCPSyI30TEXkdqj&q=arcade%20style%20video%20game&limit=10&offset=0&rating=G&lang=en";
    genreValue = "";

    console.log(queryURL);
    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .then(function (response) {

            // Storing an array of results in the results variable
            console.log(response);
            var results = response.data;

            var gifDiv = $("<div>");
            // Creating an image tag
            var arcadeImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item

            arcadeImage.attr("src", results[0].images.fixed_height_still.url);
            arcadeImage.attr("data-still", results[0].images.fixed_height_still.url);
            arcadeImage.attr("data-animate", results[0].images.fixed_height.url);
            arcadeImage.attr("data-type", "still");
            arcadeImage.attr("class", "gif");


            // Appending the animalImage we created to the "gifDiv" div we created
            gifDiv.addClass("gifDiv");
            gifDiv.append(arcadeImage);
            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            // $("#genre-gifs-appear-here").prepend(gifDiv);
            $("#gifs-appear-here").prepend(gifDiv);

        })

    $("body").on("click", ".gif", function () {
        console.log("click")
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-type");
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === ("still")) {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-type", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-type", "still");
        }
    });

    console.log($("#arcade").text());
    searchFor.push($("#arcade").text());
    console.log(searchFor);
    $("#genre").hide();

});
