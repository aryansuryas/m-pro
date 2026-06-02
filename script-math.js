// Tab switching
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.getAttribute('data-tab');
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        button.classList.add('active');
        document.getElementById(tabName).classList.add('active');
    });
});

// Multiplication Visualizer
function visualizeMultiplication() {
    const num1 = parseInt(document.getElementById('mult-num1').value) || 1;
    const num2 = parseInt(document.getElementById('mult-num2').value) || 1;
    const result = num1 * num2;
    
    const grid = document.getElementById('multiplication-grid');
    grid.innerHTML = '';
    grid.style.gridTemplateColumns = `repeat(${num2}, 1fr)`;
    grid.style.width = `${num2 * 50}px`;
    grid.style.margin = '0 auto';
    
    for (let i = 0; i < result; i++) {
        const item = document.createElement('div');
        item.className = 'grid-item';
        item.style.animationDelay = `${i * 0.05}s`;
        grid.appendChild(item);
    }
    
    document.getElementById('mult-result').textContent = result;
}

// Division Visualizer
function visualizeDivision() {
    const num1 = parseInt(document.getElementById('div-num1').value) || 1;
    const num2 = parseInt(document.getElementById('div-num2').value) || 1;
    const result = Math.floor(num1 / num2);
    
    const groupsContainer = document.getElementById('division-groups');
    groupsContainer.innerHTML = '';
    
    let itemCount = 0;
    for (let i = 0; i < num2; i++) {
        const group = document.createElement('div');
        group.className = 'group';
        
        for (let j = 0; j < result; j++) {
            const item = document.createElement('div');
            item.className = 'item';
            item.style.animationDelay = `${itemCount * 0.03}s`;
            group.appendChild(item);
            itemCount++;
        }
        groupsContainer.appendChild(group);
    }
    
    document.getElementById('div-result').textContent = result;
}

// Addition Visualizer
function visualizeAddition() {
    const num1 = parseInt(document.getElementById('add-num1').value) || 1;
    const num2 = parseInt(document.getElementById('add-num2').value) || 1;
    const result = num1 + num2;
    
    const barsContainer = document.getElementById('addition-bars');
    barsContainer.innerHTML = '';
    
    const bar1Container = document.createElement('div');
    bar1Container.className = 'bar-container';
    const bar1 = document.createElement('div');
    bar1.className = 'bar';
    bar1.style.setProperty('--height', `${num1 * 30}px`);
    bar1Container.appendChild(bar1);
    const label1 = document.createElement('span');
    label1.textContent = num1;
    label1.className = 'bar-label';
    bar1Container.appendChild(label1);
    
    const plus = document.createElement('div');
    plus.style.fontSize = '2rem';
    plus.style.fontWeight = 'bold';
    plus.style.color = 'var(--primary)';
    plus.textContent = '+';
    
    const bar2Container = document.createElement('div');
    bar2Container.className = 'bar-container';
    const bar2 = document.createElement('div');
    bar2.className = 'bar';
    bar2.style.setProperty('--height', `${num2 * 30}px`);
    bar2Container.appendChild(bar2);
    const label2 = document.createElement('span');
    label2.textContent = num2;
    label2.className = 'bar-label';
    bar2Container.appendChild(label2);
    
    const equals = document.createElement('div');
    equals.style.fontSize = '2rem';
    equals.style.fontWeight = 'bold';
    equals.style.color = 'var(--primary)';
    equals.textContent = '=';
    
    const resultContainer = document.createElement('div');
    resultContainer.className = 'bar-container';
    const resultBar = document.createElement('div');
    resultBar.className = 'bar';
    resultBar.style.setProperty('--height', `${result * 30}px`);
    resultBar.style.background = 'linear-gradient(180deg, var(--success) 0%, #06b6d4 100%)';
    resultContainer.appendChild(resultBar);
    const resultLabel = document.createElement('span');
    resultLabel.textContent = result;
    resultLabel.className = 'bar-label';
    resultContainer.appendChild(resultLabel);
    
    barsContainer.appendChild(bar1Container);
    barsContainer.appendChild(plus);
    barsContainer.appendChild(bar2Container);
    barsContainer.appendChild(equals);
    barsContainer.appendChild(resultContainer);
    
    document.getElementById('add-result').textContent = result;
}

