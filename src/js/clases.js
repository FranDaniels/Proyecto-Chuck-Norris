export class Categoria{
    constructor(nombre){
        this.nombre=nombre
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