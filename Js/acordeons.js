let acc = document.querySelectorAll(".item__boton");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    let panel =this.nextElementSibling;
    panel.classList.toggle("active");
    this.classList.toggle("arrow-open");
  });
}


