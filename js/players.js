import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export async function addPlayer(name, balance) {

  await addDoc(
    collection(db, "players"),
    {
      name,
      balance: Number(balance)
    }
  );

}

export async function getPlayers() {

  const snapshot =
    await getDocs(
      collection(db, "players")
    );

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

}