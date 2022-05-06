// Pulls data from Get BoredAPI
async function getActivity() {
  let numberInput = document.querySelector("#numberField").value;
  const url = `http://www.boredapi.com/api/activity?participants=${numberInput}`;
  let response = await fetch(url);
  let data = await response.json();
  let p = document.querySelector("#activity-response");
  p.innerText = data.activity;
  addToList(p.innerText);
}

// Ties getting new activity to button
let mainButton = document.querySelector("#main-button");
mainButton.addEventListener("click", getActivity);

// Adding previous activity suggestions to list
// function addToList(activity) {
//   let list = document.querySelector("#previousIdeas");
//   let newListItem = document.createElement("li");
//   newListItem.innerText = activity;
//   list.append(newListItem);
//   console.log(newListItem.innerHTML);
// }

// Get a short story from the shortstories API

async function getStory() {
  let response = await fetch("https://shortstories-api.herokuapp.com/");
  let data = await response.json();
  console.log(data);
  let p = document.querySelector("#story-text");
  p.innerText = data.story;
  let h5 = document.querySelector("#title");
  h5.innerText = data.title;
  let h6 = document.querySelector("#author");
  h6.innerText = data.author;
}
// Ties getting new story to button
let storyButton = document.querySelector("#story-button");
storyButton.addEventListener("click", getStory);

// 4 functions to hide divs or borders untill they're called
function tetrisFunction() {
  let T = document.getElementById("tetrisDiv");
  T.style.display = "block";
}

function activityBorder() {
  let T = document.getElementById("activity-response");
  T.style.display = "block";
}
function storyBorder() {
  let T = document.getElementById("story-text");
  T.style.display = "block";
}
function adventureBorder() {
  let T = document.getElementById("adventureDiv");
  T.style.display = "block";
}

// click and add a prompt to get name and age for an adventure
var x = document.getElementById("myBtn");
x.addEventListener("click", myName);
x.addEventListener("click", myAge);

// Enter your name, and return a greeting.
function myName() {
  let txt;
  let person = prompt("Please enter your name:", "Harry Potter");
  if (person == null || person == "") {
    txt = "User cancelled the prompt.";
  } else {
    txt = "Hello " + person + ", I hope you're having a good day!";
  }
  document.getElementById("p1").innerHTML = txt;
}

// Enter your age and return what kind of adventure you're going on.
function myAge() {
  let txt;
  let age = prompt("Please enter your age:", 12);
  if (age == null || age == "") {
    txt = "User cancelled the prompt.";
  } else if (age == 11) {
    txt =
      "Welcome to Hogwarts! Professor McGonagall will be along to collect you shortly.";
  } else if (age >= 50) {
    txt = "You're going on an adventure! Say hi to Smaug :) ";
  } else if (age > 11 && age <= 15) {
    txt = "Go through your wardrobe, you may just find Narnia!";
  } else if (age < 11 && age >= 0) {
    txt =
      "You might be a bit young for magic yet, but stay vigilant! You never know when magical nannies will appear."; // for small children
  } else {
    txt =
      "You may have missed out on a magical adventure so far, but keep checking your mailbox - Vetinari is always on the look out for useful people";
  }
  document.getElementById("p2").innerHTML = txt;
}
