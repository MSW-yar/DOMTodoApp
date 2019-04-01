import InputEl from "./InputEl";
import HtmlEl from "./HtmlEl";
(function() {
  let app = document.querySelector("#app");
  let input = new InputEl(app);
  let button = new HtmlEl("button", app);
  button.insertText("Click Me");
  let ul = new HtmlEl("ul", app);
  button.attachHandler("onclick", e => {
    let li = new HtmlEl("li", ul.getNode());
    let inpCheck = new InputEl(li.getNode(), "checkbox");
    inpCheck.attachHandler("onchange", e => {
      let deco = inpCheck.getNode().parentNode.style;
      e.target.checked ? (deco.textDecoration = "line-through") : (deco.textDecoration = "none");
    });
    li.insertText(`  ${input.getValue()}  `);
    let delBut = new HtmlEl("button", li.getNode());
    delBut.insertText("Delete");
    delBut.attachHandler("onclick", e => {
      let tr = e.target;
      delBut.removeChild(tr.parentNode, tr.parentNode.parentNode);
    });
  });
})();
