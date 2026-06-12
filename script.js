// Efeito de rolagem (Scroll) no Cabeçalho
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#f0f7f4';
        header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    } else {
        header.style.backgroundColor = '#ffffff';
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
    }
});

// Sistema de Frases Dinâmicas de José Pacheco
const frases = [
    '"A educação não se faz de fora para dentro, faz-se de dentro para fora, na relação com o outro e com o meio."',
    '"A escola não são as paredes, são as pessoas e as relações que elas estabelecem."',
    '"Mudar a educação depende de transformar a informação em conhecimento útil para a vida."'
];

let indiceFrase = 0;
const elementoFrase = document.getElementById('frase-dinamica');

if (elementoFrase) {
    setInterval(() => {
        indiceFrase = (indiceFrase + 1) % frases.length;
        elementoFrase.style.opacity = 0; // Efeito simples de transição
        
        setTimeout(() => {
            elementoFrase.textContent = frases[indiceFrase];
            elementoFrase.style.opacity = 1;
        }, 500);
    }, 6000); // Muda a frase a cada 6 segundos
}
