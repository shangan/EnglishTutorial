// 全局变量
let currentGrade = 1; // 默认一年级
let currentDialogue = 0;
let currentWord = 0;
let totalScore = 0;
let dialogues = []; // 当前年级的对话
let words = []; // 当前年级的单词

// 初始化应用
document.addEventListener('DOMContentLoaded', function() {
    loadScore();
    updateScoreDisplay();
    
    // 添加年级选择事件监听
    setupGradeSelection();
});

// 设置年级选择事件
function setupGradeSelection() {
    const gradeButtons = document.querySelectorAll('.grade-btn');
    gradeButtons.forEach(button => {
        button.addEventListener('click', function() {
            currentGrade = parseInt(this.getAttribute('data-grade'));
            selectGrade(currentGrade);
        });
    });
}

// 选择年级
function selectGrade(grade) {
    currentGrade = grade;
    // 从gradeData中获取当前年级的对话和单词
    dialogues = gradeData[grade].dialogues;
    words = gradeData[grade].words;
    
    // 重置当前索引
    currentDialogue = 0;
    currentWord = 0;
    
    // 更新显示
    document.getElementById('current-grade-display').textContent = gradeData[grade].name;
    document.getElementById('grade-selection').style.display = 'none';
    document.getElementById('main-menu').style.display = 'block';
}

// 返回年级选择
function backToGradeSelection() {
    document.getElementById('grade-selection').style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('dialogue-section').style.display = 'none';
    document.getElementById('word-section').style.display = 'none';
    document.getElementById('word-practice-options').style.display = 'none';
    document.getElementById('match-section').style.display = 'none';
}

// 开始对话练习
function startDialogue() {
    if (!dialogues || dialogues.length === 0) {
        alert('当前年级没有对话练习内容！');
        return;
    }
    
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('dialogue-section').style.display = 'block';
    
    // 填充对话类别选择器
    fillDialogueCategories();
    
    loadDialogue();
}

// 填充对话类别选择器
function fillDialogueCategories() {
    const categorySelect = document.getElementById('dialogue-category');
    // 清空现有选项
    categorySelect.innerHTML = '<option value="all">所有对话</option>';
    
    // 获取所有不重复的类别
    const categories = [...new Set(dialogues.map(d => d.category))];
    
    // 添加类别选项
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
    
    // 添加类别变化事件
    categorySelect.onchange = function() {
        filterDialogues(this.value);
    };
}

// 根据类别筛选对话
function filterDialogues(category) {
    if (category === 'all') {
        dialogues = gradeData[currentGrade].dialogues;
    } else {
        dialogues = gradeData[currentGrade].dialogues.filter(d => d.category === category);
    }
    
    currentDialogue = 0;
    if (dialogues.length > 0) {
        loadDialogue();
    }
}

// 显示单词练习选项
function showWordPracticeOptions() {
    if (!words || words.length === 0) {
        alert('当前年级没有单词练习内容！');
        return;
    }
    
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('word-practice-options').style.display = 'block';
}

// 开始单词练习
function startWordPractice(mode) {
    document.getElementById('word-practice-options').style.display = 'none';
    document.getElementById('word-section').style.display = 'block';
    
    // 设置当前模式显示
    let modeText = '';
    switch (mode) {
        case 'cn-to-en':
            modeText = '看中文写英文';
            break;
        case 'en-to-cn':
            modeText = '看英文写中文';
            break;
        case 'fill-blanks':
            modeText = '填空练习';
            break;
        case 'match':
            startMatchGame();
            return;
        default:
            modeText = '看中文写英文';
    }
    
    document.getElementById('current-mode').textContent = modeText;
    
    // 填充单词类别选择器
    fillWordCategories();
    
    // 保存当前模式
    currentWordMode = mode;
    
    loadWord();
    setupWordEvents();
}

// 填充单词类别选择器
function fillWordCategories() {
    const categorySelect = document.getElementById('word-category');
    // 清空现有选项
    categorySelect.innerHTML = '<option value="all">所有单词</option>';
    
    // 获取所有不重复的类别
    const categories = [...new Set(words.map(w => w.category))];
    
    // 添加类别选项
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
    
    // 添加类别变化事件
    categorySelect.onchange = function() {
        filterWords(this.value);
    };
}

