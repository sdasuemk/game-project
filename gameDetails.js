async function fetchData(){
    let gameList = ["Gat5", "Avengers", "Minecraft", "For Cry"];
    let randomNumber = Math.floor(Math.random()*5);
    console.log(randomNumber);
    let response = await fetch('https://api.rawg.io/api/games?key=5c14b272c6594eb7857bb4a774e32aef&search='+gameList[randomNumber])
    let data = await response.json();
    console.log(data)

    let display = `<h1>${data.results[0].name}</h1>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="${data.results[0].background_image}" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="${data.results[1].background_image}" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="${data.results[2].background_image}" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>`
      let gameDisplay = document.getElementById('gameDisplay');
      gameDisplay.innerHTML = display;
}
fetchData()

