function myMove() {
    let id = null;
    const elem = document.getElementById("Animation");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos == 2360) {
            clearInterval(id);
        } if (pos <=489) {
            pos++;
            elem.style.top = pos + "px";
            
        } if (489 < pos & pos <= 1180) {
            pos++;            
            elem.style.left = pos - 490 + "px";
        } if (1670 >= pos & pos > 1180) {
            pos++;
            elem.style.top = 1670 -  pos + "px";
        } if (2360 > pos & pos> 1670) {
            pos++;
            elem.style.left = 2360 - pos + "px";
        }
    }
}