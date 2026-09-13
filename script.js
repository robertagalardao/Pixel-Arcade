// Transições do AFD modelado no JFLAP.
const transitions = {
  0:  { 5: 5,  10: 10, 25: 25 },
  5:  { 5: 10, 10: 15, 25: 30 },
  10: { 5: 15, 10: 20, 25: 30 },
  15: { 5: 20, 10: 25, 25: 30 },
  20: { 5: 25, 10: 30, 25: 30 },
  25: { 5: 30, 10: 30, 25: 30 }
};

const PRICE = 30;

let credit = 0;
let tokens = 0;
let currentState = 0;
let lastInput = null;
let lastTransition = '—';
let sequence = [];

const creditEl = document.getElementById('credit-value');
const tokensEl = document.getElementById('tokens-value');
const balanceEl = document.getElementById('balance-value');
const messageEl = document.getElementById('status-message');
const releasedEl = document.getElementById('token-released');
const finishBtn = document.getElementById('finish-btn');
const afdToggle = document.getElementById('afd-toggle');
const afdPanel = document.getElementById('afd-panel');
const stateEl = document.getElementById('state-value');
const inputEl = document.getElementById('input-value');
const transitionEl = document.getElementById('transition-value');
const sequenceEl = document.getElementById('sequence-value');

function insertCoin(value) {
  const previousState = currentState;
  const nextState = transitions[currentState][value];

  credit += value;
  currentState = nextState;
  lastInput = value;
  lastTransition = `${previousState} ── ${value}¢ ──→ ${nextState}`;
  sequence.push(`${value}¢`);

  const newTokens = Math.floor(credit / PRICE);
  const tokenWasReleased = newTokens > tokens;
  tokens = newTokens;

  // O AFD chega ao estado final ao completar 30¢.
  // O saldo restante inicia o próximo ciclo da máquina.
  if (currentState === 30) {
    currentState = credit % PRICE;
  }

  updateScreen(tokenWasReleased);
  updateAfdPanel();
}

function updateScreen(tokenWasReleased) {
  const balance = credit % PRICE;

  creditEl.textContent = `${credit}¢`;
  tokensEl.textContent = tokens;
  balanceEl.textContent = `${balance}¢`;

  if (tokenWasReleased) {
    messageEl.textContent = '✓ FICHA LIBERADA!';
    releasedEl.hidden = false;
  } else {
    messageEl.textContent = credit === 0 ? 'INSIRA UMA MOEDA' : 'CONTINUE INSERINDO MOEDAS';
    releasedEl.hidden = true;
  }
}

function updateAfdPanel() {
  stateEl.textContent = currentState;
  inputEl.textContent = lastInput === null ? '—' : `${lastInput}¢`;
  transitionEl.textContent = lastTransition;
  sequenceEl.textContent = sequence.length ? sequence.join(' → ') : '—';
}

document.querySelectorAll('.coin-btn').forEach(button => {
  button.addEventListener('click', () => {
    insertCoin(Number(button.dataset.value));
  });
});

finishBtn.addEventListener('click', () => {
  if (credit === 0) return;

  // As fichas são coletadas, mas o saldo permanece na máquina.
  credit = credit % PRICE;
  tokens = 0;
  currentState = credit;
  lastInput = null;
  lastTransition = '—';
  sequence = [];
  releasedEl.hidden = true;
  updateScreen(false);
  updateAfdPanel();
  messageEl.textContent = 'COMPRA FINALIZADA! SALDO MANTIDO.';
});

afdToggle.addEventListener('click', () => {
  const isHidden = afdPanel.hidden;
  afdPanel.hidden = !isHidden;
  afdToggle.textContent = isHidden ? '⚙ OCULTAR FUNCIONAMENTO DO AFD' : '⚙ VER FUNCIONAMENTO DO AFD';
});

updateScreen(false);
updateAfdPanel();
