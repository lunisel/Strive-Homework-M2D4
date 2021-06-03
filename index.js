const input = document.getElementById("myInput");
const nOfTeams = document.getElementById("numberTeam");
const output = document.getElementById("output");
const buttons = document.getElementById("buttons");
const reset = document.getElementById("reset");
const container = document.querySelector(".container");
const teams = document.querySelector(".teams");

function getInputValue() {
  const values = input.value;
  const total = nOfTeams.value;
  let person = values.split(",");

  let random = person.sort(() => Math.random());
  console.log(random);

  function chunk(array, size) {
    if (array.length <= size) {
      return [array];
    }
    return [array.slice(0, size), ...chunk(array.slice(size), size)];
  }

  let team = chunk(random, total);

  for (let i = 0; i < team.length; i++) {
    output.innerHTML += `<div class="col-12 col-sm-6"><p class="col-12"> Team ${i + 1}: <br> ${team[i]} </p></div>`;
  }
}

reset.addEventListener("click", () => {
  location.reload();
});