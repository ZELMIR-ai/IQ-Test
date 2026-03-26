// ============================================================
//  ВОПРОСЫ
// ============================================================
const QUESTIONS = [
  { text: "Если в комнате 3 яблока и ты забрал 2 — сколько яблок у ТЕБЯ?", options: ["1", "2", "3", "Я не ем яблоки"] },
  { text: "Сколько месяцев в году имеют 28 дней?", options: ["Только февраль", "Один", "Все 12", "Зависит от года"] },
  { text: "Если квадрат имеет сторону 5 см, чему равна его площадь?", options: ["10 см²", "20 см²", "25 см²", "15 см²"] },
  { text: "Может ли мужчина жениться на сестре своей вдовы?", options: ["Нет, это незаконно", "Да, если попросит", "Нет — он же мёртв", "Только в Европе"] },
  { text: "Столица Австралии — это...", options: ["Сидней", "Мельбурн", "Канберра", "Брисбен"] },
  { text: "Что станет с красной шапочкой, если её стирать при 90°C?", options: ["Сядет", "Выцветет", "Ничего", "Это персонаж, у неё нет шапки"] },
  { text: "Чему равно: 2 + 2 × 2?", options: ["8", "6", "4", "16"] },
  { text: "Сколько животных Моисей взял на ковчег каждого вида?", options: ["2", "7", "По одному", "Это был Ной, а не Моисей"] },
  { text: "Что тяжелее: килограмм железа или килограмм ваты?", options: ["Железо", "Вата", "Одинаково", "Зависит от влажности"] },
  { text: "Некоторые месяцы имеют 31 день. Сколько месяцев имеют 30 дней?", options: ["4", "6", "11", "Все кроме февраля"] },
  { text: "В какой стране придумали арабские цифры?", options: ["Аравия", "Египет", "Индия", "Иран"] },
  { text: "Доктор даёт 3 таблетки — принимать каждые полчаса. Через сколько они кончатся?", options: ["1,5 часа", "1 час", "30 минут", "2 часа"] },
  { text: "Что происходит с растением, если его не поливать 3 месяца?", options: ["Ничего", "Засохнет", "Уснёт", "Зависит от растения"] },
  { text: "Если петух снесёт яйцо на вершине крыши — в какую сторону оно скатится?", options: ["На юг", "По ветру", "Петух не несёт яйца", "Упадёт вертикально"] },
  { text: "Последний вопрос! Чему равно: 0,5 + 0,5 × 0?", options: ["0", "0,5", "1", "Не существует"] }
];

