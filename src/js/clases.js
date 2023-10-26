export class Categoria{
    constructor(nombre){
        this.nombre=nombre
        this.frases=[]
    }

    agregarFrase(frase){
        this.frases.push(frase)
    }

    agregarFrases(frases){
        console.log(frases)
        frases.forEach(element => {
            var frase = new Frase(element.chiste)
            this.agregarFrase(frase)
        });
    }
}

export class Frase{
    constructor(chiste){
        this.chiste=chiste
    }
}