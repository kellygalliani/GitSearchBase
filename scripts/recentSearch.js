if(!JSON.parse(localStorage.getItem("historico"))){
    let historico = []
    localStorage.setItem("historico", JSON.stringify(historico))
}


function userSearched(){

    const historico = JSON.parse(localStorage.getItem("historico")).reverse()
    const ulRecents = document.querySelector(".user_preview_ul")
    historico.forEach((element, index) => {
        if(index == 0 || 1 || 2){
            let tagLi = document.createElement("li")
            let tagA = document.createElement("a")
            let tagImg = document.createElement("img")

            tagImg.src = element.avatar

            //tagA.href = window.location.replace("../profile/index.html")

            tagLi.classList.add("user_preview_li")
            tagImg.classList.add("profile_photo_preview")
            
            tagLi.appendChild(tagA)
            tagA.appendChild(tagImg)
            ulRecents.appendChild(tagLi)
        }
    });

    /* const avatar1 = (historico[0].avatar || "")
    const avatar2 = (historico[1].avatar || "")
    const avatar3 = (historico[2].avatar || "")
    

    if(historico[0].avatar){
        let tagLi = document.createElement("li")
        let tagA = document.createElement("a")
        let tagImg = document.createElement("img")

        tagImg.src = avatar1

        //tagA.href = window.location.replace("../profile/index.html")

        tagLi.classList.add("user_preview_li")
        tagImg.classList.add("profile_photo_preview")
        
        tagLi.appendChild(tagA)
        tagA.appendChild(tagImg)
        ulRecents.appendChild(tagLi)
    }

    if(avatar2){
        let tagLi = document.createElement("li")
        let tagA = document.createElement("a")
        let tagImg = document.createElement("img")

        tagImg.src = avatar2

        //tagA.href = window.location.replace("../profile/index.html")

        tagLi.classList.add("user_preview_li")
        tagImg.classList.add("profile_photo_preview")
        
        tagLi.appendChild(tagA)
        tagA.appendChild(tagImg)
        ulRecents.appendChild(tagLi)
    }

    if(avatar3){
        let tagLi = document.createElement("li")
        let tagA = document.createElement("a")
        let tagImg = document.createElement("img")

        tagImg.src = avatar3

        //tagA.href = window.location.replace("../profile/index.html")

        tagLi.classList.add("user_preview_li")
        tagImg.classList.add("profile_photo_preview")
        
        tagLi.appendChild(tagA)
        tagA.appendChild(tagImg)
        ulRecents.appendChild(tagLi)
    } */
}

userSearched()