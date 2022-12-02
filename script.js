const color = document.getElementById('random_color');
const cdiv = document.querySelector('.container');
const btn_wipe_board = document.getElementById("button1");
btn_wipe_board.addEventListener("click", wipe_board);
color.addEventListener("click", Set_Random_Color);
const something = document.getElementsByClassName("active");

let rainbow_color = false;
let number = 0;
arrayofcolors = ["orange", "green", "blue", "yellow", "pink"];

var grid_size = Number(prompt("Enter grid size between 6-64"));

while (isNaN(grid_size) || grid_size<6 ||grid_size>64 ) {
    grid_size = prompt("your input must be an integer between 6-64");

}


for (let i = 0; i < grid_size; i++) {      //creates the board 

  const div = document.createElement('div');
  div.setAttribute("id", "changeit")
  div.classList.add('default')
  div.textContent = (" ")
  cdiv.appendChild(div);
}

const div = document.querySelectorAll('#changeit');


div.forEach(divon => {  //sets the background color of the grids/divs to red / rainbow 
    divon.addEventListener("mouseover", (event) => {        
    if (rainbow_color == false){
                divon.setAttribute("class", "active")
    }
         else{
             var random = arrayofcolors[Math.floor(Math.random()*arrayofcolors.length)]
             divon.setAttribute("class", random)
         }

 
    })

  })


function wipe_board(){          //functions that sets the background color of the divs to default(white)
    div.forEach (divon => {
        divon.setAttribute("class", "notactive")
    })
}


 

function Set_Random_Color(div) { //wipes the board and sets random color
    wipe_board()
    rainbow_color = true;
}

