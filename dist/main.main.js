(()=>{"use strict";class e{constructor(e){this.nombre=e,this.frases=[]}agregarFrase(e){this.frases.push(e)}agregarFrases(e){console.log(e),e.forEach((e=>{var r=new t(e.chiste);this.agregarFrase(r)}))}}class t{constructor(e){this.chiste=e}}var r;!async function(){try{const t=await fetch("https://api.chucknorris.io/jokes/categories");if(!t.ok)throw new Error("No se pudo obtener la Categoria");{const a=await t.json();!function(t){r=new e(t.nombre),localStorage.setItem("categoriaFrase",JSON.stringify(r))}(a),function(e){var t=document.getElementById("categorias");e.forEach((function(e){var r=document.createElement("tr"),a=document.createElement("td"),s=document.createElement("a");s.href="../src/frases.html",s.textContent=e,a.appendChild(s),r.appendChild(a),t.appendChild(r)}))}(a)}}catch(e){console.error(e)}}()})();