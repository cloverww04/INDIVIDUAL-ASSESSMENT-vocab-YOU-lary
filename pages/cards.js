import filterDropDown from '../components/filter';
import renderToDOM from '../utils/renderToDOM';

const emptyCards = () => {
  const domString = '<h1>No Cards</h1>';
  renderToDOM('#main-container', domString);
};

const showCards = (array) => {
  let domString = '<div id="filter-container"></div>';
  array.forEach((item) => {
    domString += `
        <div class="card">
  <h5 class="card-header">${item.language}</h5>
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">${item.definition}</p>
    <a id="edit-card-btn--${item.firebaseKey}" class="btn btn-primary">Edit</a>
    <a id="delete-card-btn--${item.firebaseKey}" class="btn btn-danger">Delete</a>
  </div>
</div>`;
  });
  renderToDOM('#main-container', domString);
  filterDropDown();
};

export { showCards, emptyCards };
