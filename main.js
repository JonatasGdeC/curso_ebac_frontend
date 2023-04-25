$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#input-tarefa').val();

        const novoItem = $(`<li>${novaTarefa}</li>`).appendTo('ul');
        $('#input-tarefa').val('');

        $(novoItem).click(function(){
            $(this).css({textDecoration: "line-through"});
        })
    })
})
