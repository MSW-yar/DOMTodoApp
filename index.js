import InputEl from "./InputEl";
import HtmlEl from "./HtmlEl";
(function() {
  function liAttacher(e) {
    if (
      e.type == "click" ||
      (e.type == "keyup" && e.key == "Enter" )
    ) {
      let li = new HtmlEl("li", ul.getNode());
      let inpCheck = new InputEl(li.getNode(), "checkbox");
      inpCheck.attachHandler("onchange", e => {
        inpCheck.getNode().parentNode.style.textDecoration = e.target.checked
          ? "line-through"
          : "none";
      });
      li.insertText(`  ${input.getValue()}  `);
      let delBut = new HtmlEl("button", li.getNode());
      delBut.insertText("Delete");
      delBut.attachHandler("onclick", e => {
        let tr = e.target;
        delBut.removeChild(tr.parentNode, tr.parentNode.parentNode);
      });
    }
  }
  let app = document.querySelector("#app");
  let input = new InputEl(app);
  input.attachHandler("onkeyup",liAttacher);
  let button = new HtmlEl("button", app);
  button.insertText("Click Me");
  let ul = new HtmlEl("ul", app);
  button.attachHandler("onclick", liAttacher);
})();