// 根据类别筛选单词
function filterWords(category) {
    if (category === 'all') {
        words = gradeData[currentGrade].words;
    } else {
        words = gradeData[currentGrade].words.filter(w => w.category === category);
    }
    
    currentWord = 0;
    if (words.length > 0) {
        loadWord();
    }
}

// 返回单词练习选项
function backToWordOptions() {
    document.getElementById('word-section').style.display = 'none';
    document.getElementById('match-section').style.display = 'none';
    document.getElementById('word-practice-options').style.display = 'block';
}

// 返回主菜单
function backToMenu() {
    document.getElementById('main-menu').style.display = 'block';
    document.getElementById('dialogue-section').style.display = 'none';
    document.getElementById('word-section').style.display = 'none';
    document.getElementById('word-practice-options').style.display = 'none';
    document.getElementById('match-section').style.display = 'none';
}

// 加载对话
function loadDialogue() {
    if (!dialogues || dialogues.length === 0) {
        document.getElementById('dialogue-content').innerHTML = '<p>当前类别没有对话内容</p>';
        return;
    }
    
    const dialogue = dialogues[currentDialogue];
    const contentDiv = document.getElementById('dialogue-content');
    
    let html = `<h3 style="text-align: center; color: #4a90e2; margin-bottom: 20px;">${dialogue.title}</h3>`;
    
    dialogue.conversation.forEach((line, index) => {
        const speakerClass = index % 2 === 0 ? 'speaker-a' : 'speaker-b';
        html += `
            <div class="dialogue-line ${speakerClass}">
                <div class="speaker-name">${line.speaker}:</div>
                <div>${line.text}</div>
            </div>
        `;
    });
    
    contentDiv.innerHTML = html;
    
    // 设置按钮事件
    setupDialogueEvents();
}

// 设置对话事件
function setupDialogueEvents() {
    document.getElementById('play-dialogue').onclick = function() {
        playDialogue();
    };
    
    document.getElementById('next-dialogue').onclick = function() {
        nextDialogue();
    };
}

// 播放对话（模拟）
function playDialogue() {
    const button = document.getElementById('play-dialogue');
    button.textContent = '🔊 正在播放...';
    button.disabled = true;
    
    // 模拟播放时间
    setTimeout(() => {
        button.textContent = '🔊 播放对话';
        button.disabled = false;
        addScore(5);
    }, 3000);
}

// 下一个对话
function nextDialogue() {
    if (!dialogues || dialogues.length === 0) return;
    
    currentDialogue = (currentDialogue + 1) % dialogues.length;
    loadDialogue();
    addScore(10);
}

// 当前单词练习模式
let currentWordMode = 'cn-to-en';

// 加载单词
function loadWord() {
    if (!words || words.length === 0) {
        document.getElementById('word-prompt').innerHTML = '<p>当前类别没有单词内容</p>';
        return;
    }
    
    const word = words[currentWord];
    
    document.getElementById('word-image').src = word.image;
    const promptElement = document.getElementById('word-prompt');
    
    // 根据不同模式显示不同提示
    switch (currentWordMode) {
        case 'cn-to-en':
            promptElement.textContent = `中文意思: ${word.meaning}`;
            document.getElementById('word-input').placeholder = "请输入英文单词";
            break;
        case 'en-to-cn':
            promptElement.textContent = `英文单词: ${word.word}`;
            document.getElementById('word-input').placeholder = "请输入中文意思";
            break;
        case 'fill-blanks':
            // 创建带空格的单词提示
            const wordLetters = word.word.split('');
            const blanksCount = Math.ceil(wordLetters.length / 3); // 约1/3的字母变为空格
            
            let blankedWord = [...wordLetters];
            let blankedPositions = [];
            
            // 随机选择位置变为空格
            for (let i = 0; i < blanksCount; i++) {
                let pos;
                do {
                    pos = Math.floor(Math.random() * wordLetters.length);
                } while (blankedPositions.includes(pos));
                
                blankedPositions.push(pos);
                blankedWord[pos] = '_';
            }
            
            // 创建HTML显示
            let blankedHTML = '';
            blankedWord.forEach((letter, index) => {
                if (letter === '_') {
                    blankedHTML += `<span class="fill-blank" data-pos="${index}"></span>`;
                } else {
                    blankedHTML += letter;
                }
            });
            
            promptElement.innerHTML = `
                <p>中文意思: ${word.meaning}</p>
                <p>填写缺少的字母: ${blankedHTML}</p>
            `;
            document.getElementById('word-input').placeholder = "请输入缺少的字母";
            break;
    }
    
    document.getElementById('word-input').value = '';
    document.getElementById('word-result').textContent = '';
    document.getElementById('word-input').focus();
}

