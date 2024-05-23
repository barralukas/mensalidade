$(document).ready(function() {
    $('#cnpj').mask('00.000.000/0000-00');
});

document.getElementById('cnpj-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchSection = document.getElementById('search-section');
    const resultSection = document.getElementById('result-section');

    searchSection.classList.add('fade-out');
    setTimeout(() => {
        searchSection.classList.add('hidden');
        searchSection.classList.remove('fade-in');

        resultSection.classList.remove('hidden');
        setTimeout(() => {
            resultSection.classList.remove('fade-out');
            resultSection.classList.add('fade-in');
            resultSection.classList.remove('opacity-0');
        }, 10);
    }, 500);
});

document.getElementById('exit-btn').addEventListener('click', function() {
    document.getElementById('cnpj').value = '';

    const resultSection = document.getElementById('result-section');
    resultSection.classList.add('fade-out');
    setTimeout(() => {
        resultSection.classList.add('hidden');
        resultSection.classList.remove('fade-in');

        const searchSection = document.getElementById('search-section');
        searchSection.classList.remove('hidden');
        setTimeout(() => {
            searchSection.classList.remove('fade-out');
            searchSection.classList.add('fade-in');
            searchSection.classList.remove('opacity-0');
        }, 10);
    }, 500);
});

document.getElementById('menu-btn').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('-translate-x-full');
});