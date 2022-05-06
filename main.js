// Pulls data from Get BoredAPI
async function getActivity() {
let numberInput = document.querySelector("#numberField").value;   
const url = `http://www.boredapi.com/api/activity?participants=${numberInput}`
let response = await fetch(url);
let data = await response.json();
console.log(data);
let p = document.querySelector('#activity-response')
p.innerText = data.activity;
addToList(p.innerText);
}

// Ties getting new activity to button
let mainButton = document.querySelector('#main-button');
mainButton.addEventListener('click', getActivity);

// Adding previous activity suggestions to list
function addToList(activity) {
let list = document.querySelector('#previousIdeas');
let newListItem = document.createElement('li');
newListItem.innerText = activity;
list.append(newListItem);
console.log(newListItem.innerHTML);
}


// let repeatedQuote = document.querySelectorAll('#kanye-quote-history').innerText;
// if (h1.innerText !== repeatedQuote) {
//  addToList(h1.innerText);
// } 

