import addCardForm from '../forms/addCardForm';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // click event for showing form for adding a card
    if (e.target.id.includes('submit-button')) {
      addCardForm(user);
    }
  });
};

export default domEvents;
