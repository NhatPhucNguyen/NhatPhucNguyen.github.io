const drawBtn = document.getElementById("drawBtn");
const tableContainer = document.querySelector(".table-container");
const message = document.getElementById("message");
drawBtn.addEventListener("click", function () {
    var row = document.getElementById('row').value;
    var column = document.getElementById('column').value;
    if (Number(row) % 1 === 0 && Number(column) % 1 === 0 && row > 0 && column > 0) {
        drawTable(row,column);
    }
    else {
        message.innerHTML = "Invalid input !";
    }
});
function drawTable(row, column) {
    document.write("<table style='border: 1px solid black; margin:auto'>");
    for (let i = 1; i < (Number(row) + 1); i++) {
        document.write("<tr style='border: 1px solid black'>");
        for (let j = 1; j < (Number(column) + 1); j++) {
            document.write(`<td style='border: 1px solid black; padding:5px'>${i},${j}</td>`);
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

