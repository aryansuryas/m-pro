// Select Calculator Shape
function selectCalculatorShape(shape) {
    // Hide all panels
    document.querySelectorAll('.calculation-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.shape-btn').forEach(b => b.classList.remove('active'));

    // Show selected panel
    document.getElementById(shape + '-calc').classList.add('active');
    document.querySelector(`[data-shape="${shape}"]`).classList.add('active');
}

// Rectangle Calculations
function calculateRectangle() {
    const width = parseFloat(document.getElementById('rect-width').value) || 5;
    const height = parseFloat(document.getElementById('rect-height').value) || 3;

    const area = width * height;
    const perimeter = 2 * (width + height);

    document.getElementById('rect-area').textContent = area;
    document.getElementById('rect-perimeter').textContent = perimeter;

    drawRectangle(width, height);
}

function drawRectangle(width, height) {
    const svg = document.getElementById('rect-svg');
    svg.innerHTML = '';

    const scale = 15;
    const rectWidth = width * scale;
    const rectHeight = height * scale;
    const offsetX = (200 - rectWidth) / 2;
    const offsetY = (200 - rectHeight) / 2;

    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', offsetX);
    rect.setAttribute('y', offsetY);
    rect.setAttribute('width', rectWidth);
    rect.setAttribute('height', rectHeight);
    rect.setAttribute('fill', 'rgba(16, 185, 129, 0.3)');
    rect.setAttribute('stroke', '#10b981');
    rect.setAttribute('stroke-width', '2');
    svg.appendChild(rect);

    // Labels
    const widthLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    widthLabel.setAttribute('x', offsetX + rectWidth / 2);
    widthLabel.setAttribute('y', offsetY + rectHeight + 20);
    widthLabel.setAttribute('text-anchor', 'middle');
    widthLabel.setAttribute('font-size', '12');
    widthLabel.setAttribute('fill', '#1f2937');
    widthLabel.textContent = `${width}`;
    svg.appendChild(widthLabel);

    const heightLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    heightLabel.setAttribute('x', offsetX - 15);
    heightLabel.setAttribute('y', offsetY + rectHeight / 2);
    heightLabel.setAttribute('text-anchor', 'middle');
    heightLabel.setAttribute('font-size', '12');
    heightLabel.setAttribute('fill', '#1f2937');
    heightLabel.textContent = `${height}`;
    svg.appendChild(heightLabel);
}

// Circle Calculations
function calculateCircle() {
    const radius = parseFloat(document.getElementById('circle-radius').value) || 5;

    const area = Math.PI * radius * radius;
    const circumference = 2 * Math.PI * radius;

    document.getElementById('circle-area').textContent = area.toFixed(2);
    document.getElementById('circle-circumference').textContent = circumference.toFixed(2);

    drawCircle(radius);
}

function drawCircle(radius) {
    const svg = document.getElementById('circle-svg');
    svg.innerHTML = '';

    const scale = 15;
    const circleRadius = radius * scale;
    const centerX = 100;
    const centerY = 100;

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', centerX);
    circle.setAttribute('cy', centerY);
    circle.setAttribute('r', circleRadius);
    circle.setAttribute('fill', 'rgba(16, 185, 129, 0.3)');
    circle.setAttribute('stroke', '#10b981');
    circle.setAttribute('stroke-width', '2');
    svg.appendChild(circle);

    // Radius line
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', centerX);
    line.setAttribute('y1', centerY);
    line.setAttribute('x2', centerX + circleRadius);
    line.setAttribute('y2', centerY);
    line.setAttribute('stroke', '#0ea5e9');
    line.setAttribute('stroke-width', '2');
    svg.appendChild(line);

    // Radius label
    const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    label.setAttribute('x', centerX + circleRadius / 2);
    label.setAttribute('y', centerY - 10);
    label.setAttribute('font-size', '12');
    label.setAttribute('fill', '#1f2937');
    label.textContent = `r = ${radius}`;
    svg.appendChild(label);
}

// Triangle Calculations
function calculateTriangle() {
    const base = parseFloat(document.getElementById('tri-base').value) || 6;
    const height = parseFloat(document.getElementById('tri-height').value) || 4;

    const area = (base * height) / 2;
    const hypotenuse = Math.sqrt(height * height + (base / 2) * (base / 2));
    const perimeter = base + 2 * hypotenuse;

    document.getElementById('tri-area').textContent = area.toFixed(2);
    document.getElementById('tri-perimeter').textContent = perimeter.toFixed(2);

    drawTriangle(base, height);
}

