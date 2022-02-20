const body = document.body;
const div = document.querySelector("div");
const span1 = document.querySelector("#hello");
const span2 = document.querySelector("#bye");

setTimeout(() => {console.log(span1.setAttribute("id","my-new-id"));},1000);
setTimeout(() => {span1.id = "my-newer-id";},1500);
span1.title = "hi there!";
const title = span1.getAttribute("title");
console.log(title);
