var fraseCate= document.getElementById("fraseCate")

var fraseJSON=localStorage.getItem("frase");
var frase=JSON.parse(fraseJSON);
console.log(frase)

fraseCate.textContent=frase.value
