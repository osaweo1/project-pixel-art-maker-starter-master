// Select color input
// Select size input

let sub = document.getElementById('register')

// When size is submitted by the user, call makeGrid()
var para
sub.addEventListener('click', function() {
    let sizeHeight = document.getElementById('inputHeight').value;
    let sizeWidth = document.getElementById('inputWidth').value;

    let gridSize = document.getElementById('inputSize').value;
    makeGrid(sizeHeight, sizeWidth, gridSize);
});


function makeGrid(sizeHeight, sizeWidth, gridSize) {

    let tablep = document.getElementById('pixelCanvas');



    for (let i = 0; i <= gridSize - 1; i++) {
        let tableRow = document.createElement('tr');
        for (let k = 0; k <= gridSize - 1; k++) {

            let tableData = document.createElement('td');
            tableData.style.width = sizeWidth + "px";
            tableData.style.height = sizeHeight + "px";
            tableRow.appendChild(tableData);
            tableData.addEventListener("click", function() {
                let sizeColor = document.getElementById('colorPicker').value;
                tableData.style.backgroundColor = sizeColor;

            });

        }

        tablep.appendChild(tableRow);
    }

    // Your code goes here!

}