const body = document.body;
const div = document.createElement("div");
// Create another element with the other element.
const strong = document.createElement("strong");
// Add the text to the 'strong' element's 'innerText' attribute.
strong.innerText = "Hello World!";
// Add the 'strong' element to 'div' element.
div.append(strong);
// Add the 'strong' element to HTML Document.
body.append(div);
