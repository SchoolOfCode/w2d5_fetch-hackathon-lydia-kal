// Pulls data from Get BoredAPI
async function getActivity() {
let response = await fetch("http://www.boredapi.com/api/activity?participants=");
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
list.prepend(newListItem);
console.log(newListItem.innerHTML);
}


// let repeatedQuote = document.querySelectorAll('#kanye-quote-history').innerText;
// if (h1.innerText !== repeatedQuote) {
//  addToList(h1.innerText);
// } 


// let launchCode = {"enter": "ROVER"}
// ;
//          async function enterCode() {
//             let response = await fetch("https://task-escape-api.herokuapp.com/api/codes", {
//                 method: "POST",											
//                 headers: { "Content-Type" : "application/json" },		
//                 body: JSON.stringify(launchCode)
//             });
//             let result = await response.json();
//             console.log(result);
//          };
         
//          enterCode();

