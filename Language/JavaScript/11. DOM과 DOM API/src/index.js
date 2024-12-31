// let $date = document.getElementById("date");
// console.log($date);

// let dateElement = document.querySelector("div.date");
// console.dir(dateElement);

// let $date2 = document.querySelectorAll("div.date");
// console.log($date2);

// let $date3 = document.getElementsByClassName("date");
// console.log($date3);

// let $div = document.getElementsByTagName("div");
// console.log($div);
    
// let $clock = document.getElementById("clock");
// $clock.className = "new clock";
// console.log($clock.className);

// let clockElement = document.querySelector("div.clock");
// clockElement.id = "new-clock";
// console.log(clockElement.id);

// let $clock2 = document.getElementById("clock");
// $clock2.classList.add("new");
// console.log($clock2);

// $clock2.classList.remove("new");
// console.log($clock2);

// let $clock = document.getElementById("clock");
// $clock.textContent = "12:00";
// console.log($clock.textContent);

// let $clock = document.getElementById("clock");
// $clock.style.color = "red";
// $clock.style.fontSize = "30px";
// console.log($clock);

// let $season = document.createElement("div");
// $season.className = "season";
// $season.id = "season";
// $season.textContent = "가을";
// console.log($season);   

// let $season = document.createElement("div");
// $season.className = "season";
// $season.id = "season";

// let $seasonText = document.createTextNode("가을");

// let $todayInfo = document.querySelector("div.today-info");
// $todayInfo.appendChild($season);
// $season.appendChild($seasonText);
// console.log($todayInfo);

let $button = document.createElement("button");
$button.id = "button";
$button.classList.add("button");
$button.textContent = "버튼";
$button.addEventListener("click", () => {
    window.alert("click click");
});

let $todayInfo = document.querySelector("div.today-info");
$todayInfo.appendChild($button);

console.log($todayInfo);

