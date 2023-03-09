import addCardForm from '../forms/addCardForm';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('add-card-btn')) {
      addCardForm(user);
    }
  });
};

export default domEvents;
