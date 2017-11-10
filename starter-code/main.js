var chronometer = new Chronometer("btnLeft", "btnRight", "display", "splits", "millis");
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
  if (this.classList.contains('split')) {
    chronometer.splitClick();
  } else {
    chronometer.resetClick();
  }
});
