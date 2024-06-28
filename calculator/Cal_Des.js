
let string = '';

let buttons = document.querySelectorAll('.container1');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.innerHTML;
    if (buttonText === '=') {
      try {
        string = eval(string);
        document.querySelector('input').value = string;
      } catch (error) {
        document.querySelector('input').value = 'Error';
      }
    } else if (buttonText === 'C') {
      string = '';
      document.querySelector('input').value = string;
    } else if (buttonText === 'Ac') {
      string = '';
      document.querySelector('input').value = string;
    }  else if (e.target.innerHTML === 'DEL') {
        string = string.slice(0, -1); // remove last character
        document.querySelector('input').value = string;
      }
    else {
      string = string + buttonText;
      document.querySelector('input').value = string;
    }
  });
});