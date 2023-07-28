const columnHeight = document.getElementById("colA").clientHeight; //384px or in tailwing h-96
const ballHeight = document.getElementById("ball1").clientHeight; //16px
const svgWidth = document.getElementById("svg").clientWidth;
//in initial page loading we call a function
window.onload = function () {
  move_ball_1();
  move_ball_2();
  move_ball_3();
};

//set positions of Line AC
let inputValue1 = document.getElementById("input1").value;
let inputValue2 = document.getElementById("input2").value;
let LineAC = document.getElementById("LineAC");
let x1_Line_AC = 0;
let y1_Line_AC = -(columnHeight / 100) * inputValue1 + columnHeight;
let x2_Line_AC = svgWidth / 2;
let y2_Line_AC = -(columnHeight / 100) * inputValue2 + columnHeight;
LineAC.x1.baseVal.value = x1_Line_AC;
LineAC.x2.baseVal.value = x2_Line_AC;

//set positions of Line CN
let inputValue3 = document.getElementById("input3").value;
let LineCN = document.getElementById("LineCN");

let x1_Line_CN = svgWidth / 2;
let y1_Line_CN = -(columnHeight / 100) * inputValue2 + columnHeight;
let x2_Line_CN = svgWidth;
let y2_Line_CN = -(columnHeight / 100) * inputValue3 + columnHeight;
LineCN.x1.baseVal.value = x1_Line_CN;
LineCN.x2.baseVal.value = x2_Line_CN;

addEventListener("resize", (event) => {
  console.log(`resize svg width:${svgWidth}`);
  window.location.reload();
});

function drawLineAC() {
  let LineAC = document.getElementById("LineAC");

  LineAC.y1.baseVal.value = y1_Line_AC;
  LineAC.y2.baseVal.value = y2_Line_AC;
}

function drawLineCN() {
  let LineCN = document.getElementById("LineCN");
  LineCN.x1.baseVal = x1_Line_CN;
  LineCN.x2.baseVal = x2_Line_CN;
  LineCN.y1.baseVal.value = y1_Line_CN;
  LineCN.y2.baseVal.value = y2_Line_CN;
}

function move_ball_3() {
  const ball3 = document.getElementById("ball3");
  let inputValue3 = document.getElementById("input3").value;
  if (inputValue3 > 100) {
    alert(`عدد وارد شده باید از 100 کمتر باشد`);
    inputValue3 = 40;
  }
  // I do a little math! and got the following equation based on stright line  (y = -3.8x + 380)
  ball3.style.top =
    -(columnHeight / 100) * inputValue3 + columnHeight - ballHeight / 2 + "px";
  y2_Line_CN = -(columnHeight / 100) * inputValue3 + columnHeight;
  drawLineCN();
}
function move_ball_2() {
  const ball2 = document.getElementById("ball2");
  let inputValue2 = document.getElementById("input2").value;
  if (inputValue2 > 100) {
    alert(`عدد وارد شده باید از 100 کمتر باشد`);
    inputValue2 = 80;
  }
  ball2.style.top =
    -(columnHeight / 100) * inputValue2 + columnHeight - ballHeight / 2 + "px";
  y2_Line_AC = -(columnHeight / 100) * inputValue2 + columnHeight;
  y1_Line_CN = y2_Line_AC;
  drawLineAC();
  drawLineCN();
}
function move_ball_1() {
  const ball1 = document.getElementById("ball1");
  let inputValue1 = document.getElementById("input1").value;
  if (inputValue1 > 100) {
    alert(`عدد وارد شده باید از 100 کمتر باشد`);
    inputValue1 = 20;
  }

  // I do a little math! and got the following equation based on stright line
  let ball_y_value =
    -(columnHeight / 100) * inputValue1 + columnHeight - ballHeight / 2;
  ball1.style.top = ball_y_value + "px"; //8 is half of ball height and 384 is height of column A
  y1_Line_AC = ball_y_value + ballHeight / 2; // but for the line to go through the center of ball we delete (-8px) value
  drawLineAC();
}
