var button = document.querySelector(".btn");
var jokeDiv = document.querySelector(".joke")

button.addEventListener("click",getJoke );

async function  getJoke(){

    const jokeRes = await fetch("https://api.icndb.com/jokes/random", {
      headers: {
        'Accept': 'application/json'
      }
    });
    const joke = await jokeRes.json();

    jokeDiv.innerHTML = joke.value.joke;

}
