var compt1 = 1;
var p1 = document.getElementById("price1").innerText;
document.getElementById("qt-plus1").addEventListener("click", function () {
  compt1 = compt1 + 1;
  document.getElementById("qt1").innerText = compt1;
  var t1 = (document.getElementById("full-price1").innerText = +p1 * compt1);
  return t1;
});

document.getElementById("qt-minus1").addEventListener("click", function () {
  if (compt1 > 0) {
    compt1 = compt1 - 1;
    document.getElementById("qt1").innerText = compt1;
    var t1 = (document.getElementById("full-price1").innerText = +p1 * compt1);
    return t1;
  }
});

//

var compt2 = 1;
var p2 = document.getElementById("price2").innerText;
document.getElementById("qt-plus2").addEventListener("click", function () {
  compt2 = compt2 + 1;
  document.getElementById("qt2").innerText = compt2;
  var t2 = (document.getElementById("full-price2").innerText = +p2 * compt2);
  return t2;
});

document.getElementById("qt-minus2").addEventListener("click", function () {
  if (compt2 > 0) {
    compt2 = compt2 - 1;
    document.getElementById("qt2").innerText = compt2;
    var t2 = (document.getElementById("full-price2").innerText = +p2 * compt2);
    return t2;
  }
});

//

var compt3 = 1;
var p3 = document.getElementById("price3").innerText;
document.getElementById("qt-plus3").addEventListener("click", function () {
  compt3 = compt3 + 1;
  document.getElementById("qt3").innerText = compt3;
  var t3 = (document.getElementById("full-price3").innerText = +p3 * compt3);
  return t3;
});

document.getElementById("qt-minus3").addEventListener("click", function () {
  if (compt3 > 0) {
    compt3 = compt3 - 1;
    document.getElementById("qt3").innerText = compt3;
    var t3 = (document.getElementById("full-price3").innerText = +p3 * compt3);
    return t3;
  }
});

//document.getElementById("sstotal").innerText = t1 + t2 + t3;

document.getElementById("heart1").addEventListener("click", function () {
  if (document.getElementById("heart1").style.backgroundColor != "red") {
    document.getElementById("heart1").style.backgroundColor = "red";
  } else {
    document.getElementById("heart1").style.backgroundColor = "white";
  }
});

document.getElementById("heart2").addEventListener("click", function () {
  if (document.getElementById("heart2").style.background != "red") {
    document.getElementById("heart2").style.background = "red";
  } else {
    document.getElementById("heart2").style.background = "white";
  }
});

document.getElementById("heart3").addEventListener("click", function () {
  if (document.getElementById("heart3").style.background != "red") {
    document.getElementById("heart3").style.background = "red";
  } else {
    document.getElementById("heart3").style.background = "white";
  }
});

document.getElementById("remove1").addEventListener("click", function () {
  document.getElementById("article1").remove();
});

document.getElementById("remove2").addEventListener("click", function () {
  document.getElementById("article2").remove();
});

document.getElementById("remove3").addEventListener("click", function () {
  document.getElementById("article3").remove();
});
