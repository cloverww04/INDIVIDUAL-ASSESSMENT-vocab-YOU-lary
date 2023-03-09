import { createCard, getCards, updateCard } from '../../api/cardData';
import { showCards } from '../../pages/cards';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // Click event for adding a card
    if (e.target.id.includes('add-card-btn')) {
      const payload = {
        title: document.querySelector('#title-input').value,
        definition: document.querySelector('#definition-input').value,
        language: document.querySelector('#language').value,
        uid: user.uid,
      };
      createCard(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateCard(patchPayload).then(() => {
          getCards(user.uid).then(showCards);
        });
      });
    }
    console.warn('submit button clicked');
    // click event for editing a card
    if (e.target.id.includes('update-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title-input').value,
        definition: document.querySelector('#definition-input').value,
        language: document.querySelector('#language').value,
        firebaseKey,
      };
      updateCard(payload).then(() => {
        getCards(user.uid).then(showCards);
      });
    }
  });
};

export default formEvents;
