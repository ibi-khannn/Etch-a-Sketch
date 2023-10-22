const parentDiv = document.querySelector("div");
function makeGrid (gridDimensions) {
    for (let i = 1; i <= (gridDimensions * gridDimensions); i++) {
        const childDiv = document.createElement("div");
        childDiv.classList.add("grid-divs");
        childDiv.textContent = "hello"; // have to provide some text inside the childDiv otherwise it is not joined together and have some spacing in between
        parentDiv.appendChild(childDiv);
            if (i == gridDimensions || (i % gridDimensions == 0)) {
                parentDiv.appendChild(document.createElement("br"));
            }
        }
    }
makeGrid(16);