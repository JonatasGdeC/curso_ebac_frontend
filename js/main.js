$(document).ready(function(){

    $('#cpf').mask('000.000.000-00');
    $('#telefone').mask('(00)00000-0000');
    $('#cep').mask('00000-000');

    $('form').validate({
        rules:{
            nome: {
                required: true,
            },
            email: {
                required: true,
            },
            telefone: {
                required: true,
            },
            cpf: {
                required: true,
            },
            endereco: {
                required: true,
            },
            cep: {
                required: true,
            }
        }, messages:{
            nome: 'Por favor, insira seu nome completo!',
            email: 'Insira seu email',
            telefone: 'Digite seu telefone',
            cpf: 'Digite seu CPF',
            endereco: 'Insira seu endereço',
            cep:'Digite seu CEP',
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos!`)
            }
        }
    })

    
})