// 设置单词练习事件
function setupWordEvents() {
    const input = document.getElementById('word-input');
    const checkBtn = document.getElementById('check-word');
    const nextBtn = document.getElementById('next-word');
    const playBtn = document.getElementById('play-word');
    
    // 检查答案
    checkBtn.onclick = function() {
        checkWordAnswer();
    };
    
    // 下一个单词
    nextBtn.onclick = function() {
        nextWord();
    };
    
    // 播放单词发音（模拟）
    playBtn.onclick = function() {
        playWordAudio();
    };
    
    // 回车键检查答案
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkWordAnswer();
        }
    });
}

// 检查单词答案
function checkWordAnswer() {
    if (!words || words.length === 0) return;
    
    const userInput = document.getElementById('word-input').value.trim();
    const word = words[currentWord];
    const resultDiv = document.getElementById('word-result');
    
    let isCorrect = false;
    
    switch (currentWordMode) {
        case 'cn-to-en':
            isCorrect = userInput.toLowerCase() === word.word.toLowerCase();
            if (isCorrect) {
                resultDiv.innerHTML = '🎉 太棒了！答案正确！';
                resultDiv.className = 'correct';
                addScore(20);
            } else {
                resultDiv.innerHTML = `❌ 答案错误，正确答案是: <strong>${word.word}</strong>`;
                resultDiv.className = 'incorrect';
            }
            break;
        case 'en-to-cn':
            // 中文答案可能有多种表达，这里简单判断是否包含
            isCorrect = userInput === word.meaning || 
                       word.meaning.includes(userInput) || 
                       userInput.includes(word.meaning);
            if (isCorrect) {
                resultDiv.innerHTML = '🎉 太棒了！答案正确！';
                resultDiv.className = 'correct';
                addScore(20);
            } else {
                resultDiv.innerHTML = `❌ 答案错误，正确答案是: <strong>${word.meaning}</strong>`;
                resultDiv.className = 'incorrect';
            }
            break;
        case 'fill-blanks':
            // 获取所有空格位置
            const blanks = document.querySelectorAll('.fill-blank');
            const wordLetters = word.word.split('');
            
            // 用户输入的字母
            const inputLetters = userInput.split('');
            
            if (inputLetters.length !== blanks.length) {
                resultDiv.innerHTML = `❌ 请输入${blanks.length}个字母`;
                resultDiv.className = 'incorrect';
                return;
            }
            
            // 检查每个空格
            let allCorrect = true;
            blanks.forEach((blank, index) => {
                const pos = parseInt(blank.getAttribute('data-pos'));
                if (inputLetters[index].toLowerCase() !== wordLetters[pos].toLowerCase()) {
                    allCorrect = false;
                }
            });
            
            if (allCorrect) {
                resultDiv.innerHTML = '🎉 太棒了！答案正确！';
                resultDiv.className = 'correct';
                addScore(15);
            } else {
                resultDiv.innerHTML = `❌ 答案错误，正确答案是: <strong>${word.word}</strong>`;
                resultDiv.className = 'incorrect';
            }
            break;
    }
}

// 下一个单词
function nextWord() {
    if (!words || words.length === 0) return;
    
    currentWord = (currentWord + 1) % words.length;
    loadWord();
}

// 播放单词发音（模拟）
function playWordAudio() {
    const button = document.getElementById('play-word');
    button.textContent = '🔊';
    button.style.background = '#ffc107';
    
    // 模拟播放
    setTimeout(() => {
        button.style.background = '#28a745';
    }, 1000);
}

// 单词配对游戏
function startMatchGame() {
    document.getElementById('word-practice-options').style.display = 'none';
    document.getElementById('match-section').style.display = 'block';
    
    // 创建配对游戏
    createMatchGame();
}

