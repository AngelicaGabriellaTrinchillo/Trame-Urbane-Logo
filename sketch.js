/** @type {SVGImage[]} */
let lista_sotto = [];

/** @type {SVGImage[]} */
let lista_mezzo = [];

/** @type {SVGImage[]} */
let lista_sopra = [];

let lista_colori = [
  ["red", "blue", "green"],
  ["yellow", "pink", "black"],
];

function preload() {
  lista_sotto = [
    loadSVG("./assets/sotto/Glos-01.svg"),
    loadSVG("./assets/sotto/Glos-02.svg"),
    loadSVG("./assets/sotto/Glos-03.svg"),
    loadSVG("./assets/sotto/Glos-04.svg"),
    loadSVG("./assets/sotto/Glos-05.svg"),
    loadSVG("./assets/sotto/Glos-06.svg"),
    loadSVG("./assets/sotto/Glos-07.svg"),
    loadSVG("./assets/sotto/Glos-08.svg"),
    loadSVG("./assets/sotto/Glos-09.svg"),
    loadSVG("./assets/sotto/Glos-10.svg"),
    loadSVG("./assets/sotto/Glos-11.svg"),
    loadSVG("./assets/sotto/Glos-12.svg"),
    loadSVG("./assets/sotto/Glos-13.svg"),
    loadSVG("./assets/sotto/Glos-14.svg"),
    loadSVG("./assets/sotto/Glos-15.svg"),
    loadSVG("./assets/sotto/Glos-16.svg"),
    loadSVG("./assets/sotto/Glos-17.svg"),
    loadSVG("./assets/sotto/Glos-18.svg"),
    loadSVG("./assets/sotto/Glos-19.svg"),
    loadSVG("./assets/sotto/Glos-20.svg"),
    loadSVG("./assets/sotto/Glos-21.svg"),
    loadSVG("./assets/sotto/Glos-22.svg"),
    loadSVG("./assets/sotto/Glos-23.svg"),
    loadSVG("./assets/sotto/Glos-24.svg"),
    loadSVG("./assets/sotto/Glos-25.svg"),
    loadSVG("./assets/sotto/Glos-26.svg"),
    loadSVG("./assets/sotto/Glos-27.svg"),
    loadSVG("./assets/sotto/Glos-28.svg"),
    loadSVG("./assets/sotto/Glos-29.svg"),
    loadSVG("./assets/sotto/Glos-30.svg"),
    loadSVG("./assets/sotto/Glos-31.svg"),
    loadSVG("./assets/sotto/Glos-32.svg"),
    loadSVG("./assets/sotto/Glos-33.svg"),
  ];

  lista_mezzo = loadGroup("mezzo", 34, 96);
  lista_sopra = loadGroup("sopra", 97, 121);
}

function setup() {
  createCanvas(400, 400, SVG);
  addDownloadButton();
  imageMode(CENTER);
  noLoop(); // Opzionale
}

function draw() {
  clear(); // Non cancellare!

  let combinazione = random(lista_colori);

  let randomsotto = random(lista_sotto);
  removeStyles(randomsotto);
  fillSVG(randomsotto, combinazione[0]);
  image(randomsotto, width / 2, height / 2, 300, 300);

  let randommezzo = random(lista_mezzo);
  removeStyles(randommezzo);
  fillSVG(randommezzo, combinazione[1]);
  image(randommezzo, width / 2, height / 2, 300, 300);

  let random_sopra = random(lista_sopra);
  removeStyles(random_sopra);
  fillSVG(random_sopra, combinazione[2]);
  image(random_sopra, width / 2, height / 2, 300, 300);
}

/**
 *
 * @param {string} name
 * @param {number} start
 * @param {number} end
 * @returns {SVGImage[]}
 */
function loadGroup(name, start, end) {
  /** @type {SVGImage[]} */
  let group = [];
  for (let i = start; i <= end; i++) {
    group.push(
      loadSVG("./assets/" + name + "/Glos-" + String(i).padStart(2) + ".svg")
    );
  }
  return group;
}
