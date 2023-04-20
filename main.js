$(document).ready(function(){
    const novoItem = $('<li style="display:block"></li>');
    
    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#input-tarefa').val();

        $(`<p>${novaTarefa}</p>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#input-tarefa').val('')
    })
    $(novoItem).click(function(){
        $('li').css({textDecoration: "line-through"});
    })
})