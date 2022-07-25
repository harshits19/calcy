var screen = document.getElementById("screen"); //selecting the textarea (output screen)
var btns = document.querySelectorAll("button"); //selecting all the buttons
screen.value = "";
var onScreenNum = ""; //the on-screen initial value

for (keys of btns) {
  keys.addEventListener("click", function (event) {
    //adding click event for each button, when button is clicked its value is stored in a variable
    var btnInnerText = this.innerHTML; //this means event.target
    setKeys(btnInnerText);
  });
}

//adding event for pressing keyboard key, and storing key value in a variable
document.addEventListener("keypress", function (event) {
  var keyValue = event.key;
  console.log(event.key);
  setKeys(keyValue);
});

//function to add the key value to the onscreen(as a string) and evaluate the expression(string)
//the key values are added to screen as characters of string and then it is evaluated using eval()
function setKeys(keyValue) {
  if (keyValue == "x") {
    keyValue = "*"; //to evaluate multiply we first have to change the keyvalue from x to *
    onScreenNum += keyValue; //adding this keyvalue to onscreen string variable
    screen.value = onScreenNum; //updating the output screen
  } else if (keyValue == "c") {
    onScreenNum = "";
    screen.value = onScreenNum;
  } else if (keyValue == "=") {
    onScreenNum = eval(onScreenNum); //default fn in Js to evaluate a string
    screen.value = ((onScreenNum - Math.floor(onScreenNum)) !== 0) ? onScreenNum.toFixed(2) : onScreenNum;
  } else if (keyValue == "←") {
    //for backspace button
    onScreenNum = onScreenNum.slice(0, onScreenNum.length - 1);
    screen.value = onScreenNum;
  } else {
    onScreenNum += keyValue;
    screen.value = onScreenNum;
    console.log(keyValue)
  }
}
