const line1Text = "Hello! I'm Nino Hägglund.";
const line2Text = "I'm a Web Developer.";
const typewriterLine1 = document.getElementById("typewriter-line1");
const typewriterLine2 = document.getElementById("typewriter-line2");

let index1 = 0;
let index2 = 0;


function typeLine1() {
  if (index1 < line1Text.length) {
    typewriterLine1.textContent += line1Text[index1];
    index1++;
    setTimeout(typeLine1, 80); 
  } else {
    setTimeout(typeLine2, 500); 
  }
}


function typeLine2() {
  if (index2 < line2Text.length) {
    typewriterLine2.textContent += line2Text[index2];
    index2++;
    setTimeout(typeLine2, 80);
  }
}

document.addEventListener("DOMContentLoaded", typeLine1);
