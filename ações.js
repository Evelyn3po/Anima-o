const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);

document.getElementById('BotaoCharlie').addEventListener('click', function() {
    window.location.href = 'https://pt.wikipedia.org/wiki/Boa_Sorte,_Charlie!';
});

document.getElementById('BotaoPlace').addEventListener('click', function() {
    window.location.href = 'https://www.netflix.com/br/title/80113701';
});

document.getElementById('BotaoJessie').addEventListener('click', function() {
    window.location.href = 'https://pt.wikipedia.org/wiki/Jessie';
})

document.getElementById('Botao100').addEventListener('click', function() {
    window.location.href = 'https://www.netflix.com/br/title/70283264';
});

document.getElementById('BotaoPrision').addEventListener('click', function() {
    window.location.href = 'https://www.primevideo.com/-/pt_PT/detail/Prison-Break---Em-Busca-Da-Verdade/0TELYTKZ6HZPV9AW7ASTG17W9R';
});

document.getElementById('BotaoAnne').addEventListener('click', function() {
    window.location.href = 'https://www.netflix.com/br/title/80136311';
});