// Subtraction Visualizer
function visualizeSubtraction() {
    const num1 = parseInt(document.getElementById('sub-num1').value) || 1;
    const num2 = parseInt(document.getElementById('sub-num2').value) || 1;
    const result = Math.max(0, num1 - num2);
    
    const barsContainer = document.getElementById('subtraction-bars');
    barsContainer.innerHTML = '';
    
    const bar1Container = document.createElement('div');
    bar1Container.className = 'bar-container';
    const bar1 = document.createElement('div');
    bar1.className = 'bar';
    bar1.style.setProperty('--height', `${num1 * 30}px`);
    bar1Container.appendChild(bar1);
    const label1 = document.createElement('span');
    label1.textContent = num1;
    label1.className = 'bar-label';
    bar1Container.appendChild(label1);
    
    const minus = document.createElement('div');
    minus.style.fontSize = '2rem';
    minus.style.fontWeight = 'bold';
    minus.style.color = 'var(--primary)';
    minus.textContent = '-';
    
    const bar2Container = document.createElement('div');
    bar2Container.className = 'bar-container';
    const bar2 = document.createElement('div');
    bar2.className = 'bar';
    bar2.style.setProperty('--height', `${num2 * 30}px`);
    bar2.style.background = 'linear-gradient(180deg, #ef4444 0%, #dc2626 100%)';
    bar2.style.opacity = '0.5';
    bar2Container.appendChild(bar2);
    const label2 = document.createElement('span');
    label2.textContent = num2;
    label2.className = 'bar-label';
    bar2Container.appendChild(label2);
    
    const equals = document.createElement('div');
    equals.style.fontSize = '2rem';
    equals.style.fontWeight = 'bold';
    equals.style.color = 'var(--primary)';
    equals.textContent = '=';
    
    const resultContainer = document.createElement('div');
    resultContainer.className = 'bar-container';
    const resultBar = document.createElement('div');
    resultBar.className = 'bar';
    resultBar.style.setProperty('--height', `${result * 30}px`);
    resultBar.style.background = 'linear-gradient(180deg, var(--success) 0%, #06b6d4 100%)';
    resultContainer.appendChild(resultBar);
    const resultLabel = document.createElement('span');
    resultLabel.textContent = result;
    resultLabel.className = 'bar-label';
    resultContainer.appendChild(resultLabel);
    
    barsContainer.appendChild(bar1Container);
    barsContainer.appendChild(minus);
    barsContainer.appendChild(bar2Container);
    barsContainer.appendChild(equals);
    barsContainer.appendChild(resultContainer);
    
    document.getElementById('sub-result').textContent = result;
}

window.addEventListener('load', () => {
    visualizeMultiplication();
    visualizeAddition();
    visualizeDivision();
    visualizeSubtraction();
    generateNewQuestion();
});

let quizStats = { correct: 0, wrong: 0 };

function generateNewQuestion() {
    const operations = ['multiply', 'divide', 'add', 'subtract'];
    const op = operations[Math.floor(Math.random() * operations.length)];
    let num1, num2, answer, question;
    
    if (op === 'multiply') {
        num1 = Math.floor(Math.random() * 12) + 1;
        num2 = Math.floor(Math.random() * 12) + 1;
        answer = num1 * num2;
        question = `${num1} × ${num2} = ?`;
    } else if (op === 'divide') {
        num2 = Math.floor(Math.random() * 12) + 1;
        answer = Math.floor(Math.random() * 12) + 1;
        num1 = answer * num2;
        question = `${num1} ÷ ${num2} = ?`;
    } else if (op === 'add') {
        num1 = Math.floor(Math.random() * 20) + 1;
        num2 = Math.floor(Math.random() * 20) + 1;
        answer = num1 + num2;
        question = `${num1} + ${num2} = ?`;
    } else {
        num1 = Math.floor(Math.random() * 30) + 1;
        num2 = Math.floor(Math.random() * num1);
        answer = num1 - num2;
        question = `${num1} - ${num2} = ?`;
    }
    
    document.getElementById('quiz-question').textContent = question;
    
    const options = [answer];
    while (options.length < 4) {
        const wrong = answer + (Math.floor(Math.random() * 10) - 5);
        if (wrong > 0 && !options.includes(wrong)) {
            options.push(wrong);
        }
    }
    
    options.sort(() => Math.random() - 0.5);
    
    const optionBtns = document.querySelectorAll('.option-btn');
    optionBtns.forEach((btn, index) => {
        btn.textContent = options[index];
        btn.classList.remove('correct', 'wrong');
        btn.onclick = () => checkAnswer(btn, options[index]);
    });
}

function checkAnswer(btn, selectedAnswer) {
    const questionText = document.getElementById('quiz-question').textContent;
    const operators = ['×', '÷', '+', '-'];
    
    let correctAnswer;
    operators.forEach(op => {
        if (questionText.includes(op)) {
            const parts = questionText.replace('= ?', '').split(op).map(x => x.trim());
            const num1 = parseInt(parts[0]);
            const num2 = parseInt(parts[1]);
            
            if (op === '×') correctAnswer = num1 * num2;
            else if (op === '÷') correctAnswer = Math.floor(num1 / num2);
            else if (op === '+') correctAnswer = num1 + num2;
            else if (op === '-') correctAnswer = num1 - num2;
        }
    });
    
    if (selectedAnswer === correctAnswer) {
        btn.classList.add('correct');
        quizStats.correct++;
        setTimeout(() => {
            generateNewQuestion();
        }, 500);
    } else {
        btn.classList.add('wrong');
        quizStats.wrong++;
    }
    
    updateStats();
}

function updateStats() {
    const total = quizStats.correct + quizStats.wrong;
    const percentage = total === 0 ? 0 : Math.round((quizStats.correct / total) * 100);
    
    document.getElementById('correct-count').textContent = quizStats.correct;
    document.getElementById('wrong-count').textContent = quizStats.wrong;
    document.getElementById('score-percent').textContent = percentage;
}

document.getElementById('mult-num1')?.addEventListener('input', visualizeMultiplication);
document.getElementById('mult-num2')?.addEventListener('input', visualizeMultiplication);
document.getElementById('div-num1')?.addEventListener('input', visualizeDivision);
document.getElementById('div-num2')?.addEventListener('input', visualizeDivision);
document.getElementById('add-num1')?.addEventListener('input', visualizeAddition);
document.getElementById('add-num2')?.addEventListener('input', visualizeAddition);
document.getElementById('sub-num1')?.addEventListener('input', visualizeSubtraction);
document.getElementById('sub-num2')?.addEventListener('input', visualizeSubtraction);

window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.feature-card, .stat-card');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '0';
            el.style.animation = 'slideInUp 0.6s ease forwards';
        }, index * 100);
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});