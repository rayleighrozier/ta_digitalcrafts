// grab everything
const deal = document.querySelector(".deal");
const hit = document.querySelector(".hit");
const stand = document.querySelector(".stand");
const dealer = document.querySelector(".dealer");
const player = document.querySelector(".player");
const dealerScoreboard = document.querySelector(".dealer-score");
const playerScoreboard = document.querySelector(".player-score");
const banner = document.querySelector(".banner");

const resetAll = () => {
  dealer.innerHTML = "";
  player.innerHTML = "";
  banner.innerHTML = "";
  dealerScoreboard.innerHTML = "?";
  playerScoreboard.innerHTML = "0";
  return [
    {
      spades: [
        "Ace",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "Jack",
        "Queen",
        "King",
      ],
      diamonds: [
        "Ace",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "Jack",
        "Queen",
        "King",
      ],
      clubs: [
        "Ace",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "Jack",
        "Queen",
        "King",
      ],
      hearts: [
        "Ace",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "Jack",
        "Queen",
        "King",
      ],
    },
    0,
    0,
    false,
    false,
    false,
  ];
};
const dealCard = () => {
  let suits = Object.keys(deck);
  let suit = suits[Math.floor(Math.random() * suits.length)];
  let value = deck[suit][Math.floor(Math.random() * deck[suit].length)];
  deck[suit] = deck[suit].filter((i) => i != value);
  return { value: value, suit: suit };
};
const updateScore = (score, card, hasAce, scoreboard, hidden = false) => {
  if (Number.isInteger(+card.value)) {
    if (score + card.value <= 21) {
      score += +card.value;
    } else if (score + +card.value > 21 && hasAce) {
      score += +card.value - 10;
      hasAce = false;
    } else {
      score += +card.value;
    }
  }
  if (card.value == "Jack" || card.value == "Queen" || card.value == "King") {
    if (score + 10 <= 21) {
      score += 10;
    } else if (score + 10 > 21 && hasAce) {
      hasAce = false;
    } else {
      score += 10;
    }
  }
  if (card.value == "Ace") {
    if (score + 11 <= 21) {
      score += 11;
      hasAce = true;
    } else {
      score += 1;
    }
  }
  if (!hidden) {
    scoreboard.innerText = `${score}`;
  }
  return [score, hasAce];
};
const checkForWinner = () => {
  if (playerScore == 21) {
    banner.innerHTML = "player wins with 21!";
    gameOver = true;
  }
  if (playerScore > 21) {
    banner.innerHTML = "Bust! Dealer wins.";
    gameOver = true;
  }
};
const finalCheckForWinner = () => {
  if (playerScore == dealerScore) {
    banner.innerHTML = "It's a tie.";
  }
  if (playerScore <= 21 && dealerScore > 21) {
    banner.innerHTML = "Dealer busts! Player wins.";
  } else if (playerScore == 21 && dealerScore != 21) {
    banner.innerHTML = "Player wins with 21!";
  } else if (playerScore !== 21 && dealerScore == 21) {
    banner.innerHTML = "Dealer wins with 21!";
  } else if (playerScore < 21 && playerScore > dealerScore) {
    banner.innerHTML = `Player wins with ${playerScore}`;
  } else if (dealerScore < 21 && dealerScore > playerScore) {
    banner.innerHTML = `Dealer wins with ${dealerScore}`;
  } else {
  }
  gameOver = true;
};
const appendCard = (hand, card, hidden = false) => {
  let cardImage = document.createElement("img");
  if (hidden) {
    cardImage.src = `./images/hidden.png`;
    cardImage.className = "hidden";
  } else {
    cardImage.src = `./images/${card.value}_of_${card.suit.toLowerCase()}.png`;
  }
  hand.append(cardImage);
};

let [deck, playerScore, dealerScore, playerHasAce, dealerHasAce, gameOver] =
  resetAll();
let hiddenCard = {};

deal.onclick = () => {
  [deck, playerScore, dealerScore, playerHasAce, dealerHasAce, gameOver] =
    resetAll();
  hiddenCard = dealCard();
  appendCard(dealer, hiddenCard, true);
  [dealerScore, dealerHasAce] = updateScore(
    dealerScore,
    hiddenCard,
    dealerHasAce,
    dealerScoreboard,
    true
  );
  let card2 = dealCard();
  appendCard(dealer, card2);
  [dealerScore, dealerHasAce] = updateScore(
    dealerScore,
    card2,
    dealerHasAce,
    dealerScoreboard,
    true
  );
  let card3 = dealCard();
  appendCard(player, card3);
  [playerScore, playerHasAce] = updateScore(
    playerScore,
    card3,
    playerHasAce,
    playerScoreboard
  );
  let card4 = dealCard();
  appendCard(player, card4);
  [playerScore, playerHasAce] = updateScore(
    playerScore,
    card4,
    playerHasAce,
    playerScoreboard
  );
  checkForWinner();
};

hit.onclick = () => {
  if (!gameOver) {
    let card = dealCard();
    appendCard(player, card);
    [playerScore, playerHasAce] = updateScore(
      playerScore,
      card,
      playerHasAce,
      playerScoreboard
    );
    checkForWinner();
  }
};

stand.onclick = () => {
  if (!gameOver) {
    const hiddenCardImage = document.querySelector(".hidden");
    hiddenCardImage.src = `./images/${hiddenCard.value}_of_${hiddenCard.suit}.png`;
    dealerScoreboard.innerText = `${dealerScore}`;
    while (dealerScore < 17) {
      let card = dealCard();
      [dealerScore, dealerHasAce] = updateScore(
        dealerScore,
        card,
        dealerHasAce,
        dealerScoreboard
      );
      appendCard(dealer, card);
    }
    finalCheckForWinner();
  }
};
