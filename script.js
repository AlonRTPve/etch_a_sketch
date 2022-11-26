const color = document.getElementById('random_color');
const cdiv = document.querySelector('.container');
const btn_wipe_board = document.getElementById("button1");
btn_wipe_board.addEventListener("click", wipe_board);
color.addEventListener("click", Set_Random_Color);
const something = document.getElementsByClassName("active");




for (let i = 0; i < 16; i++) {      //creates the board 
  const div = document.createElement('div');
  div.setAttribute("id", "changeit")
  div.textContent = (" ")
  cdiv.appendChild(div);
}

const div = document.querySelectorAll('#changeit');


div.forEach(divon => {  //sets the background color of the grids/divs to red
    divon.addEventListener("mouseover", (event) => {
      divon.setAttribute("class", "active")
    })
  })


function wipe_board(){          //functions that sets the background color of the divs to default(white)
    div.forEach (divon => {
        divon.setAttribute("class", "notactive")
    })
}

arrayofcolors = ["red", "green", "blue", "yellow", "pink"];


function Set_Random_Color(div) { //wipes the board and sets random color
    wipe_board()
    var random = arrayofcolors[Math.floor(Math.random()*arrayofcolors.length)]

}

