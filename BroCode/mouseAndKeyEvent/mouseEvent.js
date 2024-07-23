// eventListener = listent for event when interact with page
// Event: click, mouseover, mouseout, .addEventListener(event, callback)

const myBox = document.getElementById("box");

function mouseOver(event){
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Dont do it";
}

function mouseOut(event){
    const color = event.target.style.backgroundColor;

    if (color != "red"){
        event.target.style.backgroundColor = "green";
        event.target.textContent = "Click me";
    }
    
}

function mouseClick(event){
    const color = event.target.style.backgroundColor;

    if (color == "green" || color == "yellow"){
        event.target.style.backgroundColor = "red";
        event.target.textContent = "Ouch";
    } else {
        event.target.style.backgroundColor = "green";
        event.target.textContent = "Click me";
    }
}

myBox.addEventListener("click", mouseClick);
myBox.addEventListener("mouseover", mouseOver);

myBox.addEventListener("mouseout", mouseOut);

// eventListener = listent for event when interact with page
// Event: keydown, keyup // document.addEventListener(event, callback)