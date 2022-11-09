const btn_menuHamburgesa = document.getElementById("btn");
const lista_navegacion = document.getElementById("lista-menu");

btn_menuHamburgesa.addEventListener("click", function(){
    lista_navegacion.classList.toggle("lista-menu_visible"); /* con toggle se añade/quita(si se pulsa otra vez) a las clases de "lista menu" la clase que hace visible el menu */   
})

