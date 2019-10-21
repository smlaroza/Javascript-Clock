function displayTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = changeTime(m);
    s = changeTime(s);
    document.getElementById('hexdisplay').innerHTML = 
    "#" + h + m + s
    var t = setTimeout(displayTime, 500);
  }
  function changeTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
  }

  setInterval(
    function () {
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      document.body.style.backgroundColor = "#"+randomColor;
    },2000);