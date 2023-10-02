const form = document.getElementById ('form-contacts');
const nome = [];
const numero = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha ();
    atualizaTabela ();
})

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contatos');
    const inputNumeroContato = document.getElementById('numero-contatos');

    if (nome.includes(inputNomeContato.value)) {
        alert (`O contato: ${inputNomeContato.value} já foi inserido`);
    } else {
        nome.push(inputNomeContato.value);
        numero.push(parseFloat(inputNumeroContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}