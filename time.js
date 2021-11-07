var countDownDate = new Date("jan 7, 2022 11:02:12").getTime();
var x = setInterval(function() {

  var now = new Date().getTime();

  var diff = countDownDate - now;
  var day = Math.floor(diff / (1000 * 60 * 60 * 24));
  var hr = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var sec = Math.floor((diff % (1000 * 60)) / 1000);
  document.getElementById("time").innerHTML = day + "Day " + hr + "hr "
  + min + "min " + sec + "sec ";
  if (diff < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "EXPIRED";
  }
}, 1000);