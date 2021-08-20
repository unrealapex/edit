// checks if the document is filled only with whitespace
const whiteSpaceRE = /^\s{1,}$/;

function updateStats() {
  // updates word and character count
  // copies the value of our textarea so any modifications we make don't affect it
  let inputValue = document.querySelector("textarea").value;
  // if the document isn't blank and it isn't just filled with spaces, change the word and character count, else make both zero
  if (inputValue.length !== 0 && !whiteSpaceRE.test(inputValue)) {
    if (inputValue.length !== 0) {
        inputValue = inputValue.replace(/(^\s*)|(\s*$)/gi, "");
        inputValue = inputValue.replace(/[ ]{2,}/gi, " ");
        inputValue = inputValue.replace(/\n /, "\n");
        document.querySelector("#words").innerHTML = "Words: " + inputValue.split(' ').length;
        document.querySelector("#characters").innerHTML = "Characters: " + inputValue.length;
    } else {
        document.querySelector("#words").innerHTML = "Words: " + 0;
        document.querySelector("#characters").innerHTML = "Characters: " + 0;
    }
}

