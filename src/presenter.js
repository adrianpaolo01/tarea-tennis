import sumar from "./sumador";
import Tennis from "./tennis";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");
const score = document.querySelector("#tennis-score");
const playerOneButton = document.querySelector("#jugador1-button");
const playerTwoButton = document.querySelector("#jugador2-button");
const resetButton = document.querySelector("#reiniciar-button");
const tennis = new Tennis();

const updateScore = () => {
  score.textContent = tennis.obtenerScore();
};

playerOneButton.addEventListener("click", () => {
  tennis.jugador1Anota();
  updateScore();
});

playerTwoButton.addEventListener("click", () => {
  tennis.jugador2Anota();
  updateScore();
});

resetButton.addEventListener("click", () => {
  tennis.puntosJ1 = 0;
  tennis.puntosJ2 = 0;
  updateScore();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.textContent = sumar(firstNumber, secondNumber);
});
