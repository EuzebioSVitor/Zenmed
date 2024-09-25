const cards = document.querySelectorAll('.card');
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup_content');

const cardContent = {
  "Título 1": "Lorem Ipsum dolor et aaaaa",
  "Título 2": "Muito conteúdo zika.",
  "Título 3": "artigo incrível cheio de coisas maravilhosas e vislumbrantes, uau, que mágico",
  "Título 4": "As vezes eu me pergunto se a melhor ideia é realmente melhor.",
};

cards.forEach(card => {
  card.addEventListener('click', () => {
    const cardTitle = card.querySelector('.card_title').textContent;
    const content = cardContent[cardTitle];

    popupContent.innerHTML = `
      <h2>${cardTitle}</h2>
      <p>${content}</p>
      <div class="center">
      <button onclick="fecharpopup()" class="popup_close">Fechar</button>
      </div>
    `;
    popup.style.opacity = 1;
    popup.style.visibility = 'visible';
  });
});

function fecharpopup(){
    popup.style.opacity = 0;
    popup.style.visibility = 'hidden';
    popupContent.innerHTML = "";
}