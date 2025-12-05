import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDFdFgheOQf7yks_uUMEnpJn1-RFCEv24s",
  authDomain: "chloe-chat-c15fb.firebaseapp.com",
  projectId: "chloe-chat-c15fb",
  storageBucket: "chloe-chat-c15fb.firebasestorage.app",
  messagingSenderId: "138132282670",
  appId: "1:138132282670:web:ff46d0101153240cbf2ebf"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const messagesRef = ref(db, "messages");

// --- Username setup ---
let username = localStorage.getItem("chatUsername");
if (!username) {
  username = prompt("Choose your username:");
  if (!username) username = "Anon";
  localStorage.setItem("chatUsername", username);
}

// --- Display incoming messages ---
onChildAdded(messagesRef, snapshot => {
  const msg = snapshot.val();
  const div = document.createElement("div");
  div.textContent = `${msg.username}: ${msg.message}`;
  document.getElementById("messages").appendChild(div);
  document.getElementById("messages").scrollTop = document.getElementById("messages").scrollHeight;
});

// --- Send a message ---
document.getElementById("sendBtn").onclick = () => {
  const input = document.getElementById("messageInput");
  if (input.value.trim() !== "") {
    push(messagesRef, { username, message: input.value.trim() });
    input.value = "";
  }
};

// --- Fill-in prompts ---
const prompts = [
  "My weird habit is _____",
  "I secretly love _____",
  "Today I saw _____",
  "I would never _____",
  "My favorite color combo is _____",
  "The last thing I laughed at was _____"
];

document.getElementById("fillBtn").onclick = () => {
  const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
  document.getElementById("promptDisplay").textContent = randomPrompt;
};
