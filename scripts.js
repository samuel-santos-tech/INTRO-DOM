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

let clientes = [];

let indexEditando = null;
let indexEcluindo = null;