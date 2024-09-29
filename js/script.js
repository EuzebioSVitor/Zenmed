const cards = document.querySelectorAll('.card');
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup_content');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const cardTitle = card.querySelector('.card_title').textContent;
    const content = cardContent[cardTitle];

    popupContent.innerHTML = `
      <p>${content}</p>
      <div class="center">
      <button onclick="fecharpopup()" class="popup_close">X</button>
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