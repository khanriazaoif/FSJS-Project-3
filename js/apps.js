//Set focus on the first text field
//When the page loads, give focus to the first text field
window.onload = function() {
    document.getElementById("name").focus();
  };

  let design = document.getElementById("design");

  //”T-Shirt Info” section of the form:
//For the T-Shirt "Color" menu, only display the color options that match the design selected in the "Design" menu.

function hideAndShowJobRoleOnOther(){
   const valueOther = document.getElementById('other-title');
   valueOther.style.display = "none";
   const selectId = document.getElementById('title');   
   selectId.onchange = function showJobRoleOnOther(){
       valueOther.style.display = "block";
      }
  }


function tshirtColor(){
design.onchange = function(){
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
      let colorId = document.getElementById("color");
      for(let i = 0; i < colorId.length; i++ ){
        if(colorId[i].text.includes("JS shirt only")){
          colorId[i].style.display = "block";
        } else {
          colorId[i].style.display = "none";
          }
          
        }
    } else {
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
hideAndShowJobRoleOnOther();
tshirtColor();
