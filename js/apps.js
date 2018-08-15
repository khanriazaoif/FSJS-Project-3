//Set focus on the first text field
//When the page loads, give focus to the first text field
window.onload = function() {
  document.getElementById("name").focus();
};

let design = document.getElementById("design");

//”T-Shirt Info” section of the form:
//For the T-Shirt "Color" menu, only display the color options that match the design selected in the "Design" menu.

function hideAndShowJobRoleOnOther() {
  const valueOther = document.getElementById("other-title");
  valueOther.style.display = "none";
  const selectId = document.getElementById("title");
  selectId.onchange = function showJobRoleOnOther() {
    valueOther.style.display = "block";
  };
}

function tshirtColor() {
  design.onchange = function() {
    if (
      design[design.selectedIndex].value === "js puns" &&
      "heart js" &&
      "Select Theme"
    ) {
      let colorId = document.getElementById("color");
      for (let i = 0; i < colorId.length; i++) {
        if (colorId[i].text.includes("JS Puns")) {
          colorId[i].style.display = "block";
        } else {
          colorId[i].style.display = "none";
        }
      }
    } else if (design[design.selectedIndex].value === "heart js") {
      let colorId = document.getElementById("color");
      for (let i = 0; i < colorId.length; i++) {
        if (colorId[i].text.includes("JS shirt only")) {
          colorId[i].style.display = "block";
        } else {
          colorId[i].style.display = "none";
        }
      }
    } else {
      let colorId = document.getElementById("color");
      for (let i = 0; i < colorId.length; i++) {
        if (colorId[i].text.includes("")) {
          colorId[i].style.display = "block";
        } else {
          colorId[i].style.display = "none";
        }
      }
    }
  };
}
hideAndShowJobRoleOnOther();
tshirtColor();

// let classActivities = document.getElementsByClassName("activities")[0];
// console.log(classActivities[0]);
// console.log(classActivities);
// function yes(){
//   console.log('before foor loop');
// for (let i = 0; i < classActivities.length; i++) {
//   console.log('hello');
//   if(classActivities[i].text.includes('js-frameworks')){
//     classActivities[i].style.display = "block";
//   } else {
//     classActivities[i].style.display = "none";
//   }
// }
// }
// yes()

const activitiesObject = [
  {
    name: "all",
    cost: 200
  },
  {
    name: "js-frameworks",
    day: "Tuesday",
    time: "9am-12pm",
    cost: 100
  },
  {
    name: "js-libs",
    day: "Tuesday",
    time: "1pm-4pm",
    cost: 100
  },
  {
    name: "express",
    day: "Tuesday",
    time: "9am-12pm",
    cost: 100
  },
  {
    name: "node",
    day: "Tuesday",
    time: "1pm-4pm",
    cost: 100
  },
  {
    name: "build-tools",
    day: "Wednesday",
    time: "9am-12pm",
    cost: 100
  },
  {
    name: "npm",
    day: "Wednesday",
    time: "1pm-4pm",
    cost: 100
  }
];
