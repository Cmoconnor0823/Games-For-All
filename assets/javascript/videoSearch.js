



$(document).ready(function () {
  console.log("ready!");

  //firebase key configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDProkYgdjY3rTaaca5u9VipRAeaPKJnjE",
    authDomain: "video-search-5c1ee.firebaseapp.com",
    databaseURL: "https://video-search-5c1ee.firebaseio.com",
    projectId: "video-search-5c1ee",
    storageBucket: "video-search-5c1ee.appspot.com",
    messagingSenderId: "607886212195",
    appId: "1:607886212195:web:c661006422412d65"
  };
  firebase.initializeApp(firebaseConfig);
  console.log("firebase");


});

var platform = "pc"

var userChoice = " ";
// + userChoice + "?platform=" + platform 
//api_key=[e7b9ce5f17b926a054c14d54e4e5c5ef2cb2fed8

$("body").on("click", "#search", function () {
  console.log("Click")
  console.log(platformValue)
  console.log(ratingValue)
  console.log(genreValue)
  //   platform:
  // 	xbox one: 145
  // 	playstation  4: 146
  // 	nintendo switch: 157
  // 	pc: 94

  // rating:
  // 	E : 6
  // 	e 10+:29
  // 	teen: 1
  // 	mature: 16
  // 	AO: 23

  // genre:
  // 	role playing: 5
  // 	fighting: 9
  // 	sport: 3
  // 	adventure:43
  // 	puzzle: 18
  // 	arcade: n/a
  // axios.get("http://www.giantbomb.com/api/games/?format=jsonp&api_key=e7b9ce5f17b926a054c14d54e4e5c5ef2cb2fed84&filter=region:1,genre:9,rating:16,,platform:145,original_release_date:2010-1-1 00:00:00|2020-1-1 00:00:00&sort=original_release_date:asc&limit=10," , {
  //   dataType: "jsonp",
  //   crossDomain: true,
  //   user_agent: 'ourtablebootcamp',

  //                   jsonp: 'json_callback',
  //   //                 data: {
  //   //                     api_key: '[e7b9ce5f17b926a054c14d54e4e5c5ef2cb2fed8]',
  //   //                     query: 'mass effect',
  //   //                     format: 'jsonp',
  //   //                     field_list: 'name'

  //   // }
  // })    .then(response => {
  //   // Do work here
  //   console.log(response)
  // });

  $.ajax({
    type: 'GET',
    dataType: 'jsonp',
    crossDomain: true,
    jsonp: 'json_callback',
    user_agent: 'ourtablebootcamp',
    // url: "https://www.giantbomb.com/games/?letter=&sortBy=&platform=145&genre=&theme=&minRating=&rating=&region=&___developers=&___publishers=&fromYear=&toYear=",

    url: 'http://www.giantbomb.com/api/games/?format=jsonp&api_key=e7b9ce5f17b926a054c14d54e4e5c5ef2cb2fed8&sortBy=release&filter=region:1&filter=genre:' + genreValue + '&filter=rating:' + ratingValue + '&filter=platform:'+ platformValue + '&filter= original_release_date:2010-1-1 00:00:00|2020-1-1 00:00:00&sort=original_release_date:asc&offset=10&results=10&limit=10,',
    //  url: 'http://api.giantbomb.com/api/search/?api_key=e7b9ce5f17b926a054c14d54e4e5c5ef2cb2fed8&format=jsonp' + '&resources=game' + '&filter=name:portal',

  }).done(function (response) {
    console.log(response.results)
    var resultCount = response.results;

    for(i=0; i < resultCount.length;i++){
    
    var currentGame = response.results[i];

    console.log(response.results[i].image.small_url +" image")
    console.log(response.results[i].description +" description")
    console.log(response.results[i].name +" name")
    console.log(response.results[i].original_game_rating+" rating")


    var image = currentGame.image.small_url;
    console.log(image)

    var description = currentGame.description;
    console.log(description)

    var name = currentGame.name
    console.log(name)

    var rating = currentGame.original_game_rating;
    console.log(rating)

    

    var cardDiv = $("<div>");
      cardDiv.addClass("card bg-secondary border-danger text-white m-3 p-1");

      var cardImage = $("<img>");
      cardImage.attr("class","card-image-top");
      cardImage.attr("src",image);

      var cardBody = $("<div>");
      cardBody.attr("class","card-body");

      var cardTitle = $("<h5>").text(name);
      cardTitle.attr("class","card-title");

      var cardDescribe = $("<p>").html(description);
      cardDescribe.attr("class","card-text");

      var cardFooter1 = $("<p>");
      cardFooter1.attr("class","card-text");

      var cardFooter2 = $("<p>");
      cardFooter2.attr("class","card-text");

      var cardGenre = $("<small>").text("genre");
      cardGenre.attr("class", "text-muted");

      var cardScore = $("<small>").text("Score: " + rating);
      cardScore.attr("class", "text-muted");

      cardFooter1.append(cardGenre);

      cardFooter2.append(cardScore);

      cardBody.append(cardTitle);
      cardBody.append(cardDescribe);
      cardBody.append(cardFooter1);
      cardBody.append(cardFooter2);

      cardBody.append(cardImage);
      cardDiv.append(cardBody);

      $("#card-deck").prepend(cardDiv);
    }

    })
    .catch(e => {
      console.log("error", e);
    });
























  });







//   $.ajax({
//     url: "http://api.giantbomb.com/search/",
//     dataType: "jsonp",
//     jsonp: 'json_callback',
//     data: {
//         api_key: '[e7b9ce5f17b926a054c14d54e4e5c5ef2cb2fed8]',
//         query: 'mass effect',
//         format: 'jsonp',
//         field_list: 'name'
//     },
//     success: function(res) {
//         console.log(res);
//     }
// });
// });



//       console.log(response.data);
//       console.log(response.data.result.title);
//       console.log(response.data.result.description);
//       console.log(response.data.result.image);
//       console.log(response.data.result.genre);
//       console.log(response.data.result.score);

      

// });

