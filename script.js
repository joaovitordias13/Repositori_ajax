document.addEventListener("DOMContentLoaded",function(){
    const name = document.getElementById('name');
    const avatar = document.getElementById('avatar');
    const username = document.getElementById('username');
    const respositorios = document.getElementById('respositorios');
    const seguidores = document.getElementById('seguidores');
    const seguindo = document.getElementById('seguindo');
    const link = document.getElementById('link');
    const api = "https://api.github.com/users/joaovitordias13"

    fetch(api)
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function(json) {
        name.innerText = json.name;
        username.innerText = json.login;
        avatar.src = json.avatar_url;
        respositorios.innerText = json.public_repos;
        seguidores.innerText = json.followers;
        seguindo.innerText = json.following;
        link.href = json.htm_url;
    })
})