export default class Section {
  constructor({ items, renderer }, cardSelector) {
    this.items = items;
    this.renderer = renderer;
    this.container = document.querySelector(cardSelector);
  }

  renderItems() {
    this.items.forEach((item) => {
      this.renderer(item);
    });
    //renders all elements on the page
    //call the renderer() function
  }

  addItem(element) {
    this.container.prepend(element);
    //takes DOM element and adds it to the container
    //should be called when adding an individual card to the DOM
  }
}
