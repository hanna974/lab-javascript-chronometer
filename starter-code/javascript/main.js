var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

var intervalId1;
var intervalId2;

function printTime() {
    intervalId1 = setInterval(printMinutes, 1000);
    intervalId2 = setInterval(printSeconds, 1000);
}

function printMinutes() {
    let minutes = chronometer.getMinutes();
    let twoDigitsMinute = chronometer.twoDigitsNumber(minutes);
    minDec.innerHTML = twoDigitsMinute[0];
    minUni.innerHTML = twoDigitsMinute[1];
}

function printSeconds() {
    let secondes = chronometer.getSeconds();
    let twoDigitsSeconde = chronometer.twoDigitsNumber(secondes);
    secDec.innerHTML = twoDigitsSeconde[0];
    secUni.innerHTML = twoDigitsSeconde[1];
}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {
    chronometer.stopClick()
    clearInterval(intervalId1, intervalId2);
}

function setStartBtn() {
    chronometer.startClick()
    printTime()
}

function setSplitBtn() {
    let li = document.createElement("li");
    li.textContent = `${minDec.innerHTML}${minUni.innerHTML}:${secDec.innerHTML}${secUni.innerHTML}`;
    document.getElementById("splits").appendChild(li);
}

function setResetBtn() {
    chronometer.resetClick();
    document.getElementById("splits").innerHTML = "";
}

btnLeft.addEventListener("click", function () {
    btnLeft.classList.toggle("start");
    btnLeft.classList.toggle("stop");
    btnRight.classList.toggle("reset");
    btnRight.classList.toggle("split");
    if (btnLeft.classList.contains("start")) {
        btnLeft.innerHTML = "START";
        btnRight.innerHTML = "RESET";
        setStopBtn();
    } else {
        btnLeft.innerHTML = "STOP";
        btnRight.innerHTML = "SPLIT";
        setStartBtn();
    }
});

btnRight.addEventListener("click", function () {
    if (btnRight.classList.contains("split")) {
        setSplitBtn();
    } else {
        setResetBtn();
    }
});