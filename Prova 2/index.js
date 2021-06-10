const inputText = document.getElementById("input-text")
const bSubmit = document.getElementById("b-submit")
const inputTeams = document.getElementById("number-of-teams")
const bConfirm = document.getElementById("b-confirm")
const namesUl = document.getElementById("names-ul")
const rowTeams = document.getElementById("row-teams")
const namesArray = []

const buttonSubmit = function(){
    let name = inputText.value
    let nameLi = document.createElement("li")
    nameLi.innerHTML = `${name}`
    namesUl.appendChild(nameLi)
    inputText.value = ``
    namesArray.push(name)
}

const buttonConfirm = function(){
    let numberOfPeople = namesArray.length
    let nOfTeams = inputTeams.value
    let teams = []
    while(nOfTeams > 0){
        teams.push(namesArray.splice(0, Math.floor(numberOfPeople/nOfTeams)))
        nOfTeams--
    }
    console.log(teams)
    console.log(namesArray)
}

function splitTeams(arr, nTeams) {
    arr = ["aana", "rosa", "benni", "luca", "flora","greg", "luna"]
    nTeams = 2
    let teams = [];
    while (nTeams > 0) {
    teams.push(arr.splice(0, Math.floor(arr.length/nTeams)))
    nTeams--;
    }
    console.log("team arr", teams)
    console.log("Start arr",arr)
}



