   // Створюємо всі елементи сторінки динамічно
document.addEventListener('DOMContentLoaded', function() {
    // Основний контейнер
    const container = document.createElement('div');
    container.className = 'container';
    
    // Заголовок
    const title = document.createElement('h1');
    title.textContent = 'Магічна куля з Дедпулом';
    
    // Підзаголовок
    const subtitle = document.createElement('p');
    subtitle.className = 'subtitle';
    subtitle.textContent = 'Задай своє запитання Дедпулу та отримай відповідь';
    
    // Контейнер для магічної кулі
    const magicBallContainer = document.createElement('div');
    magicBallContainer.className = 'magic-ball-container';
    
    // Магічна куля
    const magicBall = document.createElement('div');
    magicBall.className = 'magic-ball';
    magicBall.id = 'magicBall';
    
    // Зображення кулі
    const ballImage = document.createElement('img');
    ballImage.className = 'ball-image';
    ballImage.src = 'images/Deadpool.png';
    ballImage.alt = 'Магічна куля';
    ballImage.id = 'ballImage';
    
    // Текст відповіді (без фону)
    const answerText = document.createElement('div');
    answerText.className = 'answer-text';
    answerText.id = 'answerText';
    answerText.textContent = '';
    
    // Додаємо елементи до кулі
    magicBall.appendChild(ballImage);
    magicBall.appendChild(answerText);
    magicBallContainer.appendChild(magicBall);
    
    // Поле для вводу запитання
    const questionInput = document.createElement('input');
    questionInput.type = 'text';
    questionInput.className = 'question-input';
    questionInput.id = 'questionInput';
    questionInput.placeholder = 'Введіть ваше запитання';
    
    // Повідомлення про валідацію
    const validationMessage = document.createElement('div');
    validationMessage.className = 'validation-message';
    validationMessage.id = 'validationMessage';
    
    // Кнопка запитання
    const askButton = document.createElement('button');
    askButton.className = 'ask-button';
    askButton.id = 'askButton';
    askButton.textContent = 'Запитати кулю';
    
    // Додаємо всі елементи до контейнера
    container.appendChild(title);
    container.appendChild(subtitle);
    container.appendChild(magicBallContainer);
    container.appendChild(questionInput);
    container.appendChild(validationMessage);
    container.appendChild(askButton);
    
    // Додаємо контейнер до body
    document.body.appendChild(container);
    
    // Логіка магічної кулі
    const magicBallElement = document.getElementById('magicBall');
    const ballImageElement = document.getElementById('ballImage');
    const answerTextElement = document.getElementById('answerText');
    const questionInputElement = document.getElementById('questionInput');
    const askButtonElement = document.getElementById('askButton');
    const validationMessageElement = document.getElementById('validationMessage');
    
    // Масив можливих відповідей
    const answers = [
        "ТАК",
        "НІ",
        "МОЖЛИВО",
        "НЕ ВПЕВНЕНИЙ",
        "ЗКОНЦЕНТРУЙСЯ",
        "БЕЗ СУМНІВУ",
        "ТАК, БЕЗУМОВНО",
        "ПЕРСПЕКТИВИ ДОБРІ",
        "ЗНАКИ КАЖУТЬ ТАК",
        "НАВІТЬ НЕ ДУМАЙ",
        "МОЯ ВІДПОВІДЬ - НІ",
        "ДУЖЕ СУМНІВНО",
        "СПИТАЙ ПІЗНІШЕ",
        "КРАЩЕ НЕ РОЗРАХОВУЙ",
        "ТАК, З ЧАСОМ",
        "НЕ МОЖУ ПЕРЕДБАЧИТИ",
        "БЕЗПЕРЕЧНО",
        "ШВИДШЕ ЗА ВСЕ",
        "НЕ ЗАРАЗ",
        "ЦЕ ВИЗНАЧЕНО"
    ];
    
    // Функція для отримання випадкової відповіді
    function getRandomAnswer() {
        const randomIndex = Math.floor(Math.random() * answers.length);
        return answers[randomIndex];
    }
    
    // Функція для валідації запитання
    function validateQuestion(question) {
        if (!question.trim()) {
            return "Будь ласка, введіть запитання!";
        }
        
        if (question.trim().length < 3) {
            return "Запитання занадто коротке!";
        }
        
        if (!question.trim().endsWith('?')) {
            return "Запитання має закінчуватися знаком питання!";
        }
        
        return "";
    }
    
    // Функція для обробки запитання
    function processQuestion() {
        const question = questionInputElement.value;
        const validationError = validateQuestion(question);
        
        if (validationError) {
            validationMessageElement.textContent = validationError;
            return;
        }
        
        validationMessageElement.textContent = "";
        
        // Анімація кулі
        magicBallElement.classList.add('shake');
        
        // Очищаємо відповідь під час анімації
        answerTextElement.textContent = "...";
        answerTextElement.style.opacity = "0.5";
        
        // Затримка для імітації "думання"
        setTimeout(() => {
            const randomAnswer = getRandomAnswer();
            answerTextElement.textContent = randomAnswer;
            answerTextElement.style.opacity = "1";
            answerTextElement.classList.add('fade-in');
            
            // Видаляємо класи анімації
            magicBallElement.classList.remove('shake');
            
            // Очищаємо поле вводу
            questionInputElement.value = "";
            
            // Видаляємо клас fade-in після завершення анімації
            setTimeout(() => {
                answerTextElement.classList.remove('fade-in');
            }, 1000);
            
        }, 1500);
    }
    
    // Обробник події для кнопки
    askButtonElement.addEventListener('click', processQuestion);
    
    // Обробник події для поля вводу (Enter)
    questionInputElement.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            processQuestion();
        }
    });
    
    // Обробник кліку по магічній кулі
    magicBallElement.addEventListener('click', function() {
        if (questionInputElement.value) {
            processQuestion();
        } else {
            validationMessageElement.textContent = "Спочатку введіть запитання!";
            setTimeout(() => {
                validationMessageElement.textContent = "";
            }, 2000);
        }
    });
    
    // Додаємо пульсацію для кулі при завантаженні
    ballImageElement.classList.add('pulse');
    setTimeout(() => {
        ballImageElement.classList.remove('pulse');
    }, 3000);
    
    console.log('Магічна куля завантажена! Використовується зображення 90 page/90.PNG');
});