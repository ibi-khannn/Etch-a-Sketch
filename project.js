let dimensions;

const dimensionsBtn = document.createElement("button");
dimensionsBtn.textContent = "Select Dimensions";
dimensionsBtn.classList.add("btn1");
document.body.appendChild(dimensionsBtn);

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";
resetBtn.classList.add("btn2");
document.body.appendChild(resetBtn);

let btnClicked = false; 
let parentDivRef;

// Button events below

resetBtn.addEventListener("click", () => {
    btnClicked = true;
    makeGrid(16);
})

resetBtn.addEventListener("mouseenter", () => {
    resetBtn.style.backgroundColor = "blue";
    resetBtn.style.color = "white";
})

resetBtn.addEventListener("mouseleave", () => {
    resetBtn.style.backgroundColor = "white";
    resetBtn.style.color = "blue";
})

dimensionsBtn.addEventListener("click", () => {
    dimensions = Number(prompt("Enter the number of rows/columns for your board!"));
    while (dimensions > 99 || dimensions <= 0) {
        dimensions = Number(prompt("Error: Range is between 1 and 99"));
    }
    btnClicked = true;
    makeGrid(dimensions);
})

dimensionsBtn.addEventListener("mouseenter", () => {
    dimensionsBtn.style.backgroundColor = "red";
    dimensionsBtn.style.color = "white";
})

dimensionsBtn.addEventListener("mouseleave", () => {
    dimensionsBtn.style.backgroundColor = "white";
    dimensionsBtn.style.color = "red";
})

// Button events done setting up

makeGrid(16);

function makeGrid (gridDimensions) {
    if (btnClicked) {
        document.body.removeChild(parentDivRef);
        btnClicked = false;
    }
    
    const parentDiv = document.createElement("div"); // creating a container 
    parentDiv.classList.add("container");
    document.body.appendChild(parentDiv);
    
    for (let i = 1; i <= gridDimensions; i++) { // what we are doing is we are creating rows and inside those rows we are creating the boxes, this can be seen by removing the border and background color properties from row class and adding them inside the col class. The structure will be made clearer.
        const col = document.createElement("div");
        col.classList.add("cols");
            for (let j = 1; j <= gridDimensions; j++) {
                const row = document.createElement("div"); // each new div (which will be the box inside the grid, i.e. 5 x 5 grid will have 25 boxes) is appended inside the row created above until it ends, then the inner loop ends and new row is created and the process continues
                row.classList.add("rows");
                col.appendChild(row);
            }
        parentDiv.appendChild(col); // as the parentDiv is given flex-direction: column, the columns are created under each other which are essentially rows to be exactly
        }
        
        parentDivRef = parentDiv; // STORING CONTAINER (PARENTDIV) TO BE DELETED WHEN FUNCTION CALLED AGAIN

        const allChildDivs = document.querySelectorAll(".rows");
        let clicky = false;
        
            allChildDivs.forEach((eachDiv) => { // have to keep this forEach loop inside the functions so that color changing works on new grid
                eachDiv.addEventListener("mouseenter", () => {
                    eachDiv.style.backgroundColor = "blue";
                })
                eachDiv.addEventListener("mouseleave", () => {
                    eachDiv.style.backgroundColor = "white";
                })
                eachDiv.addEventListener ("click", () => { // use the if else statement inside the click event function to have the color selected inside the div after a click
                    let newColor = getRandomColor();
                    eachDiv.style.backgroundColor = newColor;
                    clicky = true;
                    if (clicky) { // using that if mentioned in the comment just above
                        eachDiv.addEventListener("mouseleave", () => {
                            eachDiv.style.backgroundColor = newColor;
                        })
                        }
                        else {
                        eachDiv.addEventListener("mouseleave", () => {
                            eachDiv.style.backgroundColor = "white";
                        })
                    }
                })
            })        
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    arrayOfLetters = letters.split("");
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color = color + arrayOfLetters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  