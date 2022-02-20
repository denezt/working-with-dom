const body = document.body;
const div = document.querySelector("div");
const span1 = document.querySelector("#hello");
const span2 = document.querySelector("#bye");
// Displaying the values from all custom datasets.
console.log(span1.dataset);
console.log(span1.dataset.test);
console.log(span1.dataset.longerName);
// Adding, another custom dataset
span1.dataset.newDataName = "hi";
