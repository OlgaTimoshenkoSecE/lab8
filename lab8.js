
// code for task 1

document.getElementById("alertButton").addEventListener("click", function() {
    if (document.getElementById("alertButton").innerHTML=="Click me!"){
        document.getElementById("alertButton").innerHTML="Clicked!"; 
    } else {
        document.getElementById("alertButton").innerHTML="Click me!";
    }
})

//code for task 2

let container = document.getElementById("container")
container.onmouseenter = function(event) {
    let divBlock = event.target;
    divBlock.style.background = 'blue';
    divBlock.style.color = "aliceblue";
}
container.onmouseleave = function(event) {
    let divBlock = event.target;
    divBlock.style.background = 'aliceblue';
    divBlock.style.color = "black";
}

// code for task 3 (open dev tools to see the results)
document.getElementById("keyMovement").addEventListener("keyup", function(event){
    console.log(event["key"]);
})

//task 4 (open dev tools to see the results)

function displayValue(event){
    event.preventDefault();
    const info = document.getElementById("input-two").value;
    console.log(info);
}

// task 5

let inputBorder = document.getElementById("input-three")
inputBorder.onfocus = function(event){
    let borderChange = event.target;
    borderChange.style.borderColor = "blue";
}
inputBorder.onblur = function(event){
    let borderChange = event.target;
    borderChange.style.borderColor = "cornflowerblue";
}

// task 6

document.getElementById("list").addEventListener("click", function(event){
    let line = event.target;
    if (line.tagName==='LI'){
        if (line.style.background=="aliceblue"){
            line.style.background="cornflowerblue";
            line.style.borderColor="darkblue";
            line.style.color="aliceblue";
        } else {
            line.style.background="aliceblue";
            line.style.borderColor="aliceblue";
            line.style.color="black";
        }
    }
})
