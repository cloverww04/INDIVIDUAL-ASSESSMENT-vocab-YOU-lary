import {
  getCards, deleteCard, getSingleCard, filterByLanguage
} from '../../api/cardData';
import { showCards } from '../../pages/cards';
import addCardForm from '../forms/addCardForm';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // click event for showing form for adding a card
    if (e.target.id.includes('submit-button')) {
      addCardForm(user);
    }
    // click event for delete book
    if (e.target.id.includes('delete-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteCard(firebaseKey).then(() => {
        getCards(user.uid).then(showCards);
      });
    }
    // click event for edit card
    if (e.target.id.includes('edit-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey).then((cardObj) => addCardForm(cardObj));
    }
  });

  document.querySelector('#main-container').addEventListener('change', (e) => {
    if (e.target.id.includes('filter-language-select-input')) {
      const filterValue = e.target.value;
      filterByLanguage(user.uid, filterValue).then(showCards);
    }
  });
};

export default domEvents;
