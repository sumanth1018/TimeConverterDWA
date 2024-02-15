let hoursInputE1 = document.getElementById("hoursInput");
let minutesInputE1 = document.getElementById("minutesInput");
let timeInSecondsE1 = document.getElementById("timeInSeconds");
let errorMsgE1 = document.getElementById("errorMsg");
let convertBtnE1 = document.getElementById("convertBtn");

function convertToSeconds() {
    let hoursInputValue = hoursInputE1.value;
    let minutesInputValue = minutesInputE1.value;
    if (hoursInputValue === "") {
        errorMsgE1.textContent = "Please enter a valid no.of Hours";
        errorMsgE1.classList.add("error-msg");
        minutesInputE1.value = "";
    } else if (minutesInputValue === "") {
        errorMsgE1.textContent = "Please enter a valid no.of minites";
        errorMsgE1.classList.add("error-msg");
        hoursInputE1.value = "";
    } else {
        errorMsgE1.textContent = "";
        let result = 0;
        let hoursToSeconds = parseInt(hoursInputValue) * 60 * 60;
        let minitiesToSeconds = parseInt(minutesInputValue) * 60;
        result = hoursToSeconds + minitiesToSeconds;
        timeInSecondsE1.textContent = result + "s";
        timeInSecondsE1.classList.add("time-in-seconds");
        minutesInputE1.value = "";
        hoursInputE1.value = "";
    }
}

convertBtnE1.addEventListener("click", convertToSeconds);