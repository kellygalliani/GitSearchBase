// SEARCH
function searchProfile(){
    let inputSearch = document.querySelector(".input")
    let inputValue = document.querySelector(".input").value
    let searchButton = document.querySelector(".button_seePerfil")
    
    inputSearch.addEventListener("keyup", (event)=>{
        
        searchButton.classList.add("button_seePerfil_light")

        if(event.target.value.length == 0){
            searchButton.classList.remove("button_seePerfil_light")
        }
    })

    searchButton.addEventListener("click", async (event)=>{
        let inputValue = document.querySelector(".input").value
        
        event.preventDefault()
        insertSpinner()
        await getData(inputValue)
        await getDataRepository(inputValue)
        let idUser = localStorage.getItem("id")

        if(idUser){

           setTimeout(()=>{
                disableSpinner()
                window.location.replace("../profile/index.html")
                
            },3000)
            
        } 
    })
}
searchProfile()
