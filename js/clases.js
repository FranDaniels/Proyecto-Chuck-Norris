export class Categoria{
    constructor(nombre){
        this.nombre=nombre
    }

    mostrarCategoria(){
        console.log('Categoria: ',this.nombre)
    }
}

export class Frase{
    constructor(chiste){
        this.chiste=chiste
    }

    mostrarChiste(){
        console.log('Chiste: ',this.chiste)
    }
}