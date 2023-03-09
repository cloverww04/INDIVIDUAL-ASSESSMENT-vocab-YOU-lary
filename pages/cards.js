import renderToDOM from '../utils/renderToDOM';

const emptyCards = () => {
  const domString = '<h1>No Cards</h1>';
  renderToDOM('#main-container', domString);
};

const showCards = (array) => {
  let domString = '';
  array.forEach((item) => {
    domString += `
        <div class="card">
  <h5 class="card-header">${item.language}</h5>
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">${item.definition}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;
  });
  renderToDOM('#main-container', domString);
};

export { showCards, emptyCards };
