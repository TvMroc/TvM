
function scrollBack() {
    document.getElementById('scrollBar').scrollBy(-600, 0);
}
function scrollRight() {
    document.getElementById('scrollBar').scrollBy(600, 0);
}

function pinkGoose() {
    document.getElementById('pinkGoose').style.height = "100"+"vh";
    document.getElementById('imgScroll').style.marginTop = "-202"+"px";
    document.getElementById('imgScroll').style.marginLeft = "-2"+"px";
    document.getElementById('imgScroll').style.width = "100"+"vw";
    document.getElementById('scrollBar').style.width = "100"+"vw";
    document.getElementById('scrollBar').style.overflowX = "hidden";
    document.getElementById('scrollBar').scrollTo(0, 0);
    window.scrollTo(0, 0);
    setTimeout(function(){
        window.location.replace("pinkgoose/index.html");
    }, 500);
}