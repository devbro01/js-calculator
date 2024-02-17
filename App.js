const display = document.querySelector("#display");

function AppendToDisplay(data) {
  if (!(display.value == "Error")) {
    display.value += data;
  } else {
    ClearDisplay();
  }
}

function ClearDisplay() {
  display.value = "";
}

function Calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
