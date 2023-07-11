function Empresa(funcionario, cargo, salario){
    this.funcionario = funcionario;
    this.cargo = cargo;
    this.salario = salario;
}

const joao = new Empresa('João', 'Gerente', 10000);
const wesley = new Empresa('Wesley', 'Supervisor', 6000);
const jonatas = new Empresa('Jônatas', 'Eletricista', 2300);