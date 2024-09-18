import { backend } from 'declarations/backend';

let meatCuts = [];

async function init() {
    try {
        meatCuts = await backend.getAllMeatCuts();
        displayMeatCutsList();
        createCowMap();
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

function createCowMap() {
    const cowMap = document.getElementById('cow-map');
    meatCuts.forEach(cut => {
        const area = document.createElement('area');
        area.shape = 'rect';
        area.coords = getCoordinatesForPosition(cut.position);
        area.alt = cut.name;
        area.href = '#';
        area.onclick = (e) => {
            e.preventDefault();
            displayCutDetails(cut);
        };
        cowMap.appendChild(area);
    });
}

function getCoordinatesForPosition(position) {
    // These coordinates are placeholders and should be adjusted based on your actual cow image
    const coords = {
        'shoulder': '50,50,100,100',
        'ribs': '150,50,200,100',
        'back': '250,50,300,100',
        'rear': '350,50,400,100',
        'chest': '100,150,150,200'
    };
    return coords[position] || '0,0,0,0';
}

function displayCutDetails(cut) {
    const detailsContainer = document.getElementById('cut-details');
    detailsContainer.innerHTML = `
        <h2>${cut.name}</h2>
        <p>${cut.description}</p>
        <p>Position: ${cut.position}</p>
    `;
}

window.onload = init;
