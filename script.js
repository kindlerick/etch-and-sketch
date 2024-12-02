const bodyElement = document.body;
const containerElement = document.createElement("div");

const MaxGridSize = 64;
let gridSize;

function addButton() {
    buttonElement = document.createElement("button");
    buttonElement.id = "my-button"; 
    buttonElement.textContent = "Enter Grid Size";
    bodyElement.appendChild(buttonElement);
}

function createContainer(n) {
    containerElement.id = "container"
    containerElement.style.width = `${n * 1.5}vh`;
    containerElement.style.height = `${n * 1.5}vh`;
    bodyElement.appendChild(containerElement);
}

function createGrid(boxNumber) {
    for(let i = 0; i < boxNumber; i++) {
        for(let j = 0; j <  boxNumber; j++) {
            divElement = document.createElement("div");
            divElement.classList.add("my-box");
            containerElement.appendChild(divElement);
        }
    }
}

function createFinalGrid(number) {

    let output;
    if(number >= MaxGridSize) {
        output = MaxGridSize;
    } else {
        output = number;
    }
    createContainer(output);
    createGrid(output);
}

function attachListeners() {
    const myButtonElement = document.querySelector("#my-button");

    myButtonElement.addEventListener('click',  () => {
        let gridSize = Number(window.prompt("Enter Grid Size"));
        myButtonElement.style.visibility = "hidden";
        createFinalGrid(gridSize);
        attachListeners();
    });

    const myBox = document.querySelectorAll(".my-box");

    myBox.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString();
        });
    });

}

addButton();
createFinalGrid(gridSize);
attachListeners();