import HtmlEl from "./HtmlEl";
export default class InputEl extends HtmlEl {
  constructor(app, type = "text") {
    super("input", app);
    this.element.type = type;
  }
  getValue() {
    let val = this.element.value;
    this.clearValue();
    return val;
  }
  clearValue() {
    this.element.value = "";
  }
}
