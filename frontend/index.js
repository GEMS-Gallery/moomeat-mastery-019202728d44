import { backend } from 'declarations/backend';

let meatCuts = [];

async function init() {
    try {
        meatCuts = await backend.getAllMeatCuts();
        displayMeatCutsList();
        initializeCowDrawing(meatCuts);
    } catch (error) {
        console.error("Error fetching meat cuts:", error);
    }
}

function displayMeatCutsList() {
    const listContainer = document.getElementById('meat-cuts-list');
    meatCuts.forEach(cut => {
        const cutElement = document.createElement('div');
        cutElement.className = 'cut-item';
        cutElement.textContent = cut.name;
        cutElement.onclick = () => displayCutDetails(cut);
        listContainer.appendChild(cutElement);
    });
}

function displayCutDetails(cut) {
    const detailsContainer = document.getElementById('cut-details');
    detailsContainer.innerHTML = `
        <h2>${cut.name}</h2>
        <p>${cut.description}</p>
        <p>Position: ${cut.position}</p>
    `;
    highlightCut(cut.position);
}

window.onload = init;
