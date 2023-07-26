abstract class Component {
  element: Element;
  parentElement: Element;

  constructor(parentElement: Element, tag: string, className = "") {
    this.element = document.createElement(tag);
    this.element.className = className;
    this.parentElement = parentElement;
  }

  abstract render(): void;
}

export default Component;
