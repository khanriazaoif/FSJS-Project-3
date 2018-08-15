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
  console.log(design[design.selectedIndex].value);
  if(design[design.selectedIndex].value === "js puns" && "heart js" && "Select Theme"){
    let colorId = document.getElementById("color");
    for(let i = 0; i < colorId.length; i++ ){
      if(colorId[i].text.includes("JS Puns")){
        colorId[i].style.display = "block";
      } else {
        colorId[i].style.display = "none";
      }
        
      }
    } else if (design[design.selectedIndex].value === "heart js"){
      console.log(design[design.selectedIndex].value);
      let colorId = document.getElementById("color");
      for(let i = 0; i < colorId.length; i++ ){
        if(colorId[i].text.includes("JS shirt only")){
          console.log(colorId[i]);
          colorId[i].style.display = "block";
        } else {
          colorId[i].style.display = "none";
          }
          
        }
    } else {
      console.log(design[design.selectedIndex].value);
      let colorId = document.getElementById("color");
      for(let i = 0; i < colorId.length; i++ ){
        if(colorId[i].text.includes("")){
          colorId[i].style.display = "block";
        } else {
          colorId[i].style.display = "none";
          }
          
        }
      
    }
  }
}

tshirtColor();
