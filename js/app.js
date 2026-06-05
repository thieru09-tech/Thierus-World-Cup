import {
  addPlayer,
  getPlayers,
  deletePlayer,
  updatePlayerBalance
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



  players.sort(
    (a, b) => b.balance - a.balance
  );

  playersList.innerHTML = "";

  playerCount.textContent = players.length;

  players.forEach((player, index) => {

    const li = document.createElement("li");

    li.style.padding = "10px";
    li.style.marginBottom = "8px";
    li.style.background = "#1f2937";
    li.style.borderRadius = "8px";

    const medal =
      index === 0 ? "🥇" :
      index === 1 ? "🥈" :
      index === 2 ? "🥉" :
      `${index + 1}.`;

    li.innerHTML = `
  <strong>${medal} ${player.name}</strong>

  <span style="float:right">

    RM ${player.balance}

    RM ${player.balance}

<button
  class="edit-btn"
  data-id="${player.id}"
  style="
    margin-left:10px;
    cursor:pointer;
  ">
  ✏️
</button>

<button
  class="delete-btn"
  data-id="${player.id}"
  style="
    margin-left:5px;
    cursor:pointer;
  ">
  ❌
</button>

  </span>
`;

    playersList.appendChild(li);
    const editBtn =
  li.querySelector(".edit-btn");

editBtn.addEventListener(
  "click",
  async () => {

    const newBalance =
      prompt(
        `Enter new balance for ${player.name}`,
        player.balance
      );

    if (
      newBalance === null ||
      newBalance === ""
    ) return;

    await updatePlayerBalance(
      player.id,
      newBalance
    );

    loadPlayers();

  }
);
const deleteBtn =
  li.querySelector(".delete-btn");

deleteBtn.addEventListener(
  "click",
  async () => {

    if (
      !confirm(
        `Delete ${player.name}?`
      )
    ) return;

    await deletePlayer(
      player.id
    );

    loadPlayers();

  }
);
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