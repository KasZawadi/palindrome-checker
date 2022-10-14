// html values that are being changed
const btn = document.querySelector(".btn");
const paragraph = document.querySelector(".result-1");

// were calling an event to check if it is a palindrome.
btn.addEventListener("click", palindrome);

/* palindrome are words that are spelled the same 
in reverse. so like MADAM DAD, etc, */

function palindrome() {
  const word = document.querySelector(".input-text").value;

  let len = word.length;

  let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
  let end = word.substring(len - Math.floor(len / 2)).toLowerCase();

  let flip = [...end].reverse().join("");

  if (flip === start) {
    paragraph.innerHTML = `${word} is a palindrome!`;
  } else {
    paragraph.innerHTML = `${word} is not a palindrome.`;
  }
}
