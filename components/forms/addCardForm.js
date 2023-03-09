import renderToDOM from '../../utils/renderToDOM';

const addCardForm = (obj) => {
  const domString = `<form id="${obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'submit-card'}" class="mb-4">
 <div class="mb-3">
 <label for="title-input" class="form-label">Title</label>
 <input type="text" class="form-control" id="title-input" placeholder="Title" value="${obj.title || ''}" required>
</div>
<div class="mb-3">
<label for="language-select-input" class="form-label">Select language</label>
<select id="language-select-input" class="form-select" aria-label="language select">
  <option selected>Select a language</option>
  <option value="JavaScript"}">JavaScript</option>
  <option value="HTML"}">HTML</option>
  <option value="CSS"}">CSS</option>
</select>
</div>
<div class="mb-3">
 <label for="definition-input" class="form-label">Definition</label>
 <input type="textarea" class="form-control" id="definition-input" value="${obj.definition || ''}" required>
</div>
<button id="add-card-btn" type="submit" class="btn btn-success">Submit</button>
 </form>`;
  renderToDOM('#main-container', domString);
};
export default addCardForm;
