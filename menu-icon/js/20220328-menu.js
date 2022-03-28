let mouseOver = document.getElementById("box");
let Topchild = mouseOver.firstElementChild;
let Bottomchild = mouseOver.lastElementChild;
let Midchild = Topchild.nextElementSibling;
mouseOver.addEventListener("mouseover", event => {
    Topchild.style.transform = "translateY(40px) rotate(45deg)";
    Bottomchild.style.transform = "translateY(-40px) rotate(-45deg)";
    Midchild.style.display = "none";
});
mouseOver.addEventListener("mouseout", event => {
    Topchild.style.transform = "";
    Bottomchild.style.transform = "";
    Midchild.style.display = "block";
});