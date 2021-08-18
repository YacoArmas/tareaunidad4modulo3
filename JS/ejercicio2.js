var text = document.getElementById("text");
var count = document.getElementById("count");

text.addEventListener("keyup", function () {
  count.innerText = text.value.length;
});
