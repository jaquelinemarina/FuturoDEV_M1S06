// function boasVindas() {
//     alert('Seja bem-vindo!')
// }
// boasVindas()

//evento que altera a cor de fundo do h1 - mouseOver

let h1 = document.querySelector("h1");

h1.addEventListener("mouseover", function () {
    this.style.background = "rgba(83, 48, 117, 0.899)";
    this.style.color = "white";
});

//evento que retorna a cor de fundo do h1 - mouseOut

h1.addEventListener("mouseout", function () {
    this.style.background = "rgba(240, 248, 255, 0.868)";
    this.style.color = "rgb(97, 120, 169)";
});

//evento que mostra a frase abaixo do h1

let p = document.querySelector("h1");

p.addEventListener("mouseover", function () {
    let legenda = document.querySelector("#legenda");

    legenda.classList.remove("hide");
});

//evento que esconde a frase abaixo do h1

p.addEventListener("mouseout", function () {
    let legenda = document.querySelector("#legenda");

    legenda.classList.add("hide");
});