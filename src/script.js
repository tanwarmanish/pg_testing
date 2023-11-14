import * as $ from "./utils.js";

const e = document.querySelector("#searchField");
e.addEventListener("input", (f) => {
  const value = $.trim(f.target.value);
  const isValid = $.validate(value);
  if (!isValid) {
    $.render("");
    return;
  }

  const result = $.calc(value);
  $.render(`=${result}`);
});
