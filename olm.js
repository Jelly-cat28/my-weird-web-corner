// Reveal clue when clicked
function revealClue(el) {
  el.classList.add('revealed');
  el.innerText = "If you see an olm, you haven't. Trust your ears...";
}

// Shadow "Olm" reveal after 3 clicks - mysterious!
let olmShadowClicks = 0;
function showOlm() {
  olmShadowClicks++;
  const olm = document.getElementById('olm-revealed');
  if (olmShadowClicks >= 3) {
    document.getElementById('olm-shadow').style.display = "none";
    olm.style.display = "block";
  }
}

// Choose your path section
function path(choice) {
  let msg = "";
  if (choice === 'follow') {
    msg = "You follow a haunting melody and accidentally join the Olm's jazz band. It only plays underwater!";
  } else if (choice === 'stay') {
    msg = "You freeze. The air thickens. After five centuries, you become a cave legend and tourists invent new names for you.";
  } else if (choice === 'draw') {
    msg = "Your mud painting opens a portal. A parade of teeny-tiny olms congratulates you before the mud dries. Did this happen?";
  }
  document.getElementById('choice-result').innerText = msg;
}
