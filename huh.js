const container = document.querySelector("#container");

const content = document.createElement("p");
content.textContent = "Hey I'm red!";
content.style.color = "red";
container.appendChild(content);


const blue = document.createElement("h3");
blue.textContent = "I'm blue h3!";
blue.style.color = "blue";
container.appendChild(blue);

const div = document.createElement("div");
div.style.border = "1px solid black";
div.style.background = "pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";


const p = document.createElement("p");
p.textContent = "MEE TOO!";

div.appendChild(h1);
div.appendChild(p);

container.appendChild(div);


const buttons = document.querySelectorAll("#container");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert(button.id);
    })
})