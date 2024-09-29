export default class Section {
  constructor({ items, renderer }, cardSelector) {
    this._items = items;
    this._renderer = renderer;
    this._cardSelector = cardSelector;
  }

  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
    //renders all elements on the page
    //call the renderer() function
  }

  addItem(element) {
    this._cardSelector.prepend(element);
    //takes DOM element and adds it to the container
    //should be called when adding an individual card to the DOM
  }
}