function drawTriangle(base, height) {
    const svg = document.getElementById('triangle-svg');
    svg.innerHTML = '';

    const scale = 12;
    const baseLength = base * scale;
    const triHeight = height * scale;
    const offsetX = (200 - baseLength) / 2;
    const offsetY = 40;

    const points = `${100},${offsetY} ${offsetX},${offsetY + triHeight} ${offsetX + baseLength},${offsetY + triHeight}`;
    const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    polygon.setAttribute('points', points);
    polygon.setAttribute('fill', 'rgba(16, 185, 129, 0.3)');
    polygon.setAttribute('stroke', '#10b981');
    polygon.setAttribute('stroke-width', '2');
    svg.appendChild(polygon);

    // Height line (dashed)
    const heightLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    heightLine.setAttribute('x1', 100);
    heightLine.setAttribute('y1', offsetY);
    heightLine.setAttribute('x2', 100);
    heightLine.setAttribute('y2', offsetY + triHeight);
    heightLine.setAttribute('stroke', '#0ea5e9');
    heightLine.setAttribute('stroke-width', '1');
    heightLine.setAttribute('stroke-dasharray', '5,5');
    svg.appendChild(heightLine);

    // Base label
    const baseLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    baseLabel.setAttribute('x', 100);
    baseLabel.setAttribute('y', offsetY + triHeight + 20);
    baseLabel.setAttribute('text-anchor', 'middle');
    baseLabel.setAttribute('font-size', '12');
    baseLabel.setAttribute('fill', '#1f2937');
    baseLabel.textContent = `${base}`;
    svg.appendChild(baseLabel);

    // Height label
    const heightLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    heightLabel.setAttribute('x', 80);
    heightLabel.setAttribute('y', offsetY + triHeight / 2);
    heightLabel.setAttribute('font-size', '12');
    heightLabel.setAttribute('fill', '#1f2937');
    heightLabel.textContent = `h=${height}`;
    svg.appendChild(heightLabel);
}

// Angle visualization
function updateAngle() {
    const angle = parseInt(document.getElementById('angle-slider').value);
    document.getElementById('angle-value').textContent = angle;

    // Update angle description
    let type, desc;
    if (angle === 0) {
        type = 'No Angle';
        desc = 'Starting position';
    } else if (angle < 90) {
        type = 'Acute Angle';
        desc = 'An angle less than 90°';
    } else if (angle === 90) {
        type = 'Right Angle';
        desc = 'Exactly 90°';
    } else if (angle < 180) {
        type = 'Obtuse Angle';
        desc = 'An angle between 90° and 180°';
    } else if (angle === 180) {
        type = 'Straight Angle';
        desc = 'Exactly 180°';
    } else if (angle < 360) {
        type = 'Reflex Angle';
        desc = 'An angle between 180° and 360°';
    } else {
        type = 'Full Rotation';
        desc = 'Exactly 360°';
    }

    document.getElementById('angle-type').textContent = type;
    document.getElementById('angle-desc').textContent = desc;

    drawAngle(angle);
}

function drawAngle(angleDegrees) {
    const svg = document.getElementById('angle-svg');
    svg.innerHTML = '';

    const centerX = 100;
    const centerY = 100;
    const radius = 60;

    // Draw first line (static at 0°)
    const line1X = centerX + radius * Math.cos(0);
    const line1Y = centerY + radius * Math.sin(0);
    const l1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    l1.setAttribute('x1', centerX);
    l1.setAttribute('y1', centerY);
    l1.setAttribute('x2', line1X);
    l1.setAttribute('y2', line1Y);
    l1.setAttribute('stroke', '#fff');
    l1.setAttribute('stroke-width', '2');
    svg.appendChild(l1);

    // Draw second line (rotating)
    const angleRad = (angleDegrees * Math.PI) / 180;
    const line2X = centerX + radius * Math.cos(angleRad);
    const line2Y = centerY + radius * Math.sin(angleRad);
    const l2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    l2.setAttribute('x1', centerX);
    l2.setAttribute('y1', centerY);
    l2.setAttribute('x2', line2X);
    l2.setAttribute('y2', line2Y);
    l2.setAttribute('stroke', '#fff');
    l2.setAttribute('stroke-width', '2');
    svg.appendChild(l2);

    // Draw arc
    const largeArc = angleDegrees > 180 ? 1 : 0;
    const arcRadius = 30;
    const arcStartX = centerX + arcRadius * Math.cos(0);
    const arcStartY = centerY + arcRadius * Math.sin(0);
    const arcEndX = centerX + arcRadius * Math.cos(angleRad);
    const arcEndY = centerY + arcRadius * Math.sin(angleRad);

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute(
        'd',
        `M ${arcStartX} ${arcStartY} A ${arcRadius} ${arcRadius} 0 ${largeArc} 1 ${arcEndX} ${arcEndY}`
    );
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', '#fbbf24');
    path.setAttribute('stroke-width', '2');
    svg.appendChild(path);

    // Draw center point
    const center = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    center.setAttribute('cx', centerX);
    center.setAttribute('cy', centerY);
    center.setAttribute('r', '4');
    center.setAttribute('fill', '#fff');
    svg.appendChild(center);

    // Angle label
    const labelX = centerX + 45 * Math.cos(angleRad / 2);
    const labelY = centerY + 45 * Math.sin(angleRad / 2);
    const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    label.setAttribute('x', labelX);
    label.setAttribute('y', labelY);
    label.setAttribute('text-anchor', 'middle');
    label.setAttribute('font-size', '14');
    label.setAttribute('fill', '#fbbf24');
    label.setAttribute('font-weight', 'bold');
    label.textContent = `${angleDegrees}°`;
    svg.appendChild(label);
}

// Initialize
window.addEventListener('load', () => {
    calculateRectangle();
    updateAngle();
});

// Add input listeners
document.getElementById('rect-width')?.addEventListener('input', calculateRectangle);
document.getElementById('rect-height')?.addEventListener('input', calculateRectangle);
document.getElementById('circle-radius')?.addEventListener('input', calculateCircle);
document.getElementById('tri-base')?.addEventListener('input', calculateTriangle);
document.getElementById('tri-height')?.addEventListener('input', calculateTriangle);