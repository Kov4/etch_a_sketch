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
            let color = getRandomColor();
            square.style.cssText = `background-color: ${color};`;    
        } );
    });

}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
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
        let width = askWidth();
        let height = askHeight();
        creatediv(height, width);
        changeColorHover();
        console.log("h")
    });
}

function askWidth(){
    
    let width = parseInt(prompt("quelle largeur ? (max 100)"));
    console.log(width);
    console.log(typeof(width));

    while(!((width >= 0) && (width < 100))){
        width = parseInt(prompt("quelle largeur ? (max 100)"));
        console.log(width);
        console.log(typeof(width));
    }    

    return width;
}

function askHeight(){
    
    let height = parseInt(prompt("quelle hauteur ? (max 100)"));
    console.log(height);
    console.log(typeof(height));

    while(!((height >= 0) && (height < 100))){
        height = parseInt(prompt("quelle hauteur ? (max 100)"));
        console.log(height);
        console.log(typeof(height));
    }    

    return height;
}



creatediv(16, 16);
changeColorHover();
resetGrid();


