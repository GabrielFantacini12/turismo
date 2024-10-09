
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll('.banner');
  slides.forEach(slide => slide.style.display = 'none'); // Oculta todos os slides
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = 'flex'; // Exibe o slide atual
  setTimeout(showSlides, 5000); // Troca de slide a cada 5 segundos
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


const filterButtons = document.querySelectorAll('.filter-btn');
const pacoteCards = document.querySelectorAll('.pacote-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    pacoteCards.forEach(card => {
      if (filter === 'todos') {
        card.style.display = 'block'; // Mostra todos os pacotes
      } else if (card.dataset.destino === filter) {
        card.style.display = 'block'; // Mostra os pacotes do destino selecionado
      } else {
        card.style.display = 'none'; // Oculta os pacotes que não correspondem ao filtro
      }
    });
  });
});


const detailButtons = document.querySelectorAll('.btn-secondary');
const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `
  <div class="modal-content">
    <span class="close-btn">&times;</span>
    <h2>Detalhes do Pacote</h2>
    <p>Informações detalhadas sobre o pacote escolhido irão aparecer aqui.</p>
  </div>
`;

document.body.appendChild(modal);
const closeButton = modal.querySelector('.close-btn');

detailButtons.forEach(button => {
  button.addEventListener('click', () => {
    modal.style.display = 'block';
  });
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
