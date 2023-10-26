import { Categoria } from "./clases";

var categoria;

function cargarCategoria(){
    var categoriaStr=localStorage.getItem("categoriaFrase");
    var categoriaAux=JSON.parse(categoriaStr);
    console.log(categoriaAux)
    // categoria=new Categoria(categoriaAux.nombre,categoriaAux.frase);
    // categoria.agregarFrases(categoriaAux.frase);
}

cargarCategoria()