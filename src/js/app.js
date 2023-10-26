import { Categoria } from "./clases.js";
import { Frase } from "./clases.js";

const apiUrl="https://api.chucknorris.io/jokes/categories";

var frase;
var categoria;

obtenerCategoria()

async function obtenerCategoria(){
    try {
        const response =await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('No se pudo obtener la Categoria')
        }else{
            const data = await response.json();
            cargarCategoria(data)
            listarTablaCategorias(data)
        }
    } catch (error) {
        console.error(error)
    }
}

function cargarCategoria(data){
    categoria=new Categoria(data.nombre,data.frase); 
    localStorage.setItem("categoriaFrase",JSON.stringify(categoria)) 
    return categoria;
}

function listarTablaCategorias(categoria) {
    var tabla = document.getElementById("categorias");

    categoria.forEach(function (categoria) {
        var fila = document.createElement("tr");

        var enlaceCelda = document.createElement("td");
        var enlace = document.createElement("a");
        enlace.href = '../src/frases.html';
        enlace.textContent = categoria;

        enlaceCelda.appendChild(enlace);
        fila.appendChild(enlaceCelda);
        tabla.appendChild(fila);
    });
}

