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

    theJoke = joke.value.joke;

    if (!(theJoke.includes("pennis") || theJoke.includes("dick")|| theJoke.includes("sex"))){
        jokeDiv.innerHTML = theJoke;
    }

    else{
      getJoke();
    }



}
