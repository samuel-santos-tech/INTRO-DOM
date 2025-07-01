const root = document.querySelector
('#root');

const botao = document.querySelector
("#btn");



const nome = "Samuel";
const sobremome = "Santos"

root.innerHTML = `
<h1> Titulo principal</h1>
<p>Isso é um paragrafo</p>
<h2>${nome} ${sobremome}

`

console.log(root);