let screen = document.getElementById("screen");
let btns = document.querySelectorAll("button");
let onScreenNum = "";
screen.value = "";

for (keys of btns) {
  keys.addEventListener("click", function (event) {
    let btnInnerText = this.innerHTML;
    setKeys(btnInnerText);
  });
}

document.addEventListener("keypress", function (event) {
  let keyValue = event.key;
  setKeys(keyValue);
});

function setKeys(keyValue) {
  if (keyValue == "x") {
    keyValue = "*";
    onScreenNum += keyValue;
    screen.value = onScreenNum;
  } else if (keyValue == "C" || keyValue == "c") {
    onScreenNum = "";
    screen.value = onScreenNum;
  } else if (keyValue == "=" || keyValue == "Enter") {
    onScreenNum = eval(onScreenNum);
    screen.value = ((onScreenNum - Math.floor(onScreenNum)) !== 0) ? onScreenNum.toFixed(2) : onScreenNum;
  } else if (keyValue == "←") {
    onScreenNum = onScreenNum.slice(0, onScreenNum.length - 1);
    screen.value = onScreenNum;
  } else {
    onScreenNum += keyValue;
    screen.value = onScreenNum;
  }
}
