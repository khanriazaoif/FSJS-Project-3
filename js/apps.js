//Set focus on the first text field
//When the page loads, give focus to the first text field
window.onload = function() {
    document.getElementById("name").focus();
  };

  //”T-Shirt Info” section of the form:
//For the T-Shirt "Color" menu, only display the color options that match the design selected in the "Design" menu.
function tshirtColor(){
design.onchange = function(){
  let design=document.getElementById("design");
  if(design[design.selectedIndex].value == "js puns") {
    let jsPuns = document.getElementById("design").value;
    console.log(jsPuns);
  } else {
    let heartJs = document.getElementById("design").value;
    console.log(heartJs);
  }
 }
}


tshirtColor();