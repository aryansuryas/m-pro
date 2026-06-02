// Fraction visualization
function visualizeFraction() {
    const numerator = parseInt(document.getElementById('numerator').value) || 1;
    const denominator = parseInt(document.getElementById('denominator').value) || 1;

    // Update display
    document.getElementById('numerator-display').textContent = numerator;
    document.getElementById('denominator-display').textContent = denominator;

    // Calculate decimal and percentage
    const decimal = numerator / denominator;
    const percentage = Math.round(decimal * 100);
    
    document.getElementById('decimal-value').textContent = decimal.toFixed(3);
    document.getElementById('percentage-value').textContent = percentage + '%';

    // Draw pie chart
    drawPieChart(numerator, denominator);

    // Draw bar representation
    drawBarRepresentation(numerator, denominator);

    // Draw number line
    drawNumberLine(decimal);
}

// Draw pie chart using Canvas
function drawPieChart(numerator, denominator) {
    const canvas = document.getElementById('fractionPie');
    const ctx = canvas.getContext('2d');
    const radius = 80;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const sliceAngle = (Math.PI * 2 * numerator) / denominator;

    // Draw shaded part
    ctx.fillStyle = 'rgba(139, 92, 246, 0.8)';
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, -Math.PI / 2, -Math.PI / 2 + sliceAngle);
    ctx.lineTo(centerX, centerY);
    ctx.fill();

    // Draw unshaded part
    ctx.fillStyle = 'rgba(200, 200, 200, 0.3)';
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, -Math.PI / 2 + sliceAngle, -Math.PI / 2 + Math.PI * 2);
    ctx.lineTo(centerX, centerY);
    ctx.fill();

    // Draw border
    ctx.strokeStyle = '#8b5cf6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.stroke();
}

// Draw bar representation
function drawBarRepresentation(numerator, denominator) {
    const container = document.getElementById('fraction-bar-visual');
    container.innerHTML = '';

    const barSize = Math.max(40, 200 / denominator);

    for (let i = 0; i < denominator; i++) {
        const bar = document.createElement('div');
        bar.className = 'bar-segment';
        bar.style.width = barSize + 'px';
        bar.style.height = '40px';
        bar.style.animationDelay = `${i * 0.1}s`;

        if (i < numerator) {
            bar.style.background = 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)';
            bar.textContent = '✓';
        } else {
            bar.style.background = 'rgba(200, 200, 200, 0.3)';
            bar.textContent = '○';
            bar.style.color = '#999';
        }

        container.appendChild(bar);
    }
}

// Draw number line
function drawNumberLine(decimal) {
    const svg = document.getElementById('numberLine');
    svg.innerHTML = '';

    const lineY = 30;
    const startX = 30;
    const endX = 270;
    const lineLength = endX - startX;

    // Draw main line
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', startX);
    line.setAttribute('y1', lineY);
    line.setAttribute('x2', endX);
    line.setAttribute('y2', lineY);
    line.setAttribute('stroke', '#8b5cf6');
    line.setAttribute('stroke-width', '2');
    svg.appendChild(line);

    // Draw marks
    for (let i = 0; i <= 10; i++) {
        const x = startX + (lineLength * i) / 10;
        const mark = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        mark.setAttribute('x1', x);
        mark.setAttribute('y1', lineY - 5);
        mark.setAttribute('x2', x);
        mark.setAttribute('y2', lineY + 5);
        mark.setAttribute('stroke', '#8b5cf6');
        mark.setAttribute('stroke-width', '1');
        svg.appendChild(mark);

        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('x', x);
        label.setAttribute('y', lineY + 20);
        label.setAttribute('text-anchor', 'middle');
        label.setAttribute('font-size', '10');
        label.setAttribute('fill', '#1f2937');
        label.textContent = (i / 10).toFixed(1);
        svg.appendChild(label);
    }

    // Draw pointer
    const pointerX = startX + lineLength * decimal;
    const pointer = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    pointer.setAttribute('cx', pointerX);
    pointer.setAttribute('cy', lineY);
    pointer.setAttribute('r', '6');
    pointer.setAttribute('fill', '#ef4444');
    svg.appendChild(pointer);
}

// Initialize on load
window.addEventListener('load', () => {
    visualizeFraction();
    setupOperationTabs();
    generateFractionQuestion();
});

// Setup operation tabs
function setupOperationTabs() {
    const tabs = document.querySelectorAll('.op-tab');
    const contents = document.querySelectorAll('.operation-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const operation = tab.getAttribute('data-op');
            
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(operation).classList.add('active');
        });
    });
}

// Fraction operations
function calculateFractionAddition() {
    const num1 = parseInt(document.getElementById('add-num1').value) || 1;
    const den1 = parseInt(document.getElementById('add-den1').value) || 1;
    const num2 = parseInt(document.getElementById('add-num2').value) || 1;
    const den2 = parseInt(document.getElementById('add-den2').value) || 1;

    // Find common denominator
    const commonDen = den1 * den2;
    const newNum1 = num1 * den2;
    const newNum2 = num2 * den1;
    const resultNum = newNum1 + newNum2;

    // Simplify
    const gcd = findGCD(resultNum, commonDen);
    const simplifiedNum = resultNum / gcd;
    const simplifiedDen = commonDen / gcd;

    document.getElementById('add-result').textContent = 
        `${num1}/${den1} + ${num2}/${den2} = ${simplifiedNum}/${simplifiedDen}`;

    visualizeOperationResult('add-visual', simplifiedNum, simplifiedDen);
}

