import { makeExcuse } from "./excuses.js";

let served = 0;

document.getElementById("go").addEventListener("click", () => {
  served += 1;
  document.getElementById("excuse").textContent = makeExcuse();
  document.getElementById("count").textContent = `${served} excuses served this visit`;
});
