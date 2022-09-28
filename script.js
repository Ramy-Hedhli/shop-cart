//déclaration des variable
var art = document.querySelectorAll(".product");
var plus = document.querySelectorAll(".qt-plus");
var moin = document.querySelectorAll(".qt-minus");
var coeur = document.querySelectorAll(".favori");
var suprim = document.querySelectorAll(".remove");
//prix de l'article en fonction de la quantité
function soustotal() {
  var qte = document.querySelectorAll(".qt");
  var unitprice = document.querySelectorAll(".price");
  var artprice = document.querySelectorAll(".full-price");
  for (let i = 0; i < art.length; i++) {
    artprice[i].innerText = +unitprice[i].innerText * +qte[i].innerText;
    console.log(artprice[i]);
  }
}
//prix total
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
//exécution
for (let i = 0; i < art.length; i++) {
  plus[i].addEventListener("click", function () {
    plus[i].previousElementSibling.innerText++;
    soustotal();
    somme();
  });
  moin[i].addEventListener("click", function () {
    if (moin[i].nextElementSibling.innerText > 0) {
      moin[i].nextElementSibling.innerText--;
      soustotal();
      somme();
    }
  });
  coeur[i].addEventListener("click", function () {
    coeur[i].classList.toggle("Rouge");
  });
  suprim[i].addEventListener("click", function () {
    suprim[i].parentElement.parentElement.remove();
    somme();
  });
}
