import { createCard, getCards, updateCard } from '../../api/cardData';
import { showCards } from '../../pages/cards';

const currentTime = Date.now();

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // Click event for adding a card
    if (e.target.id.includes('submit-card')) {
      const payload = {
        title: document.querySelector('#title-input').value,
        definition: document.querySelector('#definition-input').value,
        language: document.querySelector('#language-select-input').value,
        uid: user.uid,
        time: currentTime,
      };
      createCard(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateCard(patchPayload).then(() => {
          getCards(user.uid).then(showCards);
        });
      });
    }
    // click event for editing a card
    if (e.target.id.includes('edit-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title-input').value,
        definition: document.querySelector('#definition-input').value,
        language: document.querySelector('#language-select-input').value,
        firebaseKey,
        time: currentTime,
      };
      updateCard(payload).then(() => {
        getCards(user.uid).then(showCards);
      });
    }
  });
};

export default formEvents;
