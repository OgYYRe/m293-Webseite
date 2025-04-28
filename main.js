// Liste aller Projekte
const projekte = [
    {
      bild: "images/projekte/ppp.png", 
      titel: "C++",
      beschreibung: "Kleine App zur Zahlenprüfung"
    },
    {
      bild: "images/projekte/powershell.png",
      titel: "powershell",
      beschreibung: "Ein Log-Event Programm"
    },
    {
      bild: "images/projekte/test1.png",
      titel: "X",
      beschreibung: "Testbild / Platzhalter"
    }
  ];
  
  // Projekt-Container selektieren
  const projektContainer = document.getElementById("projektContainer");
  
  // Popup Elemente
  const popup = document.getElementById("bildPopup");
  const popupBild = document.getElementById("popupBild");
  const closeBtn = document.querySelector("#bildPopup .close");
  
  // Karten dynamisch erzeugen
  projekte.forEach((projekt) => {
    const card = document.createElement("div");
    card.className = "projekt-card";
  
    card.innerHTML = `
      <img src="${projekt.bild}" alt="${projekt.titel}">
      <h3>${projekt.titel}</h3>
      <p>${projekt.beschreibung}</p>
    `;
  
    projektContainer.appendChild(card);
  
    // Click-Event direkt ekleniyor
    const img = card.querySelector("img");
    img.addEventListener("click", () => {
      popup.style.display = "block";
      popupBild.src = projekt.bild;
    });
  });
  
  // Kapatma olayları
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });
  
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
  