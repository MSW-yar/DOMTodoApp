export default class HtmlEl {
  constructor(tag, parent) {
    this.element = document.createElement(tag);
    this.insertSelf(parent);
  }
  getNode() {
    return this.element;
  }
  insertChild(child, parent = this.element) {
    return parent.appendChild(child);
  }
  insertSelf(parent) {
    this.insertChild(this.element, parent);
  }
  insertText(text) {
    this.insertChild(document.createTextNode(text));
  }
  attachHandler(type, callback) {
    this.element[type] = callback;
  }
  removeChildren(el = this.element) {
    for (let i in el.children) {
      el.children[i].remove();
    }
  }
  removeChild(child, parent = this.element) {
    parent.removeChild(child);
  }
  removeSelf() {
    this.removeChild(
      this.element.parentNode,
      this.element.parentNode.parentNode
    );
  }
}