function calculateFractionSubtraction() {
    const num1 = parseInt(document.getElementById('sub-num1').value) || 1;
    const den1 = parseInt(document.getElementById('sub-den1').value) || 1;
    const num2 = parseInt(document.getElementById('sub-num2').value) || 1;
    const den2 = parseInt(document.getElementById('sub-den2').value) || 1;

    const commonDen = den1 * den2;
    const newNum1 = num1 * den2;
    const newNum2 = num2 * den1;
    const resultNum = newNum1 - newNum2;

    const gcd = findGCD(Math.abs(resultNum), commonDen);
    const simplifiedNum = resultNum / gcd;
    const simplifiedDen = commonDen / gcd;

    document.getElementById('sub-result').textContent = 
        `${num1}/${den1} - ${num2}/${den2} = ${simplifiedNum}/${simplifiedDen}`;

    visualizeOperationResult('sub-visual', Math.abs(simplifiedNum), simplifiedDen);
}

function calculateFractionMultiplication() {
    const num1 = parseInt(document.getElementById('mul-num1').value) || 1;
    const den1 = parseInt(document.getElementById('mul-den1').value) || 1;
    const num2 = parseInt(document.getElementById('mul-num2').value) || 1;
    const den2 = parseInt(document.getElementById('mul-den2').value) || 1;

    const resultNum = num1 * num2;
    const resultDen = den1 * den2;

    const gcd = findGCD(resultNum, resultDen);
    const simplifiedNum = resultNum / gcd;
    const simplifiedDen = resultDen / gcd;

    document.getElementById('mul-result').textContent = 
        `${num1}/${den1} × ${num2}/${den2} = ${simplifiedNum}/${simplifiedDen}`;

    visualizeOperationResult('mul-visual', simplifiedNum, simplifiedDen);
}

function calculateFractionDivision() {
    const num1 = parseInt(document.getElementById('div-num1').value) || 1;
    const den1 = parseInt(document.getElementById('div-den1').value) || 1;
    const num2 = parseInt(document.getElementById('div-num2').value) || 1;
    const den2 = parseInt(document.getElementById('div-den2').value) || 1;

    // Multiply by reciprocal
    const resultNum = num1 * den2;
    const resultDen = den1 * num2;

    const gcd = findGCD(resultNum, resultDen);
    const simplifiedNum = resultNum / gcd;
    const simplifiedDen = resultDen / gcd;

    document.getElementById('div-result').textContent = 
        `${num1}/${den1} ÷ ${num2}/${den2} = ${simplifiedNum}/${simplifiedDen}`;

    visualizeOperationResult('div-visual', simplifiedNum, simplifiedDen);
}

// Helper function: Find GCD
function findGCD(a, b) {
    return b === 0 ? a : findGCD(b, a % b);
}

// Visualize operation result
function visualizeOperationResult(elementId, numerator, denominator) {
    const container = document.getElementById(elementId);
    container.innerHTML = '';

    const maxDen = Math.min(denominator, 12);
    const barSize = Math.max(20, 100 / maxDen);

    for (let i = 0; i < maxDen; i++) {
        const bar = document.createElement('div');
        bar.style.width = barSize + 'px';
        bar.style.height = '30px';
        bar.style.borderRadius = '5px';
        bar.style.animation = 'popIn 0.3s ease forwards';
        bar.style.animationDelay = `${i * 0.1}s`;

        if (i < Math.min(numerator, maxDen)) {
            bar.style.background = 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)';
        } else {
            bar.style.background = 'rgba(200, 200, 200, 0.3)';
        }

        container.appendChild(bar);
    }
}

// Quiz functionality
let fractionQuizStats = { correct: 0, total: 0 };

function generateFractionQuestion() {
    const fractions = [
        { num: 1, den: 4, text: '1/4' },
        { num: 1, den: 3, text: '1/3' },
        { num: 1, den: 2, text: '1/2' },
        { num: 2, den: 3, text: '2/3' },
        { num: 3, den: 4, text: '3/4' },
    ];

    const fraction = fractions[Math.floor(Math.random() * fractions.length)];
    const correctAnswer = fraction.text;

    // Store correct answer
    window.currentFractionAnswer = correctAnswer;

    // Draw visual
    const visual = document.getElementById('quizVisual');
    visual.innerHTML = '';
    
    const size = 30;
    const den = fraction.den;
    const num = fraction.num;

    for (let i = 0; i < den; i++) {
        const segment = document.createElement('div');
        segment.style.width = size + 'px';
        segment.style.height = size + 'px';
        segment.style.borderRadius = '5px';
        segment.style.margin = '2px';
        
        if (i < num) {
            segment.style.background = 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)';
        } else {
            segment.style.background = 'rgba(255, 255, 255, 0.3)';
        }
        
        visual.appendChild(segment);
    }

    document.getElementById('quizQuestion').textContent = 'What fraction is shaded?';
}

function checkFractionAnswer(btn, answer) {
    const correct = answer === window.currentFractionAnswer;

    if (correct) {
        btn.classList.add('correct');
        fractionQuizStats.correct++;
        setTimeout(() => {
            generateFractionQuestion();
            document.querySelectorAll('.quiz-option').forEach(b => b.classList.remove('correct', 'wrong'));
        }, 500);
    } else {
        btn.classList.add('wrong');
    }

    fractionQuizStats.total++;
    const percentage = Math.round((fractionQuizStats.correct / fractionQuizStats.total) * 100);
    
    document.getElementById('frac-correct').textContent = fractionQuizStats.correct;
    document.getElementById('frac-score').textContent = percentage;
}

// Add input listeners
document.getElementById('numerator')?.addEventListener('input', visualizeFraction);
document.getElementById('denominator')?.addEventListener('input', visualizeFraction);