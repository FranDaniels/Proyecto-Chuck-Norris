import { Categoria } from "./clases.js";
import { Frase } from "./clases.js";

const apiUrl = "https://api.chucknorris.io/jokes/categories";
const boton = document.getElementById("boton");


boton.addEventListener("click", function (event) {
  cargarFraseRandom();
});

document.addEventListener("click", function (event) {
  var categoriaNombre = event.target.textContent;
  cargarFrase(categoriaNombre).then((data)=>{
    var frase = JSON.stringify(data);
    localStorage.setItem("frase", frase);
    window.location.href = "../src/frases.html";
  });
  cargarCategoria(categoriaNombre);
});

async function obtenerCategoria() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("No se pudo obtener la Categoria");
    } else {
      const data = await response.json();
      listarTablaCategorias(data);
    }
  } catch (error) {
    console.error(error);
  }
}

function listarTablaCategorias(categoria) {
  var tabla = document.getElementById("categorias");

  categoria.forEach(function (categoria) {
    var fila = document.createElement("tr");

    var enlaceCelda = document.createElement("td");
    var enlace = document.createElement("a");
    enlace.href = "#";
    enlace.textContent = categoria;

    enlaceCelda.appendChild(enlace);
    fila.appendChild(enlaceCelda);
    tabla.appendChild(fila);
  });
}

function cargarCategoria(data) {
  let categoria = new Categoria(data);
  var categoriaJSON = JSON.stringify(categoria.nombre);
  localStorage.setItem("categoria", categoriaJSON);
}

  async function cargarFraseRandom() {
  try {
    const apiURLRandom = await fetch("https://api.chucknorris.io/jokes/random"); // URL de la API
    const response = await apiURLRandom.json();

    const fraseCompleta = JSON.stringify(response);
    // Almacenar la frase en el almacenamiento local
    localStorage.setItem("frase", fraseCompleta);
    window.location.href = "../src/frases.html";
  } catch (error) {
    console.error(error);
  }
}

async function cargarFrase(categoria) {
    console.log(categoria)
  try {
    const apiURL = await fetch(
      `https://api.chucknorris.io/jokes/random?category=${categoria}`
    );
    const response = await apiURL.json();


    return response;
  } catch (error) {
    console.error(error);
    }
}
;

obtenerCategoria()