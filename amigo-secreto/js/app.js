var listaDeAmigos = []

function adicionar() {
    var nome = document.getElementById('nome-amigo').value;
    if (listaDeAmigos.includes(nome)){
        alert('Nome repetido');
        document.getElementById('nome-amigo').value = '';
    } else if (nome == ''){
        alert('Preencha o campo nome');        
    } else{
        listaDeAmigos.push(nome);
        document.getElementById('nome-amigo').value = '';
        document.getElementById('lista-amigos').textContent = listaDeAmigos;
    }

}

function sortear() {
    if (listaDeAmigos.length<4){
        alert('Adicione mais participantes!')
        return;
    }
    randomizarArray(listaDeAmigos);    
    var sorteio = document.getElementById('lista-sorteio');

    for (var x = 0; x < listaDeAmigos.length; x++) {
        if (x == listaDeAmigos.length-1) {
            sorteio.innerHTML = sorteio.innerHTML + listaDeAmigos[x] + " --> " + listaDeAmigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + listaDeAmigos[x] + " --> " + listaDeAmigos[x + 1] + '<br>';
        }
    }
}


function reiniciar() {
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').innerHTML = ''
    document.getElementById('lista-sorteio').innerHTML = ''
    listaDeAmigos = [];
}

function randomizarArray(array){
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        
    }
}

