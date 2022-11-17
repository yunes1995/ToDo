/*----------------------clock ---------------------*/
function show_time() {
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var second = d.getSeconds();
    var years = d.getFullYear();
    var month = d.getMonth();
    var days = d.getDay();
    
    if (hours < 10) { hours = "0" + hours };
    if (minutes < 10) { minutes = "0" + minutes };
    if (second < 10) { second = "0" + second };
    if (month < 10) { month = "0" + month };
    if (days < 10) { days = "0" + days }
    document.getElementById("show_time").innerText = hours + ":" + minutes + ":" + second;
    document.getElementById("show_date").innerText = years + "-" + month + "-" + days;
    setTimeout(show_time, 1000);
}
show_time();
/*----------------------chose day for active ---------------------*/
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let whichDaysActive = new Date();
let todayName = weekday[whichDaysActive.getDay()];

let today = document.getElementById("spanDaysShow")
today.innerText = todayName;


/*----------------------add new task ---------------------*/
let counter = 0;
const btnAdd = document.getElementById("BtnAddTask");
const getTextToAdd = document.getElementById("textInput");



btnAdd.addEventListener("click", AddTaskToApp);

function AddTaskToApp() {

    let whichDays = document.getElementById("selectDay");
    let choseDay = document.getElementById(`${whichDays.value}`);

    console.log(counter)
    if (getTextToAdd.value == "") {
        alert("Insert The New Task")
    } else {
        counter++;
        let creatnewP = document.createElement("p");
        creatnewP.innerText = ` ✻ ${getTextToAdd.value}`
        choseDay.appendChild(creatnewP);
        getTextToAdd.value = "";
    }

}
const getAddNewTaskBox = document.querySelector(".addNewTask");

getAddNewTaskBox.addEventListener("mouseover" , () => {
    // document.querySelector(".addNewTask").style.backgroundColor = "red";
    getAddNewTaskBox.style.backgroundColor = "rgb(107 189 176 / 82%)";
});
getAddNewTaskBox.addEventListener("mouseout" , () => {
    getAddNewTaskBox.style.backgroundColor = "rgb(107 189 176 / 10%)";
})

console.log(getAddNewTaskBox);
/*--------------------performance----------------------*/

const btnAsseg = document.getElementById("arzyabi");
const spanForShowResult = document.getElementById("resultShow");

btnAsseg.addEventListener("click", Assessment);

function Assessment() {
    let x = + prompt("What percentage of the work did you do? (0-100)");
    let y = + prompt("How much progress did you make compared to last week? (0-100)");
    let z = + prompt("What percentage were you satisfied with yourself this week? (0-100)");
    let result = x + y + z;
    console.log(result);
    if(result>300){
        alert("The entered numbers are incorrect");
    }
    else{
        spanForShowResult.innerText = `Your score is ${result} of 100`;
    }

}



