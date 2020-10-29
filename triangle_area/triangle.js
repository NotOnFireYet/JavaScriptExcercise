//Найти площадь треугольника с заданными сторонами

let BtnShow = document.querySelector("button");
let output = document.querySelector("h1");

BtnShow.addEventListener("click", () => {
    let side1 = document.getElementById(1).value;
    let side2 = document.getElementById(2).value;
    let side3 = document.getElementById(3).value;
    
    let res = getArea(side1, side2, side3);

    output.innerText = res;
})

function getArea(side1, side2, side3){
    s = (side1+side2+side3)/2;
    return Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
}