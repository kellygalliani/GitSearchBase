// SEARCH
function searchProfile(){
    let inputSearch = document.querySelector(".input")
    let inputValue = document.querySelector(".input").value
    let searchButton = document.querySelector(".button_seePerfil")
    
    inputSearch.addEventListener("keypress", ()=>{
        
        searchButton.classList.add("button_seePerfil_light")
        console.log(inputValue)
    })

    searchButton.addEventListener("click", async (event)=>{
        let inputValue = document.querySelector(".input").value
        
        event.preventDefault()
        await getData(inputValue)
        await getDataRepository(inputValue)
        let idUser = localStorage.getItem("id")

        if(idUser){
            window.location.replace("../profile/index.html")
        } 
    })
}
searchProfile()
