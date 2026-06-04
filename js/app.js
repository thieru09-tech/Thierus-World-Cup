import {
  addPlayer,
  getPlayers
} from "./players.js";

const playerName =
  document.getElementById("playerName");

const playerBalance =
  document.getElementById("playerBalance");

const addPlayerBtn =
  document.getElementById("addPlayerBtn");

const playersList =
  document.getElementById("playersList");

const playerCount =
  document.getElementById("playerCount");

async function loadPlayers() {

  const players = await getPlayers();

  playersList.innerHTML = "";

  playerCount.textContent = players.length;

  players.forEach(player => {

    const li = document.createElement("li");

    li.style.padding = "10px";
    li.style.marginBottom = "8px";
    li.style.background = "#1f2937";
    li.style.borderRadius = "8px";

    li.innerHTML = `
      <strong>${player.name}</strong>
      <span style="float:right">
        RM ${player.balance}
      </span>
    `;

    playersList.appendChild(li);

  });

}

addPlayerBtn.addEventListener(
  "click",
  async () => {

    const name =
      playerName.value.trim();

    const balance =
      playerBalance.value || 0;

    if (!name) return;

    await addPlayer(
      name,
      balance
    );

    playerName.value = "";
    playerBalance.value = "";

    loadPlayers();

  }
);

loadPlayers();