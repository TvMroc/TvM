function studentSearch() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("search");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function selectStudent(studentName) {
    selectedStudent = studentName;
    console.log("Selected Student:", selectedStudent);
    var selectedElement = document.getElementById(selectedStudent);
    if (selectedElement) {
        document.getElementById("student").value = studentName;
    }
}

var studentData = {};
function grade() {
    var subjectInput = document.getElementById("subjectInput").value;
    var gradeInput = document.getElementById("gradeInput").value;

    if (!studentData[selectedStudent]) {
        studentData[selectedStudent] = { grades: [], subjects: [] };
    }

    studentData[selectedStudent].grades.push(gradeInput);
    studentData[selectedStudent].subjects.push(subjectInput);

    document.getElementById("gradeInput").value = "";

    console.log(studentData);
}
