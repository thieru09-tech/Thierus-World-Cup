import {
  getPlayers
} from "./players.js";

async function loadPlayers() {

  const players =
    await getPlayers();

  console.log(players);

}

loadPlayers();