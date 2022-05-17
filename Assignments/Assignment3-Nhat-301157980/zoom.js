/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo zoom
 *    Variables and functions
 *    Author: 
 *    Date:   

 *    Filename: zoom.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrderArray = parent.window.opener.photoOrder;
var figFilename = "images/IMG_0" + photoOrderArray[2] + ".jpg";
var favContainer = parent.window.opener.favContainer;
var imgSelections ;

/* populate img element and create event listener */
function pageSetup() {
   document.getElementsByTagName("img")[0].src = figFilename; // assign filename to img element
   createEventListener();
}

/* close window */
function closeWin() {   
   window.close();
   imgSelections = favContainer.getElementsByTagName("img");   
}
function addImage() {   
   var img = document.createElement("img");
   img.src = figFilename;
   favContainer.appendChild(img);
   if(favContainer.getElementsByTagName("img").length >= 6){
      alert("Maximum images can be add ! Please remove one !")
      favContainer.removeChild(img)   } 
}
/* create event listener for close button */
function createEventListener() {
   var closeWindowDiv = document.getElementById("closeBtn");
   var btnAdd = document.getElementById("addBtn");
   if (closeWindowDiv.addEventListener) {
      closeWindowDiv.addEventListener("click", closeWin, false);
   } else if (closeWindowDiv.attachEvent) {
      closeWindowDiv.attachEvent("onclick", closeWin);
   }
   if (btnAdd.addEventListener) {
      btnAdd.addEventListener("click", addImage, false);
   } else if (btnAdd.attachEvent) {
      btnAdd.attachEvent("onclick", addImage);
   }
}

/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup;