const button = document.querySelector(".button_seePerfil_light")

function insertSpinner(){
    button.innerHTML= ""

    const img = document.createElement("img")
    img.src = "../../img/spinner.png"
    img.alt = "spinner"
    img.classList.add("loading")
    
    button.appendChild(img)
    
}

function disableSpinner(){
    button.innerHTML= ""

    button.innerText = "Ver perfil do github"
    
}