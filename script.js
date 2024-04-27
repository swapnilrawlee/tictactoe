var btns = document.querySelectorAll(".btn");
var resetbutton = document.getElementById("btnreset");
var h1 =document.getElementById("h1")

const winning_pattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Corrected
  [0, 4, 8],
  [2, 4, 6],
];

var turnX = true;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turnX) {
      btn.innerHTML = "X";
      turnX = false;
    } else {
      btn.innerHTML = "O";
      turnX = true;
    }
    btn.disabled = true;
    checkwinner();
  });
});

const disableButtons = () => {
  btns.forEach((btn) => {
    btn.disabled = true;
  });
};

const checkwinner = function () {
  for (let pattern of winning_pattern) {
    let pos1 = btns[pattern[0]].innerHTML;
    let pos2 = btns[pattern[1]].innerHTML;
    let pos3 = btns[pattern[2]].innerHTML;
    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos3 === pos2) {
        h1.innerHTML=`Winner is ${pos1}`
        disableButtons();
      }
    }
  }
};

var resetbtn = () => {
  btns.forEach((btn) => {
    btn.innerHTML = "";
    h1.innerHTML="";
    btn.disabled = false;
  });
  turnX = true;
};
resetbutton.addEventListener("click", resetbtn);
