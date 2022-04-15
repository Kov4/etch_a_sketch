function creatediv(hauteur, largeur){
    
    
    for(let i=0; i<hauteur; i++){
        const container = document.querySelector(".container");
        const lineContainer = document.createElement("div");
        lineContainer.classList.add("lineContainer");
        container.appendChild(lineContainer);
    }

    createSquare(largeur);

    return
}

function createSquare(largeur){
    
    let lineContainers = document.querySelectorAll(".lineContainer").forEach(line => {
        for(let i=0; i<largeur; i++){
            const square = document.createElement("div");
            square.classList.add("square");
            line.appendChild(square);
        }
    });

    return;
}

function changeColorHover(){

    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
        square.style.cssText = "background-color: black;"    
        } );
    });

}

function resetGrid(){
    const btn = document.querySelector("button");
    btn.addEventListener("click", () => {
        const container = document.querySelector(".container");
        let child = container.lastElementChild;
        while (child) {
            container.removeChild(child);
            child = container.lastElementChild;
        }
        let width = prompt("quelle largeur ? (max 100)");
        let height = prompt("quelle hauteur ? (max 100)");
        creatediv(height, width);
        changeColorHover();
        console.log("h")
    });
}

creatediv(16, 16);
changeColorHover();
resetGrid();


