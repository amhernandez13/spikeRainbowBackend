import Product from "../models/Product.js";

//Camisas de Hombre------------------
await Product.create({
  name: "Camisa de hombre",
  description: "Manga larga",
  size: "Talla: S, M, L",
  ref: 252525,
  color: "Negro",
  stock: 12,
  price: 50,
  image: "camisaNegraMLHombre.png"
});


await Product.create({
  name: "Camisa de hombre",
  description: "Manga larga",
  size: "Talla: S, M, L",
  ref: 252526,
  color: "Beige",
  stock: 12,
  price: 50,
  image:"camisaBeigeMLHombre.png"
});


await Product.create({
  name: "Camisa de hombre",
  description: "Manga larga",
  size: "Talla: S, M, L",
  ref: 252527,
  color: "Blanco",
  stock: 12,
  price: 50,
  image:"camisaBlancoMLHombre.png"
});


//-------------------------------------------

await Product.create({
  name: "Camisa de hombre",
  description: "Manga Corta",
  size: "Talla: S, M, L",
  ref: 232323,
  color: "Negro",
  stock: 12,
  price: 50,
  image:"camisaNegraMCHombre.png"
});


await Product.create({
  name: "Camisa de hombre",
  description: "Manga Corta",
  size: "Talla: S, M, L",
  ref: 232324,
  color: "Blanco",
  stock: 12,
  price: 50,
  image:"camisaBlancoMCHombre.png"
});


await Product.create({
  name: "Camisa de hombre",
  description: "Manga Corta",
  size: "Talla: S, M, L",
  ref: 232325,
  color: "Beige",
  stock: 12,
  price: 50,
  image:"camisaBeigeMCHombre.png"
});

//camisas de Mujer--------------

await Product.create({
  name: "Camisa de Mujer",
  description: "Manga larga",
  size: "Talla: S, M, L",
  ref: 323232,
  color: "Negro",
  stock: 12,
  price: 50,
  image:"camisaNegraMLMujer.png"
});


await Product.create({
  name: "Camisa de Mujer",
  description: "Manga larga",
  size: "Talla: S, M, L",
  ref: 323233,
  color: "Blanco",
  stock: 12,
  price: 50,
  image:"camisaBlancaMLMujer.png"
});


await Product.create({
  name: "Camisa de Mujer",
  description: "Manga larga",
  size: "Talla: S, M, L",
  ref: 323234,
  color: "Rosado",
  stock: 12,
  price: 50,
  image:"camisaRosaMLMujer.png"
});

//-----------------------------

await Product.create({
  name: "Camisa de Mujer",
  description: "Manga Corta",
  size: "Talla: S, M, L",
  ref: 313131,
  color: "Negro",
  stock: 12,
  price: 50,
   image:"camisaNegraMCMujer.png"
});

await Product.create({
  name: "Camisa de Mujer",
  description: "Manga Corta",
  size: "Talla: S, M, L",
  ref: 313132,
  color: "Blanco",
  stock: 12,
  price: 50,
   image:"camisaBlancaMCMujer.png"
});

await Product.create({
  name: "Camisa de Mujer",
  description: "Manga Corta",
  size: "Talla: S, M, L",
  ref: 313133,
  color: "Rosado",
  stock: 12,
  price: 50,
  image:"camisaRosaMCMujer.png"
});

//Pantalones de Caballero-------------

await Product.create({
  name: "Pantalon de Caballero",
  description: "Drill",
  size: "Talla: 28, 32, 36",
  ref: 484848,
  color: "Negro",
  stock: 12,
  price: 70,
  image:"pantalonNegroELHombre.png"
});


await Product.create({
  name: "Pantalon de Caballero",
  description: "Drill",
  size: "Talla: 28, 32,36",
  ref: 484849,
  color: "Blanco",
  stock: 12,
  price: 70,
   image:"pantalonBlancoSPHombre.png"
});


await Product.create({
  name: "Pantalon de Caballero",
  description: "Drill",
  size: "Talla: 28, 32, 36",
  ref: 484850,
  color: "Azul",
  stock: 12,
  price: 70,
  image:"pantalonAzulSPHombre.png"
});

//----------------------------

await Product.create({
  name: "Pantalon de Caballero",
  description: "Indigo",
  size: "Talla: 28, 32, 36",
  ref: 616161,
  color: "Negro",
  stock: 12,
  price: 70,
  image:"pantalonNegroSPHombre.png"
});


