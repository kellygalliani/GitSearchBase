async function Main(){

    function header(){
    
        let id = localStorage.getItem("id")
        let avatar = localStorage.getItem("avatar")
        let name = localStorage.getItem("name")
        let ocupation = localStorage.getItem("ocupation")
        let gitHubProfile = localStorage.getItem("gitHubProfile")

        return `
            <div class="user">
                <img class="user.img" src="${avatar}" alt="">
                <div class="userDescription">
                <h2 class="user.name">${name}</h2>
                <p class="user.activity">${ocupation}</p>
                </div>
            </div>
            <div class="headerButtons">
                <a class="brandButton" href="${gitHubProfile}" target="_blank">Ver Perfil</a>
                <a class="greyButton" href="../home/index.html">Trocar de usuário</a>
            </div>
        `
    }

    const headerLocal = document.querySelector(".header_profile")
    headerLocal.insertAdjacentHTML("beforeend", header())

    const repository = JSON.parse(localStorage.getItem("repos"))
    const ulRepositories = document.querySelector(".cardUl")

    function repositoriesCard(repo){
        return`
        <li class="cardLi">
            <h3 class="repository.name">${repo.name}</h3>
            <div class="cardButtons">
                <a class="borderButton" href="${repo.html_url}">Repositório</a>
                <a class="borderButton1" href="${repo.homepage}>Demo</button>
            </div>
        </li>
        `
    }

    function renderRepositories(array){

        array.forEach(element => {
            const card = repositoriesCard(element);
            ulRepositories.insertAdjacentHTML("beforeend", card);
        });
    }

    renderRepositories(repository)
}

Main()