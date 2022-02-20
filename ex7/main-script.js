const body = document.body;
const div = document.querySelector("div");
const span1 = document.querySelector("#hello");
const span2 = document.querySelector("#bye");

// Displaying the classes
span1.classList.add("new-class");
console.log(span1.classList);
// Remove after 1 second class was loaded
setTimeout(() => {span1.classList.remove("hello1");}, 1000);
/**
* Automatically remove or add class if not available
* optional: 'true' will automatically add
* optional: 'false' will automatically remove
*/
setTimeout(
() =>{
  span1.classList.toggle("hello2", false);
  span1.classList.toggle("hello3", true);
}, 2500);
