var chronometer = new Chronometer("btnLeft", "btnRight", "display");
// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function () {
  if (this.classList.contains('start')) {
    chronometer.startClick();
  } else {
    chronometer.stopClick();
  }
});

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {
  console.log("Right button clicked");
});
