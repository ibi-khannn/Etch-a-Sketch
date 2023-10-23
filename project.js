const parentDiv = document.querySelector("div");
function makeGrid (gridDimensions) {
    for (let i = 1; i <= gridDimensions; i++) {
        const col = document.createElement("div");
        col.classList.add("cols");
            for (let j = 1; j <+ gridDimensions; j++) {
                const row = document.createElement("div");
                row.classList.add("rows");
                col.appendChild(row);
            }
        parentDiv.appendChild(col);
        }
    }

makeGrid(32);

const allChildDivs = document.querySelectorAll(".rows");
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
