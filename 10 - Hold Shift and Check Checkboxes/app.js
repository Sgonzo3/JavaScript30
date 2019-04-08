const inputs = document.querySelectorAll('input');

let arr = [];
let firstChecked;
let lastChecked;

function checkMark(e) {
  let inBetween = false;
  if(e.shiftKey && this.checked ) {
     inputs.forEach(checkbox => {
       if(checkbox === this || checkbox === lastChecked) {
         inBetween = !inBetween;
       }

       if(inBetween) {
         checkbox.checked = true;
       }
     });
  }
  lastChecked = this;
}

inputs.forEach(input => input.addEventListener('click', checkMark));
