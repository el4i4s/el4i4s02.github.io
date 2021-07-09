// function cambiaSiguiente(){
// document.getElementById('photo').src = "imagenes/6.jpeg";
// document.getElementById('photo-caption').innerHTML = "final";
// }
// function cambiaContenido(){
// document.getElementById('photo'). src = "imagenes/6.jpeg";
// document.getElementById('photo-caption').innerHTML = "FINAL";
// }
document.getElementById('photo').addEventListener("mouseenter",() => {
  document.getElementById('photo'). src = "imagenes/6.jpeg";
  document.getElementById('photo-caption').innerHTML = "";

})

document.getElementById('photo').addEventListener("mouseleave",() => {
  document.getElementById('photo'). src = "imagenes/5.jpeg";
  document.getElementById('photo-caption').innerHTML = "DESLIZAR CURSOR PARA VER EL FINAL";

})
