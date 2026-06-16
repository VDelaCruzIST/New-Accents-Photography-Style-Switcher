"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Vanessa Dela Cruz
   Date: April 15, 2024

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/

function randInt(size) {
   return Math.floor(size*Math.random());
}

//event listener that run setStyles when the page loads
window.addEventListener("load", setStyles);

//function to set up the style sheet and style sheet switcher
function setStyles ()
{
   //generate a random number between 0 and 4
   var styleNum = randInt(5);
   //create a link element for the style sheet
   var link = document.createElement("link");
   link.setAttribute("rel", "stylesheet");
   link.setAttribute("id", "fancySheet");
   link.setAttribute("href", "na_style_" + styleNum + ".css");
   //append the link element to the document head
   document.head.appendChild(link);

   //create a figure element for the thumbnail images
   var figBox = document.createElement("figure");
   figBox.setAttribute("id", "styleThumbs");
   //append the figure element to the div with the ID "box"
   document.getElementById("box").appendChild(figBox);

   //loop to create and preview thumbnail images
   for (var i = 0; i < 5; i++) 
   {
      //create an img element for each thumbnail image
      var sheetImg = document.createElement("img");
      sheetImg.setAttribute("src", "na_small_" + i + ".png");
      sheetImg.setAttribute("alt", "na_style_" + i+ ".css");
      //add click event listener to each thumbnail image
      sheetImg.addEventListener("click", function(event)
      {
         //change the href attribute of the style sheet to the
         //alt attribute of the clicked image
         document.getElementById("fancySheet").href = event.target.alt;
      });
      //append the thumbnail image to the figure element
      figBox.appendChild(sheetImg);
   }
}

//create a new style element
var thumbStyles = document.createElement("style");
//append the style element to the document head
document.head.appendChild(thumbStyles);

//insert the 1st style rule
document.styleSheets[document.styleSheets.length-1].insertRule(
   `figure#styleThumbs {
      position: absolute;
      left: 0px;
      bottom: 0px;
   }`, 0);

//insert the 2nd style rule
document.styleSheets[document.styleSheets.length-1].insertRule(   
   `figure#styleThumbs img {
      outline: 1px solid black;
      cursor: pointer;
      opacity: 0.75;
   }`, 1);

//insert the 3rd style rule
document.styleSheets[document.styleSheets.length-1].insertRule(
   `figure#styleThumbs img:hover {
      outline: 1px solid red;
      opacity: 1.0;
   }`, 2);

