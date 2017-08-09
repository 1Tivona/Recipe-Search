

fetch("http:/recipepuppyproxy.herokuapp.com/api/?i=onions,garlic&q=omelet&p=3")
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Status code: ' + response.status);
        return;
      }
      response.json().then(function(data) {
        console.log(data);
        for (let i = 0; i < data.results.length; i++){
          let ingredients = data.results.ingredients;
          if (ingredients == "q="){
          console.log(data.results.title + data.results.href + data.results.thumbnail)
          }
        }
      });
    });
