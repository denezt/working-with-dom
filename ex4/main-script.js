const body = document.body;
const div = document.querySelector('div');
const span1 = document.querySelector('#hello');
const span2 = document.querySelector('#bye');

// Remove from HTML Document.
setTimeout(()=>{
  console.log("Removing, span1");
  span1.remove();
},3000);

// Add it back to document.
setTimeout(()=>{
  console.log("Removing, span2");
  span2.remove();
  console.log("Adding, span1 again");
  div.append(span1);
},3500);

// Final removal from HTML
setTimeout(()=>{
  console.log("Removing, span1 again");
  div.appendChild(span2);
  div.removeChild(span1);
},4000);
