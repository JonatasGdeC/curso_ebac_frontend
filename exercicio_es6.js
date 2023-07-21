const alunos = []
const boletim = alunos.map(function(aluno){
    aluno = {
        nome: aluno,
        nota: Number,
    }
    return aluno
})

alunos.push(
    {
        nome: 'Antonio',
        nota: 10
    },
    {
        nome: 'Maria',
        nota: 6
    },
    {
        nome: 'José',
        nota: 5
    },
    {
        nome: 'Fernanda',
        nota: 4
    },
)


const alunosAprovados = alunos.filter(function(item){
    return item.nota >= 6
})

const nomeDosAlunosAprovados = alunosAprovados.reduce(function(acumulador, itemAtual){
    return acumulador += `${itemAtual.nome} `
}, '')

console.log(alunos)
console.log(`Os alunos aprovados foram ${nomeDosAlunosAprovados}`)