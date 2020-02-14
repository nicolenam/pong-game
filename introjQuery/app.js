$(function() {
  // $("button").on("click", function() {
  //   //use the on change method to grab the value from the user dropdown and save it as userSelection

  //   $.ajax({
  //     method: "GET",
  //     url: `https://api.nytimes.com/svc/topstories/v2/business.json?api-key=TLa2CJ2qAawTOV6YZvoGmr9BNEVUMEt9`
  //   })
  //     .done(function({ results }) {
  //       $.each(results, function(index, value) {
  //         console.log(`${index}: ${value.title}`);
  //       });
  //     })
  //     .fail(function() {
  //       $(".user-name").append("sorry there was an error.");
  //     })
  //     .always(function() {
  //       $(".user-name").append("Thanks for using our API");
  //     });
  // });

  // description: "light snow", icon: "13d"
  // $("button").on("click", function() {
  //   $("p").remove();
  //   $.ajax({
  //     method: "GET",
  //     url:
  //       "https://api.openweathermap.org/data/2.5/weather?q=Vancouver,ca&appid=4a48e1e1428fd83889074671fbf259d9"
  //   })
  //     .done(function({ weather }) {
  //       $.each(weather, function(index, value) {
  //         const iconCode = value.icon;
  //         const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
  //         $(".results")
  //           .hide()
  //           .append(
  //             `${value.main} <br>${value.description}<br> <img src="${iconUrl}">`
  //           )
  //           .fadeIn(3000);
  //         // console.log(value)
  //       });
  //     })
  //     .fail(function() {
  //       $(".results").append("sorry there was an error.");
  //     });
  // });

  $("#search").on("click", function(event) {
    event.preventDefault();
    let val = $("input[type='text']").val();
    $("input[type='text']").val("");
    console.log(val);

    $.ajax({
      dataType: "json",
      method: "GET",
      url: `https://itunes.apple.com/search?entity=album&limit=6&term=${val}`
    }).done(function({ results }) {
      $.each(results, function(index, value) {
        let artist = value.collectionName;
        let thumbUrl = value.artworkUrl100;
       
        $(".album-list").append(
          `<li><img src="${thumbUrl}"><br>${artist}</li>`
        );

      });
    })
    .fail(function(){
      alert("please enter another name")
    })
  });
});
