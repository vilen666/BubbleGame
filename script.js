let time = 60;
let timeInt;
let score = 0;
let hit = "0";
let timeRun = false;
function bubGenerator() {
    let bub = "";
    for (let i = 0; i < 208; i++) {
        bub += `<div class="bubble">${Math.floor(Math.random() * 10) + 1}</div>`;
    }
    document.querySelector("#bubContainer").innerHTML = bub;
}
function Timer() {
    if (time == 0) {
        clearInterval(timeInt);
        document.querySelector("#bubContainer").innerHTML = `<h1>Score: ${score}</h1>`;
    }
    // console.log(time);
    document.querySelector("#timer").textContent = time;
    time--;
}
function startTimer() {
    timeInt = setInterval(Timer, 1000);
}
function hitGenerator(rn) {
    hit = rn.toString();
    document.querySelector("#hit").textContent = rn;
}
function check() {
    document.querySelectorAll(".bubble").forEach(item => {
        item.addEventListener("click", () => {
            if (timeRun) {
                if (hit == item.textContent) {
                    score += 4;
                }
                else {
                    score -= 1;
                }
                document.getElementById("score").textContent = score;
                hitGenerator(Math.floor(Math.random() * 10) + 1);
            }
        });
    });
}
document.querySelector("#start").addEventListener("click", () => {
    if(timeRun)
    {
        alert(`Score: ${score}`);
        timeRun=false;
    }
    if(!timeRun)
    {
    time = 60;
    score = 0;
    document.querySelector("#score").textContent = score;
    clearInterval(timeInt);
    hitGenerator("X");
    document.querySelector("#timer").textContent = time;
    bubGenerator();
    startTimer();
    timeRun = true;
    hitGenerator(Math.floor(Math.random() * 10) + 1);
    check();
    }
});
document.querySelector("#pause").addEventListener("click", () => {
    timeRun = false;
    clearInterval(timeInt);
    hitGenerator("X");
});
document.querySelector("#resume").addEventListener("click", () => {
    if (!timeRun) {
        timeRun=true;
        startTimer();
        hitGenerator(Math.floor(Math.random() * 10) + 1);
    }
});
document.querySelector("#end").addEventListener("click", () => {
    clearInterval(timeInt);
    hitGenerator("X");
    timeRun = false;
    document.querySelector("#timer").textContent = 60;
    document.querySelector("#bubContainer").innerHTML = `<h1>Score: ${score}</h1>`;
    score = 0;
});
// we could have also tried to get the text of the bubble by targetting the bubblecontainer
document.querySelector("#bubContainer").addEventListener("click",(dets)=>
    {
        console.log(dets.target.textContent);
    }
)
