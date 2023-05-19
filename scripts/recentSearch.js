if(!JSON.parse(localStorage.getItem("historico"))){
    let historico = []
    /* localStorage.setItem("historico", JSON.stringify(historico)) */
}


function userSearched(){

    const historico = JSON.parse(localStorage.getItem("historico")).reverse()
    const ulRecents = document.querySelector(".user_preview_ul")
    historico.forEach((element, index) => {
        if(index === 0 || 1 || 2){
            let tagLi = document.createElement("li")
            let tagA = document.createElement("a")
            let tagImg = document.createElement("img")
            let tagSpan = document.createElement("span")

            tagLi.addEventListener("click", async () => {
                getData(element.name)
                window.location.replace("../profile/index.html")
            })
            tagImg.src = element.avatar
            tagSpan.innerText = "Acessar este Perfil"

            tagLi.classList.add("user_preview_li")
            tagImg.classList.add("profile_photo_preview")
            tagSpan.classList.add("accessProfile")
            
            tagLi.appendChild(tagA)
            tagA.append(tagImg, tagSpan)
            ulRecents.appendChild(tagLi)
        }
        if(index > 2){
            historico.splice(index)
        }
    });

}

userSearched()