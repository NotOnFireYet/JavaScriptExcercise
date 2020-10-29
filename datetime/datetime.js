//Показать число и время в фомате: день недели + часов + PM/AM + минут + секунд

let BtnShow = document.querySelector("button");
let output = document.querySelector("h1");

BtnShow.addEventListener("click", () => {
    let today = new Date();

    let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", 
    "Thursday", "Friday", "Saturday"];

    let day = today.getDay();
    let hour = today.getHours()
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let pp;
    if (hour >= 12){
        pp = 'PM';
        hour = hour - 12;
    } else {
        pp = 'AM';
    }
    
    output.innerText = "Current date: " + daylist[day] + " " + hour + pp + ":"+ minute + ":" + second;

})