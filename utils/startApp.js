import { getCards } from '../api/cardData';
import domEvents from '../components/events/domEvents';
import navigationEvents from '../components/events/navigationEvents';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import { showCards } from '../pages/cards';
import formEvents from '../components/events/formEvents';

const startApp = (user = null) => {
  domBuilder(user);
  domEvents(user);
  formEvents(user);
  navBar();
  navigationEvents(user);
  if (user) {
    getCards(user.uid).then((cards) => showCards(cards));
  }
};

export default startApp;
