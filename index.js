const schüler = [
  "Anastasiia",
  "Ayhem",
  "Baltasar",
  "Edgard",
  "Joshua",
  "Juneau",
  "Mohammed",
  "Patrick",
  "Sabir",
  "Sören",
  "Fili",
];

let ausgewählteSchüler = [];

function startRandom() {
  if (schüler.length === 0) {
    ausgewählteSchüler = [];
    document.getElementById("schülerAuswahl").textContent =
      "Alle Codierer wurden ausgewählt!";
    return;
  }

  const index = Math.floor(Math.random() * schüler.length);
  const randomSchüler = schüler[index];
  ausgewählteSchüler.push(randomSchüler);
  schüler.splice(index, 1);

  document.getElementById("schülerAuswahl").textContent =
    "Ausgesuchter Codierer: " + randomSchüler;

  updateAusgeschlosseneSchülerListe();
}

function updateAusgeschlosseneSchülerListe() {
  const ausgeschlosseneSchülerListe = ausgewählteSchüler.join(", ");
  document.getElementById("ausgeschlosseneSchüler").textContent =
    "Ausgeschlossene Codierer: " + ausgeschlosseneSchülerListe;
}
