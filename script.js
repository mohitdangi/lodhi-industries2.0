
var int;
function setInt() {
  clearInterval(int);
  int = setInterval(function() {
    var btns = document.getElementsByName("carousel");
    for(var i = 0; i < btns.length; i++) {
      if(btns[i].checked) {
        btns[i].checked = false;
        if(i + 1 == btns.length) {
          btns[0].checked = true;
        }
        else {
          btns[i + 1].checked = true;
        }
        return;
      }
    }
  }, 5000); 
}
setInt();
let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
 