const wordField = document.getElementById('wordField');

const checkWord = () => {
  const word = wordField.value;
  const reverse = reverseString(word);
  const message = document.getElementById('message');
  if (word != reverse) {
    message.innerText = 'Not a palindrome';
  } else {
    message.innerText = 'Is a palindrome';
  }
};

const reverseString = (str) => {
  return str.split('').reverse().join('');
};
