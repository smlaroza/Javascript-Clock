function displayTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = changeTime(m);
    s = changeTime(s);
    document.getElementById('jsclock').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(displayTime, 500);
  }
  function changeTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
  }