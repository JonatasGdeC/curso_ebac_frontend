$(document).ready(function(){
    $('#telefone').mask('(00)00000-0000');

    $('form').validate({
        rules:{
            nome:{
                required:true
            },
            email:{
                required:true
            },
            telefone:{
                required:true
            }
        },messages:{
            nome:'<span>Por favor, preencha seu nome</span>',
            email: '<span>Por favor, insira um email válido</span>',
            telefone: '<span>Por favor, insira seu telefone</span>'
        }
    })
})