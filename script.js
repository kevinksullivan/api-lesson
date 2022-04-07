let button = document.querySelector("#searchButton")

async function getData(){
let searchInput = document.querySelector("#inputBar").value

let url = `https://pokeapi.co/api/v2/pokemon/${searchInput}`
console.log(url)
fetch(url)
  .then(res => {
    return res.json();
  })
  .then(res => {
      let pokemonHeading = document.querySelector("#pokemonName")
      pokemonHeading.innerText = `You selected: ${res.name}`

    console.log(res.name, res);
  })
  .catch(err => {
    console.log("something went wrong...", err);
  });
}

button.addEventListener('click', getData)