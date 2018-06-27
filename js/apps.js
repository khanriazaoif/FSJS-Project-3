//Set focus on the first text field
//When the page loads, give focus to the first text field
window.onload = function() {
    document.getElementById("name").focus();
  };

  //”T-Shirt Info” section of the form:
//For the T-Shirt "Color" menu, only display the color options that match the design selected in the "Design" menu.

function tshirtColor(){
design.onchange = function(){
  let design = document.getElementById("design");
  if(design[design.selectedIndex].value == "js puns") {
    let colorId = document.getElementById("color");
    for(let i = 0; i < colorId.length; i++ ){
      let a = colorId.options[i].text;
      if(colorId[i].text.includes("JS Puns")){
        console.log("I love it");
      }
    }
  } else {
    let heartJs = document.getElementById("design").value;
    console.log(heartJs);
  }
 }
}

tshirtColor();