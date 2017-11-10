function Chronometer(leftBtnId, rightBtnId, displayId, splitsId) {
  this.leftBtn = document.getElementById(leftBtnId);
  this.rightBtn = document.getElementById(rightBtnId);
  this.display = document.getElementById(displayId);
  this.splits = document.getElementById(splitsId);
  this.time = undefined;
  this.timeIntervalId = undefined;
}

Chronometer.onTimeUpdates = function(chronometer) {
  now = new Date();
  date = new Date(now.getTime() - chronometer.time.getTime());
  chronometer.setTime(date);
};

Chronometer.prototype.startClick = function() {
  this.setStopBtn();
  this.setSplitBtn();

  if (!this.time) {
    this.time = new Date();
  }
  this.timeIntervalId = setInterval(Chronometer.onTimeUpdates, 1000, this);
};

Chronometer.prototype.stopClick = function() {
  this.setStartBtn();
  this.setResetBtn();
  clearInterval(this.timeIntervalId);
};

Chronometer.prototype.splitClick = function() {
  currentTime = document.createElement('li');
  currentTime.appendChild(document.createTextNode(this.display.innerText));
  this.splits.appendChild(currentTime);
};

Chronometer.prototype.resetClick = function() {
  this.splits.innerHTML = '';
  this.time = undefined;
  this.setTime();
}

Chronometer.prototype.setStartBtn = function() {
  this.leftBtn.innerHTML = '';
  this.leftBtn.classList.remove('stop');
  this.leftBtn.classList.add('start');
  this.leftBtn.appendChild(document.createTextNode('START'));
};

Chronometer.prototype.setStopBtn = function() {
  this.leftBtn.innerHTML = '';
  this.leftBtn.classList.remove('start');
  this.leftBtn.classList.add('stop');
  this.leftBtn.appendChild(document.createTextNode('STOP'));
};

Chronometer.prototype.setSplitBtn = function() {
  this.rightBtn.innerHTML = '';
  this.rightBtn.classList.remove('reset');
  this.rightBtn.classList.add('split');
  this.rightBtn.appendChild(document.createTextNode('SPLIT'));
};

Chronometer.prototype.setResetBtn = function() {
  this.rightBtn.innerHTML = '';
  this.rightBtn.classList.remove('split');
  this.rightBtn.classList.add('reset');
  this.rightBtn.appendChild(document.createTextNode('RESET'));
};

Chronometer.prototype.setTime = function(date) {
  parsedTime = (date === undefined) ? '00:00' : ('0' + date.getMinutes()).slice(-2) + ":" + ( '0' + date.getSeconds()).slice(-2);
  this.display.innerHTML = '';
  this.display.appendChild(document.createTextNode(parsedTime));
};
