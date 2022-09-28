var art = document.querySelectorAll(".product");
var plus = document.querySelectorAll(".qt-plus");
var moin = document.querySelectorAll(".qt-minus");
//var qte = document.querySelectorAll(".qt");
//var unitprice = document.querySelectorAll(".price");
//var artprice = document.querySelectorAll("full-price");
//var stt = document.querySelector("#sstotal");
//var total = document.querySelector("#total");
var coeur = document.querySelectorAll(".favori");
var suprim = document.querySelectorAll(".remove");

//function soustotal(a, b) {
//for (let i = 0; i < art.length; i++) {
//artprice[i] = a[i].innerText * b[i].innerText;
// }
//}
function somme() {
  var qte = document.querySelectorAll(".qt");
  var unitprice = document.querySelectorAll(".price");
  var total = document.querySelector("#total");

  var sum = 0;

  for (let i = 0; i < unitprice.length; i++) {
    sum = sum + unitprice[i].innerHTML * qte[i].innerHTML;
  }

  total.innerHTML = sum;
}

for (let i = 0; i < art.length; i++) {
  plus[i].addEventListener("click", function () {
    plus[i].previousElementSibling.innerText++;
    //soustotal(qte, unitprice);
    somme();
  });
  moin[i].addEventListener("click", function () {
    if (moin[i].nextElementSibling.innerText > 0) {
      moin[i].nextElementSibling.innerText--;
      //soustotal(qte, unitprice);
      somme();
    }
  });
}

for (let i = 0; i < coeur.length; i++) {
  coeur[i].addEventListener("click", function () {
    coeur[i].classList.toggle("Rouge");
  });
}

for (let i = 0; i < art.length; i++) {
  suprim[i].addEventListener("click", function () {
    suprim[i].parentElement.parentElement.remove();
    somme();
  });
}
