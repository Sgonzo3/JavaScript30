window.addEventListener('keyup', konami);

let check = [];
let keys = [
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'Enter'
];
let code = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightEnter';

function konami(e) {
  console.log(e.key);
  check.push(e.key);

  if(keys.includes(e.key)) {
    let test = check.join('');
    if(test === code){
      alert('KONAMI CODE!!!!');
      check = [];
    }
    console.log(test);
  } else {
    check = [];

  }
}
