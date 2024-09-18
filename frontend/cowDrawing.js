let canvas, ctx;
let meatCutsData;

function initializeCowDrawing(meatCuts) {
    canvas = document.getElementById('cow-canvas');
    ctx = canvas.getContext('2d');
    meatCutsData = meatCuts;

    drawCow();
    canvas.addEventListener('click', handleCanvasClick);
}

function drawCow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw cow body
    ctx.beginPath();
    ctx.ellipse(250, 150, 200, 100, 0, 0, 2 * Math.PI);
    ctx.stroke();

    // Draw head
    ctx.beginPath();
    ctx.ellipse(50, 150, 50, 30, 0, 0, 2 * Math.PI);
    ctx.stroke();

    // Draw legs
    drawLeg(150, 250);
    drawLeg(200, 250);
    drawLeg(300, 250);
    drawLeg(350, 250);

    // Draw meat cuts
    drawMeatCut("chuck", 150, 100, "Chuck");
    drawMeatCut("rib", 250, 100, "Rib");
    drawMeatCut("loin", 350, 100, "Loin");
    drawMeatCut("round", 400, 150, "Round");
    drawMeatCut("brisket", 200, 200, "Brisket");
}

function drawLeg(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + 30);
    ctx.stroke();
}

function drawMeatCut(id, x, y, label) {
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillText(label, x - 20, y);
}

function handleCanvasClick(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    meatCutsData.forEach(cut => {
        if (isPointInCut(x, y, cut.position)) {
            displayCutDetails(cut);
        }
    });
}

function isPointInCut(x, y, position) {
    // Simple hit detection, can be improved for more accurate results
    const cutPositions = {
        "chuck": { x: 150, y: 100 },
        "rib": { x: 250, y: 100 },
        "loin": { x: 350, y: 100 },
        "round": { x: 400, y: 150 },
        "brisket": { x: 200, y: 200 }
    };

    const cutPos = cutPositions[position];
    return Math.sqrt((x - cutPos.x) ** 2 + (y - cutPos.y) ** 2) <= 30;
}

function highlightCut(position) {
    drawCow();
    const cutPositions = {
        "chuck": { x: 150, y: 100 },
        "rib": { x: 250, y: 100 },
        "loin": { x: 350, y: 100 },
        "round": { x: 400, y: 150 },
        "brisket": { x: 200, y: 200 }
    };

    const cutPos = cutPositions[position];
    ctx.beginPath();
    ctx.arc(cutPos.x, cutPos.y, 30, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(255, 0, 0, 0.3)';
    ctx.fill();
    ctx.stroke();
}

window.initializeCowDrawing = initializeCowDrawing;
window.displayCutDetails = displayCutDetails;
window.highlightCut = highlightCut;
