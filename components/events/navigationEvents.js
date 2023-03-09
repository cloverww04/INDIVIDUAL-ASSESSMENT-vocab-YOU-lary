import { signOut } from '../../utils/auth';
import { getCards } from '../../api/cardData';
import { showCards } from '../../pages/cards';
import addCardForm from '../forms/addCardForm';

const navigationEvents = (user) => {
  document.querySelector('#logout-button').addEventListener('click', signOut);

  document.querySelector('#all-cards').addEventListener('click', () => {
    getCards(user.uid).then(showCards);
  });

  document.querySelector('#add-card').addEventListener('click', addCardForm);
};

export default navigationEvents;
