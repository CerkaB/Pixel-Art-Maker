//Welcome to Boris' Pixel Art Project
//Version: V 1.5.0
const table = $('#pixel_canvas');
// Select color input
const colorPicker = $('#colorPicker');
// Select size input
const tableHeight = $('#input_height');
const tableWidth = $('#input_width');
//================= makeGrid Function ===================//
function makeGrid() {
  for (let y = 0; y < tableHeight.val(); y++){
    table.append("<tr></tr>");
    for (let x = 0; x < tableWidth.val(); x++) {
      table.children().last().append("<td></td>");
    }
  }
}
//================= Draw Function ===================//
table.on("click" , "td" , function(){
  $(this).css("background-color" , colorPicker.val());
});
//Right mouse click to remove color from cell.
table.on("contextmenu", "td", function() {
  $(this).css("background-color", "white");
  return false;
});
//When user holds mouse click it continues to draw.
let mouseIsHold = false;
table.on("mousedown", "td", function() {
  mouseIsHold = true;
  $(this).css("background-color", colorPicker.val());
});
table.on("mouseenter", "td", function() {
  if (mouseIsHold) {
    $(this).css("background-color", colorPicker.val());
  }
});
$('body').on("mouseup", function() {
  mouseIsHold = false;
});
//================= Submit/Clear Button ===================//
$('form').submit(function(e) {
  table.empty();
  e.preventDefault();
  makeGrid();
});
//================= Reset Button ===================//
$('#reset').click(function() {
  table.empty();
  colorPicker.val("#000000");
  tableHeight.val(30);
  tableWidth.val(30);
});
//////////////////////////////////////////////////////////////////
let mouseIsDown = false; //this variable helps with FF default issue

table.on("mousedown", "td", function() {
  mouseIsDown = true;
  $(this).css("background-color", colorPicker.val());
});
table.on("mouseenter", "td", function() {
  if (mouseIsDown) {
    $(this).css("background-color", colorPicker.val());
  }
});
$('body').on("mouseup", function() {
  mouseIsDown = false;
});
