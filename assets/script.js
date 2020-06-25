window.setInterval(glad(), 5000);

function glad() {
    setInterval(function () {
        document.querySelector(".dash").src = "assets/img/3383587.jpg";
    }, 7000);
    setInterval(function () {
        document.querySelector(".dash").src = "assets/img/3383574.jpg";
    }, 15000);
}