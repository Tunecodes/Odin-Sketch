const container = document.getElementById("container");

const button = document.querySelector("button");
button.addEventListener("click", () => {
  removeChildren();
  const size = prompt("enter number of grid");
  generateGrid(size);
});

function generateGrid(size) {
  if (size < 0 || size > 150) {
    alert("invalid input can only put 1-150");
    return;
  } else {
    for (let i = 0; i < size * size; i++) {
      const div = document.createElement("div");
      div.classList.add("grid");
      container.appendChild(div);
      div.style.width = `calc(100% / ${size})`;
      div.style.height = `calc(100% / ${size})`;
    }
    const div = document.querySelectorAll("div");
    div.forEach((div) => {
      div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = randomColor();
      });
    });
  }
}

function removeChildren() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function randomColor () {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;


}
