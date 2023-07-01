$(document).ready(function(){
    const endpoint = 'https://api.github.com/users/JonatasGdeC';

    fetch(endpoint).then(function(resposta){
        return resposta.json();
    }).then(function(json){
        $('#imageAvatar').attr("src", json.avatar_url)
        $('#name').html(json.name);
        $('#userName').html(json.login);
        $('#numberRepositories').html(json.public_repos);
        $('#numberFollowers').html(json.followers)
        $('#numberFollowing').html(json.following)
    })
})