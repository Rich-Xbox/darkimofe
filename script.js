
let tugmaQorongu = document.querySelector(".black");
let tugmaYorug = document.querySelector(".white");
let darkLogo = document.querySelector(".dark-logo");
let lightLogo = document.querySelector(".light-logo");
function qorongu() {
    document.body.classList.add("dark");
    document.body.classList.remove("light");

    darkLogo.style.display = "block";
    lightLogo.style.display = "none";
}
function yorug() {
    document.body.classList.add("light");
    document.body.classList.remove("dark");

    darkLogo.style.display = "none";
    lightLogo.style.display = "block";
}
tugmaQorongu.addEventListener("click", qorongu);
tugmaYorug.addEventListener("click", yorug);
