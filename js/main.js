// Liste alle Projekte
const projekte = [
    {
      bild: "../images/projekte/cpp.png", 
      titel: "C++",
      beschreibung: "Kleine App zur Zahlenprüfung"
    },
    {
      bild: "../images/projekte/powershell.png",
      titel: "powershell",
      beschreibung: "Ein Log-Event Programm"
    },
    {
      bild: "../images/projekte/test1.png",
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
  
  // mach neue karten mit js
  projekte.forEach((projekt) => {
    const card = document.createElement("div");
    card.className = "projekt-card";
  
    card.innerHTML = `
      <img src="${projekt.bild}" alt="${projekt.titel}">
      <h3>${projekt.titel}</h3>
      <p>${projekt.beschreibung}</p>
    `;
  
    projektContainer.appendChild(card);
  
    // klick sofort machen
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
  

  //Formular 

  function validateForm(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if(name == ""){
      alert("Bitte gib deinen Namen ein");
      return false;
    }
    if(email == ""){
      alert("Bitte gib deine E-Mail ein!");
      return false;
    }
    if(message == ""){
      alert("Bitte gib deine Nachricht ein");
      return false;
    }

    if(!email.includes("@")|| !email.includes(".")){
      alert("Bitte gib eine gültige E-Mailadresse ein!");
      return false;
    }

    document.getElementById("result").innerText = "Danke, " + name + ". deine Nachricht wurde geschickt.";
  return false;

  }