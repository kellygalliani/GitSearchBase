// SEARCH
function searchProfile(){
    let inputSearch = document.querySelector(".input")
    let inputValue = document.querySelector(".input").value
    let searchButton = document.querySelector(".button_seePerfil_light")
    
    inputSearch.addEventListener("keyup", (event)=>{
        if (event.target.value.length == 0) {
            searchButton.disabled = true;
          } else {
            searchButton.disabled = false;
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
