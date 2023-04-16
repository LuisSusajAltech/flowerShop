const zgjidhja5 = retZgj(4);

const returnLastDayOfTheMonth = (month) => {
    let d = new Date();
    d.setMonth(month + 1, 0);
    const options = {month:"long", day:"2-digit",weekday:"long"};
    d = d.toLocaleDateString(`en-EN`, options).replace(`/\//g`, ``)
    return d;
}

zgjidhja5.innerHTML = `<input type="number" min="0" max="11" id="monthInput"><button id="checkLastDate">Submit</button><span id="lastDay">Month is not selected</span>`;

const input = document.getElementById("monthInput");
const checkLastDate = document.getElementById("checkLastDate");
const showLastDay = document.getElementById("lastDay");

checkLastDate.addEventListener("click", function(){
    showLastDay.innerHTML = `The last day of the month is: <br> ${returnLastDayOfTheMonth(parseInt(input.value))}`
})