/** @type {SVGImage[]} */
let lista_sfondi = [];

/** @type {SVGImage[]} */
let lista_inmezzo = [];

/** @type {SVGImage[]} */
let lista_sopra = [];

function preload() {
  lista_sfondi = [
    loadSVG("./assets/sfondi/13.svg"),
    loadSVG("./assets/sfondi/14.svg"),
    loadSVG("./assets/sfondi/15.svg"),
    loadSVG("./assets/sfondi/19.svg"),
    loadSVG("./assets/sfondi/21.svg"),
  ];
  lista_inmezzo = [
    loadSVG("./assets/inmezzo/1.svg"),
    loadSVG("./assets/inmezzo/2.svg"),
    loadSVG("./assets/inmezzo/3.svg"),
    loadSVG("./assets/inmezzo/7.svg"),
    loadSVG("./assets/inmezzo/8.svg"),
    loadSVG("./assets/inmezzo/9.svg"),
    loadSVG("./assets/inmezzo/20.svg"),
    loadSVG("./assets/inmezzo/25.svg"),
    loadSVG("./assets/inmezzo/26.svg"),
    loadSVG("./assets/inmezzo/27.svg"),
  ];
}

function setup() {
  createCanvas(400, 400, SVG);
  addDownloadButton();
  imageMode(CENTER);
  noLoop(); // Opzionale
}

function draw() {
  clear(); // Non cancellare!

  let randomsfondo = random(lista_sfondi);

  fillSVG(randomsfondo, "red");
  image(randomsfondo, width / 2, height / 2, 300, 300);

  let randominmezzo = random(lista_inmezzo);
  fillSVG (randominmezzo, "green")
  image(randominmezzo, width / 2, height / 2, 250, 250);
}
