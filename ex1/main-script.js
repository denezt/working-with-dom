const body = document.body;
// body.append("Hello World","!");
const div = document.createElement("div");
// div.innerText = "Hello World!";
div.textContent = "Bye Bye World!";

// The 'append' function allows you to append a string or element.
// body.append(div);
// The 'appendChild' functions allows you to only append elements.
body.appendChild(div);

// Prints out all of the content from the 'div' element.
console.log(div.textContent); // Copy the code from HTML

// Will only print the text that is available on the page.
console.log(div.innerText); // Display as from browser
