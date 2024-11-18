// Função para mostrar os detalhes do serviço
function mostrarDetalhes(servico) {
    const detalhesServico = document.getElementById('detalhesServico');
    const tituloServico = document.getElementById('tituloServico');
    const descricaoServico = document.getElementById('descricaoServico');
    
    // Definindo os detalhes de cada serviço
    const servicos = {
        barba: {
            nome: 'Barba',
            descricao: 'Corte de barba personalizado, com hidratação e acabamento.',
            preco: 'R$ 50,00',
            tipos: ['Corte de barba', 'Hidratação', 'Acabamento']
        },
        cortes: {
            nome: 'Cortes',
            descricao: 'Cortes modernos e tradicionais, feitos sob medida.',
            preco: 'R$ 70,00',
            tipos: ['Corte de cabelo masculino', 'Corte de cabelo feminino', 'Corte infantil']
        },
        sobrancelha: {
            nome: 'Sobrancelha',
            descricao: 'Design de sobrancelhas, com estilo natural ou definido.',
            preco: 'R$ 30,00',
            tipos: ['Design de sobrancelha', 'Correção de falhas']
        },
        procedimentos: {
            nome: 'Procedimentos',
            descricao: 'Procedimentos estéticos para cuidado com a pele e cabelo.',
            preco: 'R$ 40,00',
            tipos: ['Limpeza de pele', 'Hidratação capilar', 'Cauterização']
        },
        combos: {
            nome: 'Combos',
            descricao: 'Pacotes promocionais para cortes e barba juntos.',
            preco: 'R$ 100,00',
            tipos: ['Corte + Barba', 'Corte + Sobrancelha', 'Combo completo']
        }
    };

    // Verificar se o serviço existe no objeto servicos
    const servicoEscolhido = servicos[servico];

    if (servicoEscolhido) {
        // Preenchendo os dados no HTML
        tituloServico.textContent = servicoEscolhido.nome;
        descricaoServico.innerHTML = `
            <p>${servicoEscolhido.descricao}</p>
            <p class="preco">Preço: ${servicoEscolhido.preco}</p>
            <ul>
                ${servicoEscolhido.tipos.map(tipo => `<li>${tipo}</li>`).join('')}
            </ul>
        `;

        // Exibindo o container de detalhes
        detalhesServico.style.display = 'block';
    }
}

// Associar os eventos de clique aos serviços
document.querySelector('.servico-left').addEventListener('click', function() {
    mostrarDetalhes('barba');
});
document.querySelector('.servico-center').addEventListener('click', function() {
    mostrarDetalhes('cortes');
});
document.querySelector('.servico-right').addEventListener('click', function() {
    mostrarDetalhes('sobrancelha');
});
document.querySelector('.servico-left-bottom').addEventListener('click', function() {
    mostrarDetalhes('procedimentos');
});
document.querySelector('.servico-right-bottom').addEventListener('click', function() {
    mostrarDetalhes('combos');
});
// Variáveis para controle do carrossel
let currentPosition = 0;
const itemsToShow = 4; // Número de itens visíveis no carrossel
const carouselTrack = document.querySelector('.carousel-track');
const carouselItems = document.querySelectorAll('.carousel-item');
const itemWidth = carouselItems[0].offsetWidth + 20; // Inclui espaçamento entre os itens
const maxPosition = carouselItems.length - itemsToShow;

// Função para mover o carrossel
function moveCarousel(direction) {
    currentPosition += direction;

    // Impede o avanço além dos limites do carrossel
    if (currentPosition < 0) {
        currentPosition = 0;
    } else if (currentPosition > maxPosition) {
        currentPosition = maxPosition;
    }

    // Move o carrossel com a transformação 'translateX'
    const newTranslateX = -currentPosition * itemWidth;
    carouselTrack.style.transform = `translateX(${newTranslateX}px)`;  // Correção do estilo
}

// Função para ir para o próximo item (ao clicar no botão "next")
document.querySelector('.next-btn').addEventListener('click', function() {
    moveCarousel(1);  // Direção para frente
});

// Função para ir para o item anterior (ao clicar no botão "prev")
document.querySelector('.prev-btn').addEventListener('click', function() {
    moveCarousel(-1);  // Direção para trás
});

document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function (event) {
        const targetClass = this.getAttribute('data-target'); // Obtém o valor de data-target
        const href = this.getAttribute('href'); // Obtém o valor do href

        // Se o link tem um href válido, como o "Marque seu Horário"
        if (href && href !== "#") {
            return; // Não faz nada e segue com o comportamento normal (abertura do link)
        }

        // Se o link possui o atributo data-target
        if (targetClass) {
            event.preventDefault(); // Evita o comportamento padrão do link

            // Encontra o elemento de destino com a classe correspondente
            const targetElement = document.querySelector(`.${targetClass}`);
            if (targetElement) {
                const elementPosition = targetElement.offsetTop;

                // Rola suavemente até o elemento
                window.scrollTo({
                    top: elementPosition - 80, // Ajuste para a altura do menu fixo
                    behavior: 'smooth'
                });
            }
        }
    });
});

