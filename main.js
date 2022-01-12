var editor = document.querySelector("#editor");
var charCount = document.querySelector("#characters");
var wordCount = document.querySelector("#words");
// check if local storage is availible
const hasLocalStorage = typeof Storage !== "undefined" ? true : false;

// retrieve editor content from local storage if it was stored there previously
if (hasLocalStorage && localStorage.getItem("editor-content") != undefined) {
  editor.textContent = localStorage.getItem("editor-content");
  wordCount.innerHTML = `Words: ${editor.textContent.split(/\s+/).length}`;
  charCount.innerHTML = `Characters: ${editor.textContent.length}`;
}

editor.addEventListener("input", function () {
  // remove local storage item every time a new change is made in the ditor
  if (hasLocalStorage && localStorage.getItem("editor-content") != undefined) {
    localStorage.removeItem("editor-content");
  }
  if (editor.textContent.length != 0) {
    // save the current editor state to local storage each time a change is made
    localStorage.setItem("editor-content", editor.textContent);
    wordCount.innerHTML = `Words: ${editor.textContent.split(/\s+/).length}`;
    charCount.innerHTML = `Characters: ${editor.textContent.length}`;
  } else {
    wordCount.innerHTML = "Words: 0";
    charCount.innerHTML = "Characters: 0";
  }
});
