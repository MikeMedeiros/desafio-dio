const cards = document.querySelectorAll('.card');
let hasFlipCard = false;
let firstCard, secondCard;
let lockBoard = false;

//função para virar carta
function flipcard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip')
    if (!hasFlipCard) {
        hasFlipCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    hasFlipCard = false;
    checkForMath();
}

//função que checa se as cartas são iguais
function checkForMath() {
    if (firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        return;
    }
    unflipCards();
}

//função que desabilita as cartas
function disableCards() {
    firstCard.removeEventListener('click', flipcard);
    secondCard.removeEventListener('click', flipcard);
    resetBoard();
}

//funcão que desvira as cartas
function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');


        resetBoard();
    }, 1500)
}

//função que reseta o tabuleiro
function resetBoard() {
    [hasFlipCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

//função que embaralha as cartas
(function suffle() {
    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    })
})();

//adiciona evento de clique na carta
cards.forEach((card) => {
    card.addEventListener('click', flipcard);
})