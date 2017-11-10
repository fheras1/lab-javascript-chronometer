function Chronometer(leftBtnId, rightBtnId) {
  this.leftBtn = document.getElementById(leftBtnId);
  this.rightBtn = document.getElementById(rightBtnId);
}

Chronometer.prototype.startClick = function() {
  this.leftBtn.innerHTML = '';
  this.leftBtn.classList.remove('start');
  this.leftBtn.classList.add('stop');
  this.leftBtn.appendChild(document.createTextNode('STOP'));

  this.rightBtn.innerHTML = '';
  this.rightBtn.classList.remove('reset');
  this.rightBtn.classList.add('split');
  this.rightBtn.appendChild(document.createTextNode('SPLIT'));
};

Chronometer.prototype.stopClick = function() {
  this.leftBtn.innerHTML = '';
  this.leftBtn.classList.remove('stop');
  this.leftBtn.classList.add('start');
  this.leftBtn.appendChild(document.createTextNode('START'));

  this.rightBtn.innerHTML = '';
  this.rightBtn.classList.remove('split');
  this.rightBtn.classList.add('reset');
  this.rightBtn.appendChild(document.createTextNode('RESET'));
};