await Product.create({
  name: "Pantalon de Caballero",
  description: "Indigo",
  size: "Talla: 28, 32, 36",
  ref: 616162,
  color: "Blanco",
  stock: 12,
  price: 70,
   image:"pantalonBlancoELHombre.png"
});

await Product.create({
  name: "Pantalon de Caballero",
  description: "Indigo",
  size: "Talla: 28, 32, 36",
  ref: 616163,
  color: "Azul",
  stock: 12,
  price: 70,
   image:"pantalonAzulELHombre.png"
});

//Pantalon de Mujer--------------

await Product.create({
  name: "Pantalon de Mujer",
  description: "Drill",
  size: "Talla: 6, 10, 14",
  ref: 464646,
  color: "Azul",
  stock: 12,
  price: 70,
  image:"pantalonAzulSPMujer.png"
});


await Product.create({
  name: "Pantalon de Mujer",
  description: "Drill",
  size: "Talla: 6, 10, 14",
  ref: 464647,
  color: "Blanco",
  stock: 12,
  price: 70,
  image:"pantalonBlancoSPMujer.png"
});

await Product.create({
  name: "Pantalon de Mujer",
  description: "Drill",
  size: "Talla: 6, 10, 14",
  ref: 464648,
  color: "Negro",
  stock: 12,
  price: 70,
  image:"pantalonNegroSPMujer.png"
});

//-----------------------------

await Product.create({
  name: "Pantalon de Mujer",
  description: "Indigo",
  size: "Talla: 6, 10, 14",
  ref: 444444,
  color: "Negro",
  stock: 12,
  price: 70,
  image:"pantalonNegroELMujer.png"
});

await Product.create({
  name: "Pantalon de Mujer",
  description: "Indigo",
  size: "Talla: 6, 10, 14",
  ref: 444445,
  color: "Blanco",
  stock: 12,
  price: 70,
  image:"pantalonBlancoELMujer.png"
});

await Product.create({
  name: "Pantalon de Mujer",
  description: "Indigo",
  size: "Talla: 6, 10, 14",
  ref: 444446,
  color: "Azul",
  stock: 12,
  price: 70,
  image:"pantalonAzulELMujer.png"
});

//Zapatos Hombre---------------

await Product.create({
  name: "Zapato formal para Hombre",
  description: "Cuero y neolite",
  size: "Talla: 39, 41, 43",
  ref: 321654,
  color: "Negro",
  stock: 12,
  price: 90,
  image:"zapatoNegroElHombre.png"
});

await Product.create({
  name: "Zapato formal para Hombre",
  description: "Cuero y neolite",
  size: "Talla: 39, 41, 43",
  ref: 321654,
  color: "Miel",
  stock: 12,
  price: 90,
  image:"zapatoCafeElHombre.png"
});

//-------------------------------

await Product.create({
  name: "Zapato deportivo tennis para Hombre",
  description: "Sintetics and xpanson",
  size: "Talla: 39, 41, 43",
  ref: 221654,
  color: "Negro",
  stock: 12,
  price: 90,
  image:"zapatillaNegroSPHombre.png"
});


await Product.create({
  name: "Zapato deportivo tennis para Hombre",
  description: "Sintetics and xpanson",
  size: "Talla: 39, 41, 43",
  ref: 221654,
  color: "Blanco",
  stock: 12,
  price: 90,
  image:"zapatillaBlancaSPHombre.png"
});

//zapato para mujer-------------------

await Product.create({
  name: "Zapato formal para Mujer",
  description: "Cuero y neolite",
  size: "Talla: 35, 37, 39",
  ref: 748748,
  color: "Negro",
  stock: 12,
  price: 90,
  image:"taconNegroELMujer.png"
});

await Product.create({
  name: "Zapato formal para Mujer",
  description: "Cuero y neolite",
  size: "Talla: 35, 37, 39",
  ref: 748748,
  color: "Blanco",
  stock: 12,
  price: 90,
  image:"taconBlancoELMujer.png"
});

//-------------------------------

await Product.create({
  name: "Zapato deportivo tennis para Mujer",
  description: "Sintetic and Xpanson",
  size: "Talla: 35, 37, 39",
  ref: 758740,
  color: "Negro",
  stock: 12,
  price: 90,
  image:"zapatillaNegroDPMujer.png"
});


await Product.create({
  name: "Zapato deportivo tennis para Mujer",
  description: "Sintetic and Xpanson",
  size: "Talla: 35, 37, 39",
  ref: 758740,
  color: "Blanco",
  stock: 12,
  price: 90,
  image:"zapatillaBlconNesPMujer.png"
});

