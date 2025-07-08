const form = document.getElementById('form-cliente');
const tabela = document.getElementById('tabela-clientes');
const modalEditar = document.getElementById('modal-editar');
const modalExcluir = document.getElementById('modal-excluir');


const inputNome = document.getElementById('nome');
const inputSobrenome = document.getElementById('sobrenome');
const inputcpf = document.getElementById('cpf');
const inputEmail = document.getElementById('email');

// modal editar

const inputEditNome = document.getElementById("edit-nome");
const inputEditSobrenome = document.getElementById("edit-sobrenome");
const inputEditCpf = document.getElementById("edit-cpf");
const inputEditEmail = document.getElementById("edit-email");

const formEdicao = document.getElementById('form-edicao');
const btnCancelarEdicao = document.getElementById("cancelar-edicao");
const btnConfirmarExclusao = document.getElementById("confirmar-exclusao");
const btnCancelarExclusao = document.getElementById("cancelar-exclusao");

let clientes = [
    {
        nome: 'Samuel',
        sobrenome: 'Santos',
        cpf: '12345678910',
        email: 'samuel@gmail.com',
    },
        {
        nome: 'Samuel',
        sobrenome: 'Santos',
        cpf: '12345678910',
        email: 'samuel@gmail.com',
    },
    {
        nome: 'Samuel',
        sobrenome: 'Santos',
        cpf: '12345678910',
        email: 'samuel@gmail.com',
    },
];

let indexEditando = null;
let indexEcluindo = null;

function renderizarTabela() {

    clientes.forEach((cliente)=>{
        const tr = document.createElement('tr')

        tr.innerHTML = `
        <td>${cliente.nome}</td>
        <td>${cliente.sobrenome}</td>
        <td>${cliente.cpf}</td>
        <td>${cliente.email}</td>
        
        
        `;

        const tdAcoes = document.createElement('td');
        tdAcoes.classList.add('acoes');

        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.classList.add('editar')

        const btnEcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';
        btnExcluir.classList.add('excluir');

        tdAcoes.appendChild(btnEditar)
        tdAcoes.appendChild(btnExcluir)

        tr.appendChild(tdAcoes);

        tabela.appendChild(tr);
    })


}

renderizarTabela();