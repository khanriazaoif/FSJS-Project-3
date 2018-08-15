//Set focus on the first text field
//When the page loads, give focus to the first text field
window.onload = function() {
    document.getElementById("name").focus();
  };

  let design = document.getElementById("design");

  //”T-Shirt Info” section of the form:
//For the T-Shirt "Color" menu, only display the color options that match the design selected in the "Design" menu.

function tshirtColor(){
design.onchange = function(){
  if(design[design.selectedIndex].value == "js puns") {
    let colorId = document.getElementById("color");
    for(let i = 0; i < colorId.length; i++ ){
      let a = colorId.options[i].text;
      if(colorId[i].text.includes("JS Puns")){
        colorId[i].style.display = "block";
      } else {
        colorId[i].style.display = "none";
      }
        
      }
    } else {
      let colorId = document.getElementById("color");
      for(let i = 0; i < colorId.length; i++ ){
        let a = colorId.options[i].text;
        if(colorId[i].text.includes("JS shirt only")){
          colorId[i].style.display = "block";
        } else {
          colorId[i].style.display = "none";
          }
          
        }
  }
 }
}

tshirtColor();
