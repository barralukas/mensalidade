    $(document).ready(function() {
        $('#cnpj').mask('00.000.000/0000-00');
    });

    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    menuBtn.addEventListener('click', () => {
        if (menu.classList.contains('-translate-x-full')) {
            menu.classList.remove('-translate-x-full');
            menu.classList.add('translate-x-0');
        } else {
            menu.classList.remove('translate-x-0');
            menu.classList.add('-translate-x-full');
        }
    });

    document.getElementById('cnpj-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Esconder o formulário
        document.getElementById('search-section').classList.add('fade-out');
        setTimeout(() => {
            document.getElementById('search-section').classList.add('hidden');
            
            // Mostrar a seção de resultados
            const resultSection = document.getElementById('result-section');
            resultSection.classList.remove('hidden');
            setTimeout(() => {
                resultSection.classList.add('fade-in');
                resultSection.classList.remove('opacity-0');
            }, 10);
        }, 500);
    });

    document.getElementById('exit-btn').addEventListener('click', function() {
        const cnpjInput = document.getElementById('cnpj');
        cnpjInput.value = '';
        
        
        // Esconder a seção de resultados
        const resultSection = document.getElementById('result-section');
        resultSection.classList.add('fade-out');
        setTimeout(() => {
            resultSection.classList.add('hidden');
            resultSection.classList.remove('fade-in');

            // Mostrar o formulário de pesquisa
            const searchSection = document.getElementById('search-section');
            searchSection.classList.remove('hidden');
            setTimeout(() => {
                searchSection.classList.remove('fade-out');
                searchSection.classList.add('fade-in');
                searchSection.classList.remove('opacity-0');
            }, 10);
        }, 500);
    });