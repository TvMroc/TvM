function scrollto(direction) {
    document.getElementById('scrollBar').scrollBy(direction, 0);
}

function redirect(site, distance) {
    document.getElementById(site).style.height = "100"+"vh";
    document.getElementById('imgScroll').style.marginTop = "-202"+"px";
    document.getElementById('imgScroll').style.marginLeft = "-2"+"px";
    document.getElementById('imgScroll').style.width = "100"+"vw";
    document.getElementById('scrollBar').style.width = "100"+"vw";
    document.getElementById('scrollBar').style.overflowX = "hidden";
    document.getElementById('scrollBar').scrollTo(distance, 0);
    window.scrollTo(0, 0);
    setTimeout(function(){
        window.open(`${site}/index.html`, "_blank");
    }, 500);
    setTimeout(function(){
        document.getElementById(site).style.height = "600"+"px";
        document.getElementById('imgScroll').style.marginTop = "120"+"px";
        document.getElementById('imgScroll').style.marginLeft = "0"+"px";
        document.getElementById('imgScroll').style.width = "100"+"%";
        document.getElementById('scrollBar').style.width = "90"+"vw";
        document.getElementById('scrollBar').style.overflowX = "auto";
    }, 2000);
}