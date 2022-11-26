const color = document.getElementById('random_color');
const cdiv = document.querySelector('.container');
const btn_wipe_board = document.getElementById("button1");
btn_wipe_board.addEventListener("click", wipe_board);
color.addEventListener("click", Set_Random_Color);
const something = document.getElementsByClassName("active");

let rainbow_color = false;
let number = 0;
arrayofcolors = ["orange", "green", "blue", "yellow", "pink"];

var num_of_boxes = prompt("Enter number of boxes: ");


for (let i = 0; i < num_of_boxes; i++) {      //creates the board 
  const div = document.createElement('div');
  div.setAttribute("id", "changeit")
  div.setAttribute("class", "default")
  div.textContent = (" ")
  cdiv.appendChild(div);
}

const div = document.querySelectorAll('#changeit');


div.forEach(divon => {  //sets the background color of the grids/divs to red / rainbow 
    divon.addEventListener("mouseover", (event) => { 
    if (divon.className === "notactive" || divon.className === "default"){
       
         if (rainbow_color == false){
                divon.setAttribute("class", "active")
            }
         else{
             var random = arrayofcolors[Math.floor(Math.random()*arrayofcolors.length)]
             divon.setAttribute("class", random)
         }
    }
    else{
        console.log()
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

