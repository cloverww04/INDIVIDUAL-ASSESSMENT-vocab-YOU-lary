import renderToDOM from '../utils/renderToDOM';

const filterDropDown = () => {
  const domString = `<label for="filter-language-select-input" class="form-label">Select language</label>
    <select id="filter-language-select-input" class="form-select" aria-label="language select">
      <option selected value="All">All</option>
      <option value="JavaScript"}">JavaScript</option>
      <option value="HTML"}">HTML</option>
      <option value="CSS"}">CSS</option>
    </select>`;

  renderToDOM('#filter-container', domString);
};

export default filterDropDown;
