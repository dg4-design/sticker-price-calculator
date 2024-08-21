function calculate() {
  const numStickers = parseInt(document.getElementById("numStickers").value);

  let setsOfFour = Math.floor(numStickers / 4);
  let remainder = numStickers % 4;

  let totalPrice = setsOfFour * 400 + remainder * 200;

  document.getElementById("remainder").textContent = remainder;
  document.getElementById("singlePrice").textContent = `¥${remainder * 200}`;

  document.getElementById("setsOfFour").textContent = setsOfFour;
  document.getElementById("setsPrice").textContent = `¥${setsOfFour * 400}`;

  document.getElementById("totalPrice").textContent = `¥${totalPrice}`;

  let suggestionStr = "";
  if (remainder === 2) {
    suggestionStr += `同じ ¥${totalPrice}で2枚追加購入できます。`;
  } else if (remainder === 3) {
    suggestionStr += `¥${totalPrice - 200}で1枚追加購入できます。`;
  }

  document.getElementById("suggestion").textContent = suggestionStr;

  return false;
}
