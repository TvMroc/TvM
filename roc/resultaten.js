var selectedVak = "";
function selectVak(vak) {
    selectedVak = vak;
    var resultVakElements = document.querySelectorAll('.result-vak');
    resultVakElements.forEach(function(element) {
        element.style.display = "none";
    });

    var selectedElement = document.getElementById(selectedVak);
    if (selectedElement) {
        selectedElement.style.display = "block";
    }
}
