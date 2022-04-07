// getting the submit button
let sub = document.getElementById('register')

// even for the submit button to collect the values (grid size)and also activate the make grid function
sub.addEventListener('click', function() {
    let sizeHeight = document.getElementById('inputHeight').value;
    let sizeWidth = document.getElementById('inputWidth').value;

    let rowSize = document.getElementById('rowsize').value;
    let columnSize = document.getElementById('columnsize').value;
    //makegrid function call
    makeGrid(sizeHeight, sizeWidth, rowSize, columnSize);

});

//make grid function with parameters of height, width, rowsize and columnsize
function makeGrid(sizeHeight, sizeWidth, rowSize, columnSize) {

    let tablep = document.getElementById('pixelCanvas');
    // to clear the table of any available row and column
    while (tablep.hasChildNodes()) {
        tablep.removeChild(tablep.firstChild)
    }

    //for loop to make grid by function parameters
    for (let i = 0; i <= rowSize - 1; i++) {
        let tableRow = document.createElement('tr');
        for (let k = 0; k <= columnSize - 1; k++) {

            let tableData = document.createElement('td');
            //css style to set width of cell
            tableData.style.width = sizeWidth + "px";
            tableData.style.height = sizeHeight + "px";
            tableRow.appendChild(tableData);
            // Event listener to input color to the cell
            tableData.addEventListener("click", function() {
                let sizeColor = document.getElementById('colorPicker').value;
                tableData.style.backgroundColor = sizeColor;

            });

        }
        //appending rows and cell to thge table
        tablep.appendChild(tableRow);


    }



}