window.onload = function () {
    setInterval(fSec, 200);
    var sec = 0;
    var min = 0;

    function fSec() {
        document.querySelector('#sec').style.transform = 'rotate(' + sec + 'deg)';
        document.querySelector('#min').style.transform = 'rotate(' + min + 'deg)';
        if (sec + 6 == 360) {
            sec = 0;
            min += 6;
        }
        sec += 6;
    }
}