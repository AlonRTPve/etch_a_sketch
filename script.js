
const cdiv = document.querySelector('.container');

// Add 16 divs
for (let i = 1; i < 16; i++) {
  const div = document.createElement('div');
  div.setAttribute("id", "changeit")
  div.textContent = (" ")
  cdiv.appendChild(div);
}

const div = document.querySelectorAll('#changeit');


div.forEach(divon => {
    divon.addEventListener("mouseover", (event) => {
      divon.setAttribute("class", "active")
    })
  })


