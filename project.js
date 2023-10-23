const parentDiv = document.querySelector("div");
function makeGrid (gridDimensions) {
    for (let i = 1; i <= (gridDimensions * gridDimensions); i++) {
        const childDiv = document.createElement("div");
        childDiv.classList.add("grid-divs");
        childDiv.style.width = "50px";
        childDiv.style.height = "50px";
        parentDiv.appendChild(childDiv);
            if ((i % gridDimensions) == 0) {
                const lineBreak = document.createElement("br");
                parentDiv.appendChild(lineBreak);
            }
        }
    }

makeGrid(4);

const allChildDivs = document.querySelectorAll(".grid-divs");
let clicky = false;

    allChildDivs.forEach((eachDiv) => {
        eachDiv.addEventListener("mouseenter", () => {
            eachDiv.style.backgroundColor = "lightgreen";
        })
        eachDiv.addEventListener("mouseleave", () => {
            eachDiv.style.backgroundColor = "lightgreen";
        })
        eachDiv.addEventListener ("click", () => { // use the if else statement inside the click event function to have the color selected inside the div after a click
            eachDiv.style.backgroundColor = "yellow";
            clicky = true;
            if (clicky) {
                eachDiv.addEventListener("mouseleave", () => {
                    eachDiv.style.backgroundColor = "yellow";
                })
                }
                else {
                eachDiv.addEventListener("mouseleave", () => {
                    eachDiv.style.backgroundColor = "white";
                })
            }
        })
    })
