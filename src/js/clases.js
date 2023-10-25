export class Categoria{
    constructor(nombre){
        this.nombre=nombre
        this.frases=[]
    }

    agregarFrase(frase){
        this.frases.push(frase)
    }
}

export class Frase{
    constructor(chiste){
        this.chiste=chiste
    }
}