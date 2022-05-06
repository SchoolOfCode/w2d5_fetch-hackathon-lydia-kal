// Pulls data from Get BoredAPI
async function getActivity() {
let numberInput = document.querySelector("#numberField").value;   
const url = `http://www.boredapi.com/api/activity?participants=${numberInput}`
let response = await fetch(url);
let data = await response.json();
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


async function getStory()    {
    let response = await fetch("https://shortstories-api.herokuapp.com/");
    let data = await response.json();
    console.log(data);
    let p = document.querySelector('#story-text')
    p.innerText = data.story;
    }

    let storyButton = document.querySelector('#story-button');
    storyButton.addEventListener('click', getStory);