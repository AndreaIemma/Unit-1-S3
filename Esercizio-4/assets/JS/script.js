const numbers = [];

for (let i = 0; i < 90; i++) {
    numbers = document.getElementById.innertext("numbers")
    numbers.push(Math.floor(Math.random() * 90) + 1);
};


const tabellone = document.createElement("div");
tabellone.classList.add("tabellone");


for (let i = 1; i <= 90; i++) {
  const cella = document.createElement("div");
  cella.classList.add("cella");
  cella.textContent = i;
  tabellone.appendChild(cella);
}


document.body.appendChild(tabellone);

function btnExtraction() {
    const numbers = Math.floor(Math.random() * 90) + 1;
    document.getElementById("btnExtraction").textContent = `btnExtraction: ${numbers}`;
}
