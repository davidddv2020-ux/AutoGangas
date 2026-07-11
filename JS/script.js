const whatsapp = document.querySelector(".whatsapp");

window.addEventListener("scroll", () => {

    if(window.scrollY > 350){

        whatsapp.classList.add("mostrar");
        whatsapp.classList.remove("oculto");

    }else{

        whatsapp.classList.add("oculto");
        whatsapp.classList.remove("mostrar");

    }

});

