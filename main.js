const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    const numero1 = document.getElementById('input__numero1')
    const numero2 = document.getElementById('input__numero2')

    const mensagem = document.getElementById('mensagem')

    const mensagemCorreto = `Correto!<br> O número "${numero1.value}" é menor que o número "${numero2.value}".`
    const mensagemIgual = `Errado!<br> Os números são iguais.`
    const mensagemErrado = `Errado!<br> O número "${numero1.value}" não é menor que o número "${numero2.value}".`
    
    if (numero1.value<numero2.value){
        mensagem.innerHTML = mensagemCorreto
        mensagem.style.display = 'block'
        mensagem.style.backgroundColor = 'green'
    } else if (numero1.value == numero2.value){
        mensagem.innerHTML = mensagemIgual
        mensagem.style.display = 'block'
        mensagem.style.backgroundColor = 'yellow'
        mensagem.style.color = 'black'
    } else {
        mensagem.innerHTML = mensagemErrado
        mensagem.style.display = 'block'
        mensagem.style.backgroundColor = 'red'
    }

    numero1.value = ''
    numero2.value = ''
})


