// File: login_page.html
//     Author: Lisi Cao
//     Date: September 4, 2023
//     Description: click button "login", turn to page login.
//     Contact: lisi.cao@johnabbottcollege.net
//     Copyright: 2023

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  /**
   * Check the state of an input and adjust the parent's class accordingly.
   * If the input has a value or is currently focused, the parent element gets a "focused" class.
   * Otherwise, the "focused" class is removed.
   *
   * @param {HTMLElement} element - The input element to check.
   */

  function checkInput(element) {
    // Get the parent of the input element
    const parent = element.parentElement;

    // Check if the input has value or is the currently focused element
    if (element.value || document.activeElement === element) {
      parent.classList.add("focused");
    } else {
      parent.classList.remove("focused");
    }
  }

  // Select all input elements within an .input-container
  const inputs = document.querySelectorAll(".input-container input");

  // Add event listeners to each input
  inputs.forEach((input) => {
    // On focusing the input
    input.addEventListener("focus", function () {
      checkInput(this); // Check the input state
    });

    // On losing focus from the input
    input.addEventListener("blur", function () {
      checkInput(this); // Check the input state
    });

    // On changing the input's value
    input.addEventListener("input", function () {
      // To handle the case when input has a value
      checkInput(this);
    });
  });
});
