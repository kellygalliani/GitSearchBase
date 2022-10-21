const baseUrl = "https://api.github.com/users/" 
const headers = {
    "Content-Type": "application/json"
}


async function getData(input) {
    try{

        const users = await fetch(`https://api.github.com/users/${input}`, {
            method: "GET",
            headers: headers
        })
        const usersJson = await users.json()
    
        if(users.status != 200){
            const errorText = document.querySelector(".errorMessage")
            errorText.classList.remove("hidden")
            disableSpinner()
        }

        localStorage.setItem("id", usersJson.id || "")
        localStorage.setItem("avatar", usersJson.avatar_url || "")
        localStorage.setItem("name", usersJson.login || "")
        localStorage.setItem("ocupation", usersJson.bio || "")
        localStorage.setItem("gitHubProfile", usersJson.html_url || "")
        
        let history = JSON.parse(localStorage.getItem("historico"))

        let objeto = {
           id: usersJson.id || "", 
           avatar: usersJson.avatar_url || "",
           name:usersJson.login || "",
           ocupation:usersJson.bio || "",
           gitHubProfile:usersJson.html_url || "",
        }
        let objetoExiste = history.find(element => element.id == usersJson.id)
        
        if(!objetoExiste){
            history.push(objeto)
            if(history.length >= 4){
                history.splice(history[0], 1)
            }
            localStorage.setItem("historico", JSON.stringify(history))
        };


        return usersJson

    } catch(error){
        return error /* refazer essa parte do erro */
    }
  
}

async function getDataRepository(input) {
  
    const userRepositories = await fetch(`https://api.github.com/users/${input}/repos`, {
        method: "GET",
        headers: headers
    })
    const userRepositoriesJson = await userRepositories.json()
    localStorage.setItem("repos", JSON.stringify(userRepositoriesJson))
    
    return userRepositoriesJson
}
