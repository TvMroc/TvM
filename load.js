function load(redirect) {
    var container = document.getElementsByClassName('container')[0];
    container.style.marginRight = '-2000px';
    container.style.marginLeft = '2000px';
    setTimeout(function () {
        window.location.replace(redirect);
    }, 750);
}