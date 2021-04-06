let acc = document.querySelectorAll(".item__boton");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    let panel =this.nextElementSibling;
    panel.classList.toggle("active");
    this.classList.toggle("arrow-open");
  });
}

//Accordeon second page
let acc1 = document.querySelectorAll(".filter__item--boton");
let k;

for (k = 0; k < acc.length; k++) {
  acc1[k].addEventListener("click", function() {
    let panel1 =this.nextElementSibling;
    panel1.classList.toggle("active");
    this.classList.toggle("arrow-open");
  });
}

