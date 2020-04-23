//-------------------------------------------
const title = document.querySelector("#title");

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";

// function handleClick(){
//    const currentColor = title.style.color;
//    // console.log(currentColor);
//    if(currentColor === BASE_COLOR){
//       title.style.color = OTHER_COLOR;
//    }else{
//       title.style.color = BASE_COLOR;
//    }
// }

// function init(){
//    title.style.color = BASE_COLOR;
// }
// title.addEventListener("click", handleClick);

// init();



// function handleOffline(){
// 	console.log("ByeBye");
// }

// function handleOnline(){
// 	console.log("Welcome back");
// }

// window.addEventListener("offline", handleOffline);
// window.addEventListener("online", handleOnline);

//------------------------------------------------------

const CLICKED_CLASS = "clicked";

function handleClick(){
//	const hasClass = title.classsList.contains(CLICKED_CLASS);
//  	console.log(currentClass);
//  	if(!hasClass){
//    	title.classList.add(CLICKED_CLASS);
//    }else{
//    	title.classList.remove(CLICKED_CLASS);
//    }
  	title.classList.toggle(CLICKED_CLASS);
}

function init(){
}
init();
title.addEventListener("click", handleClick);