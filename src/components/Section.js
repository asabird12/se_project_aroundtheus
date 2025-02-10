export default class Section {
  constructor({ renderer }, cardSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(cardSelector);
  }

  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
    //renders all elements on the page
    //call the renderer() function
  }

  addItem(element) {
    this._container.prepend(element);
    //takes DOM element and adds it to the container
    //should be called when adding an individual card to the DOM
  }
}