// ============================================================
//  КАПЧА — реальные фото (Unsplash, бесплатно)
// ============================================================
const CAPTCHA_IMAGES = [
  { url: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=200&h=200&fit=crop&auto=format", correct: true },
  { url: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=200&h=200&fit=crop&auto=format", correct: true },
  { url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=200&h=200&fit=crop&auto=format", correct: true },
  { url: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=200&h=200&fit=crop&auto=format", correct: false },
  { url: "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=200&h=200&fit=crop&auto=format", correct: false },
  { url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=200&h=200&fit=crop&auto=format", correct: false },
  { url: "https://images.unsplash.com/photo-1543946207-39bd91e70ca7?w=200&h=200&fit=crop&auto=format", correct: false },
  { url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=200&h=200&fit=crop&auto=format", correct: false },
  { url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=200&h=200&fit=crop&auto=format", correct: false }
];

// ============================================================
//  РЕЗУЛЬТАТЫ
// ============================================================
const RESULTS = [
  { lo:30, hi:39, level:"💀 Критически низкий уровень", text:"Такой результат встречается лишь у 0.1% населения планеты. Учёные считают это научным феноменом. Ваш мозг умудрился набрать балл ниже, чем рандомное угадывание.\n\nНо есть хорошая новость: вы всё равно умнее пользователя Даниил Коротких. Это единственный позитивный факт на сегодня. 🫡" },
  { lo:40, hi:49, level:"😬 Очень низкий уровень", text:"Поздравляем! Вы побили рекорд нашей системы за последние 3 года. Большинство лабораторных мышей в наших тестах показывают результат лучше.\n\nНо есть луч надежды: вы всё ещё умнее пользователя Даниил Коротких. Это что-то значит... наверное. 🐭" },
  { lo:50, hi:59, level:"😐 Низкий уровень", text:"Хотя бы вы знаете, как пользоваться интернетом — это уже что-то. Рекомендуем больше читать книги, смотреть Discovery и, возможно, не есть перед важными тестами.\n\nP.S. Даниил Коротких сделал бы хуже. Утешьтесь этим фактом. 📚" },
  { lo:60, hi:70, level:"😅 Немного выше дна", text:"Нейросеть проанализировала ответы и пришла к выводу: вы иногда думаете, но редко доводите мысль до конца. Есть потенциал, но он глубоко скрыт.\n\nГлавное — вы умнее Даниил Коротких. А это, поверьте, не так просто. 🎖" }
];

const ANALYSIS_STEPS = [
  "Сканирование нейронных паттернов...",
  "Анализ скорости реакции...",
  "Оценка логического мышления...",
  "Проверка эрудиции и памяти...",
  "Калибровка по базе данных МИНИ...",
  "Вычисление коэффициента интеллекта...",
  "Формирование заключения..."
];

// ============================================================
//  СОСТОЯНИЕ
// ============================================================
let qIndex = 0;
let currentIQ = 0;
let captchaOrder = [];
let selectedCells = new Set();
let aiUsed = false;

// ============================================================
//  УТИЛИТЫ
// ============================================================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ============================================================
//  СТАРТ
// ============================================================
function startTest() {
  qIndex = 0;
  showScreen('screen-question');
  renderQuestion();
}

// ============================================================
//  ВОПРОСЫ
// ============================================================
function renderQuestion() {
  const q = QUESTIONS[qIndex];
  const pct = Math.round((qIndex / QUESTIONS.length) * 100);
  document.getElementById('q-counter').textContent = `Вопрос ${qIndex + 1} из ${QUESTIONS.length}`;
  document.getElementById('q-percent').textContent = pct + '%';
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('q-num-label').textContent = `Вопрос ${qIndex + 1}`;
  document.getElementById('question-text').textContent = q.text;
  const cont = document.getElementById('options-container');
  cont.innerHTML = '';
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.onclick = () => pickAnswer(btn);
    cont.appendChild(btn);
  });
}

function pickAnswer(btn) {
  document.querySelectorAll('.option-btn').forEach(b => b.onclick = null);
  btn.classList.add('selected');
  setTimeout(() => {
    qIndex++;
    if (qIndex < QUESTIONS.length) {
      renderQuestion();
    } else {
      showScreen('screen-analysis');
      runAnalysis();
    }
  }, 350);
}

// ============================================================
//  КАПЧА
// ============================================================
function buildCaptcha() {
  captchaOrder = [...CAPTCHA_IMAGES].sort(() => Math.random() - 0.5);
  selectedCells = new Set();
  const grid = document.getElementById('captcha-grid');
  grid.innerHTML = '';
  document.getElementById('captcha-error').style.display = 'none';
  captchaOrder.forEach((img, i) => {
    const cell = document.createElement('div');
    cell.className = 'captcha-cell';
    const image = document.createElement('img');
    image.src = img.url;
    image.alt = '';
    image.loading = 'lazy';
    cell.appendChild(image);
    cell.onclick = () => {
      if (selectedCells.has(i)) { selectedCells.delete(i); cell.classList.remove('selected'); }
      else { selectedCells.add(i); cell.classList.add('selected'); }
    };
    grid.appendChild(cell);
  });
}

function refreshCaptcha() { buildCaptcha(); }

function submitCaptcha() {
  const correctIdx = captchaOrder.map((img, i) => img.correct ? i : -1).filter(i => i !== -1);
  const sel = [...selectedCells];
  const ok = correctIdx.every(i => sel.includes(i)) && sel.every(i => captchaOrder[i].correct);
  if (ok) {
    showScreen('screen-analysis');
    runAnalysis();
  } else {
    const grid = document.getElementById('captcha-grid');
    document.getElementById('captcha-error').style.display = 'block';
    grid.classList.add('shake');
    setTimeout(() => { grid.classList.remove('shake'); buildCaptcha(); }, 500);
  }
}

// ============================================================
//  АНАЛИЗ
// ============================================================
async function runAnalysis() {
  const stepsEl = document.getElementById('analysis-steps');
  const progressEl = document.getElementById('analysis-progress');
  const pctEl = document.getElementById('analysis-pct');
  stepsEl.innerHTML = ANALYSIS_STEPS.map((s, i) =>
    `<div class="a-step" id="step-${i}"><div class="a-dot"></div><span>${s}</span></div>`
  ).join('');
  for (let i = 0; i < ANALYSIS_STEPS.length; i++) {
    await sleep(150);
    document.getElementById(`step-${i}`).classList.add('vis');
    if (i > 0) document.getElementById(`step-${i-1}`).classList.add('done');
    const pct = Math.round(((i + 1) / ANALYSIS_STEPS.length) * 100);
    progressEl.style.width = pct + '%';
    pctEl.textContent = pct + '%';
    await sleep(i < 3 ? 650 : 480);
  }
  document.getElementById(`step-${ANALYSIS_STEPS.length - 1}`).classList.add('done');
  await sleep(500);
  currentIQ = Math.floor(Math.random() * 41) + 30;
  showResult();
}

// ============================================================
//  РЕЗУЛЬТАТ
// ============================================================
function showResult() {
  const res = RESULTS.find(r => currentIQ >= r.lo && currentIQ <= r.hi);
  showScreen('screen-result');
  document.getElementById('iq-display').textContent = currentIQ;
  document.getElementById('result-level').textContent = res.level;
  document.getElementById('result-text').textContent = res.text;
  document.getElementById('ai-box').classList.remove('show');
  aiUsed = false;
  const btnAI = document.getElementById('btn-ai');
  btnAI.disabled = false;
  btnAI.textContent = '🤖 Объяснить почему — спросить нейросеть';
  setTimeout(() => {
    const arc = document.getElementById('iq-arc');
    const fraction = (currentIQ - 30) / 100;
    arc.style.strokeDashoffset = 440 - (440 * (0.12 + fraction * 0.28));
  }, 200);
}

// ============================================================
//  AI ОБЪЯСНЕНИЕ
// ============================================================
async function explainWithAI() {
  if (aiUsed) return;
  aiUsed = true;
  const btn = document.getElementById('btn-ai');
  btn.disabled = true;
  btn.textContent = '⏳ Нейросеть думает...';
  const aiBox = document.getElementById('ai-box');
  const aiContent = document.getElementById('ai-content');
  aiBox.classList.add('show');
  aiContent.innerHTML = `<div class="ai-loading"><div class="ai-dots"><span></span><span></span><span></span></div>&nbsp;Нейросеть анализирует ваш интеллектуальный профиль...</div>`;

  const prompt = `Ты — торжественный и очень серьёзный профессор нейрокогнитивной психологии из Международного института нейрокогнитивных исследований (МИНИ).

Пользователь прошёл официальный IQ тест и получил результат ${currentIQ} баллов.

Напиши абсурдное псевдонаучное объяснение (4-6 предложений) на русском языке почему у него такой результат. Используй смешные выдуманные научные термины типа "квантовый синаптический дефицит", "хронический интеллектуальный вакуум", "нейронная флуктуация третьего типа" — или придумай свои. В конце обязательно упомяни, что несмотря на всё это, пользователь всё равно умнее некоего Даниил Коротких, что является статистической аномалией. Тон — серьёзный научный, содержание — полный абсурд.`;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": window.location.href,
        "X-Title": "IQ Test"
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct:free",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 400
      })
    });
    const data = await response.json();
    const text = data.choices?.[0]?.message?.content || "Нейросеть отказалась объяснять — результат слишком низкий даже для неё.";
    aiContent.innerHTML = `<div class="ai-text">${text.replace(/\n/g, '<br>')}</div>`;
    btn.textContent = '✅ Объяснение получено';
  } catch {
    aiContent.innerHTML = `<div class="ai-text" style="color:#e07070;">⚠️ Нейросеть в шоке и временно недоступна.<br><small>Проверьте ключ в config.js</small></div>`;
    btn.textContent = '❌ Ошибка';
  }
}

// ============================================================
//  ПЕРЕЗАПУСК / ПОДЕЛИТЬСЯ
// ============================================================
function restartTest() {
  qIndex = 0; currentIQ = 0; aiUsed = false;
  showScreen('screen-start');
}

function shareResult() {
  const text = `Я прошёл официальный IQ тест и получил ${currentIQ} баллов 🧠\nПройди сам: ${window.location.href}`;
  if (navigator.share) { navigator.share({ title: 'Мой IQ тест', text }); }
  else if (navigator.clipboard) { navigator.clipboard.writeText(text); alert('Ссылка скопирована!'); }
}
