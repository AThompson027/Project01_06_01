 /*
      Project 01_06_01

      Author: Annie Thompson
      Date: 8-16-18

      Filename: script.js
   */

"use strict";
// global variable
var formValidity = true;

// function to prevent the form from submitted on default
function validateForm(submit) {
  if (submit.preventDefault) {
        submit.preventDefault();
    } else {
        submit.returnValue = false;
    }
    formValidity = true;

    createEventListeners();
}

// function to create event listeners for the form
function createEventListeners() {
  var form = document.getElementsByTagName("form")[0];
  if (form.addEventListener) {
      form.addEventListener("submit", validateForm, false);
  } else if (form.attachEvent) {
      form.attachEvent("onsubmit", validateForm);
  }
}

// event listeners for window when it loads
if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}
