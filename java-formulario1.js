const botoes = document.querySelectorAll('.nome-social .btn');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {

        // remove ativo de todos
        botoes.forEach(btn => btn.classList.remove('ativo'));

        // adiciona ativo só no clicado
        botao.classList.add('ativo');
    });
});