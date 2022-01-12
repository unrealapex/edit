var editor = document.querySelector("#editor");
var charCount = document.querySelector("#characters");
var wordCount = document.querySelector("#words");

editor.addEventListener("input", function () {
  if (editor.textContent.length != 0) {
    wordCount.innerHTML = `Words: ${editor.textContent.split(/\s+/).length}`;
    charCount.innerHTML = `Characters: ${editor.textContent.length}`;
  } else {
    wordCount.innerHTML = "Words: 0";
    charCount.innerHTML = "Characters: 0";
  }
});
