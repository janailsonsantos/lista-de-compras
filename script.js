const inputName = document.getElementById('name-buy');
const input = document.querySelector('.input');
const buys = document.querySelector('.buys');
const removed = document.querySelector('.removed');
const outAlert = document.querySelector('.out-alert');
const remove = document.querySelector('.remove');


inputName.addEventListener('input', (event) => {
    console.log(inputName.value)
});

input.addEventListener("submit", (event) => {
    event.preventDefault();

    const newDiv = document.createElement("div");
    const newSpan = document.createElement("span");
    const newA = document.createElement("a");
    const newInput = document.createElement("input")
    const newP = document.createElement("p");

    newDiv.append(newSpan)
    newDiv.append(newA);
    newA.appendChild(document.createElement("img")).setAttribute("src", "assets/icons/icon delete.svg");
    newA.classList.add("remove");

    newA.addEventListener('click', (event) => {
    event.preventDefault();
    newDiv.remove();
    removed.classList.remove('hide');
    });
    
    buys.append(newDiv);
    newInput.type = "radio";

    newSpan.append(newInput);
    newSpan.append(newP);
    
    newDiv.classList.add("list");
    newP.textContent = inputName.value;

    inputName.value = "";


})





outAlert.addEventListener('click', (event) => {
    removed.classList.add('hide');
    event.preventDefault();

})







