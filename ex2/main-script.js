const body = document.body;
const div = document.createElement("div");
/**
* This is dangerous and consider an unsafe practice.
* Essentially, we are allowing the user the ability to
* enter unchecked code.
*/
div.innerHTML = "<strong>Hello World</strong>";
body.appendChild(div);