// 创建配对游戏
function createMatchGame() {
    if (!words || words.length < 6) {
        document.getElementById('match-board').innerHTML = '<p>单词数量不足，无法创建配对游戏</p>';
        return;
    }
    
    // 随机选择6个单词
    const gameWords = [];
    const usedIndices = new Set();
    
    while (gameWords.length < 6 && usedIndices.size < words.length) {
        const randomIndex = Math.floor(Math.random() * words.length);
        if (!usedIndices.has(randomIndex)) {
            usedIndices.add(randomIndex);
            gameWords.push(words[randomIndex]);
        }
    }
    
    // 创建配对卡片（英文和中文）
    const cards = [];
    gameWords.forEach(word => {
        cards.push({ type: 'en', content: word.word, id: word.id });
        cards.push({ type: 'cn', content: word.meaning, id: word.id });
    });
    
    // 随机排序卡片
    cards.sort(() => Math.random() - 0.5);
    
    // 创建游戏板
    const boardElement = document.getElementById('match-board');
    boardElement.innerHTML = '';
    
    cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'match-card';
        cardElement.dataset.index = index;
        cardElement.dataset.id = card.id;
        cardElement.dataset.type = card.type;
        
        const frontElement = document.createElement('div');
        frontElement.className = 'match-card-front';
        frontElement.textContent = '?';
        
        const backElement = document.createElement('div');
        backElement.className = 'match-card-back';
        backElement.textContent = card.content;
        
        cardElement.appendChild(frontElement);
        cardElement.appendChild(backElement);
        
        cardElement.addEventListener('click', handleCardClick);
        
        boardElement.appendChild(cardElement);
    });
    
    // 重置游戏状态
    document.getElementById('match-result').textContent = '';
    flippedCards = [];
    matchedPairs = 0;
}

// 已翻开的卡片
let flippedCards = [];
// 已匹配的对数
let matchedPairs = 0;

// 处理卡片点击
function handleCardClick() {
    // 如果已经翻开或已匹配，则忽略点击
    if (this.classList.contains('flipped') || this.classList.contains('matched')) {
        return;
    }
    
    // 如果已经有两张卡片翻开，则忽略点击
    if (flippedCards.length >= 2) {
        return;
    }
    
    // 翻开卡片
    this.classList.add('flipped');
    flippedCards.push(this);
    
    // 如果翻开了两张卡片，检查是否匹配
    if (flippedCards.length === 2) {
        const card1 = flippedCards[0];
        const card2 = flippedCards[1];
        
        if (card1.dataset.id === card2.dataset.id && card1.dataset.type !== card2.dataset.type) {
            // 匹配成功
            setTimeout(() => {
                card1.classList.add('matched');
                card2.classList.add('matched');
                flippedCards = [];
                matchedPairs++;
                
                // 检查是否完成所有匹配
                if (matchedPairs === 6) {
                    document.getElementById('match-result').textContent = '🎉 恭喜！你完成了所有匹配！';
                    addScore(50);
                } else {
                    addScore(10);
                }
            }, 500);
        } else {
            // 匹配失败，翻回卡片
            setTimeout(() => {
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
                flippedCards = [];
            }, 1000);
        }
    }
}

// 添加分数
function addScore(points) {
    totalScore += points;
    updateScoreDisplay();
    saveScore();
    
    // 显示得分动画
    showScoreAnimation(points);
}

// 更新分数显示
function updateScoreDisplay() {
    document.getElementById('total-score').textContent = totalScore;
}

// 显示得分动画
function showScoreAnimation(points) {
    const animation = document.createElement('div');
    animation.textContent = `+${points} 分!`;
    animation.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #28a745;
        color: white;
        padding: 10px 20px;
        border-radius: 20px;
        font-size: 1.5em;
        font-weight: bold;
        z-index: 1000;
        animation: scoreFloat 2s ease-out forwards;
    `;
    
    // 添加CSS动画
    if (!document.getElementById('score-animation-style')) {
        const style = document.createElement('style');
        style.id = 'score-animation-style';
        style.textContent = `
            @keyframes scoreFloat {
                0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                50% { transform: translate(-50%, -50%) scale(1.2); }
                100% { opacity: 0; transform: translate(-50%, -200%) scale(1); }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(animation);
    
    setTimeout(() => {
        document.body.removeChild(animation);
    }, 2000);
}

// 保存分数到本地存储
function saveScore() {
    localStorage.setItem('englishPracticeScore', totalScore.toString());
}

// 加载分数
function loadScore() {
    const savedScore = localStorage.getItem('englishPracticeScore');
    if (savedScore) {
        totalScore = parseInt(savedScore);
    }
}