let catUrl = "https://catfact.ninja/fact";
let catBtn = document.querySelector("#catBtn");
let catFact = document.querySelector("#catFact");

catBtn.addEventListener("click", async () => {
  let ans = await getFact(catUrl);
  catFact.innerHTML = `&QUOT; ${ans} &QUOT;`;
});

async function getFact(url) {
  try {
    let res1 = await axios.get(url);
    return res1.data.fact;
  } catch (err) {
    return "No Fact found";
  }
}

let dogUrl = "https://dog.ceo/api/breeds/image/random";
let dogBtn = document.querySelector("#dogBtn");
let dogCard = document.querySelector("#dogCard");
let dogImg = document.createElement("img");

dogBtn.addEventListener("click", async () => {
  let link = await getImgLink(dogUrl);

  dogCard.append(dogImg);
  dogImg.classList.add("card-img-top");
  dogImg.src = link;
});

async function getImgLink(url) {
  try {
    let res = await axios.get(url);
    return res.data.message;
  } catch (e) {
    return "Image not found";
  }
}

let jokeBtn = document.querySelector("#jokeBtn");
let joke = document.querySelector("#joke");
let jokeUrl = "https://icanhazdadjoke.com/";

jokeBtn.addEventListener("click", async () => {
  let ans = await getJoke(jokeUrl);
  joke.innerHTML = `&QUOT; ${ans} &QUOT;`;
});

async function getJoke(url) {
  const config = { headers: { Accept: "application/json" } };
  try {
    let res = await axios.get(url, config);
    return res.data.joke;
  } catch (e) {
    return "No joke found";
  }
}
