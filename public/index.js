/**
 * Jeyamerun Subhas
 * 8/11/2020
 * Section: AE
 * TA: Jeff Worley
 * This is the js file, index.js, linked to my html file, index.html.
 * Contains the user's interactions with page elements such as the buttons,
 * and also calls an API.
 */

"use strict";

(function() {

  const BASE_URL = "https://api.lyrics.ovh/v1/";

  window.addEventListener("load", init);

  /** Function that runs when the page is loaded and sets up other functions onto the buttons. */
  function init() {
    id("courses").addEventListener("click", addCourseTitle);
    id("invert").addEventListener("click", addClass);
    id("revert").addEventListener("click", removeClass);
    id("lyrics").addEventListener("click", makeRequest);
  }

  /** Updates the page by adding the song lyrics, fetching the lyrics from the Lyrics API. */
  function makeRequest() {
    fetch(BASE_URL + "Rick-Astley/Never-Gonna-Give-You-Up")
      .then(checkStatus)
      .then(resp => resp.json())
      .then(processData)
      .then(displayLyrics)
      .catch("There is an error with the call to the Lyrics API.");
  }

  /**
   * Returns the lyrics given by the API as a string.
   * @param {object} text - object to extract lyrics from.
   * @returns {string} - lyrics from the API.
   */
  function processData(text) {
    return text.lyrics;
  }

  /**
   * Displays the lyrics onto the page.
   * @param {string} text - string of lyrics.
   */
  function displayLyrics(text) {
    let para = document.createElement("p");
    para.textContent = text;
    id("song").appendChild(para);
  }

  /** Adds the "new" css styling onto the images on the webpage. */
  function addClass() {
    let images = qsa("img");
    for (let i = 0; i < images.length; i++) {
      images[i].classList.add("new");
    }
  }

  /** Removes the "new" css styling from the images on the webpage. */
  function removeClass() {
    let images = qsa("img");
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove("new");
    }
  }

  /** Appends a new list item to the ordered list of courses, with user's input. */
  function addCourseTitle() {
    let listElement = document.createElement("li");
    let courseTitle = id("course-title");
    listElement.textContent = courseTitle.value;
    let list = qs("ol");
    list.appendChild(listElement);
  }

  /**
   * Helper function to return the response's result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} response - response to check for success/error
   * @return {object} - valid response if response was successful, otherwise rejected
   *                    Promise result
   */
  function checkStatus(response) {
    if (response.ok) {
      return response;
    } else {
      throw Error("Error in request: " + response.statusText);
    }
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} name - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(name) {
    return document.getElementById(name);
  }

  /**
   * Returns first element matching selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} - DOM object associated selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Returns an array of elements matching the given query.
   * @param {string} query - CSS query selector.
   * @returns {array} - Array of DOM objects matching the given query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }
})();