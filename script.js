const listNumbers = document.getElementById("listNum");
const resetBtn = document.getElementById("resetBtn");
const showBtn = document.getElementById("showBtn");
const li = document.createElement("li");

const resetNum = () => {
  li.innerHTML = ``;
};

const randomNumbers = () => {
  const numbers = [];
  for (let i = 0; i < 5; i++) {
    const randomNum = Math.floor(Math.random() * 50) + 1;
    if (numbers.includes(randomNum)) {
      i--;
    } else {
      numbers.push(randomNum);
    }
  }
  for (let n = 0; n < 2; n++) {
    const starNum = Math.floor(Math.random() * 12) + 1;
    if (numbers.includes(starNum)) {
      n--;
    } else {
      numbers.push(starNum);
    }
  }
  li.innerHTML = ``;
  for (let i = 0; i < numbers.length; i++) {
    li.innerHTML += `
        <div id="numbers">${numbers[i]}</div>
        `;
  }
};
listNumbers.appendChild(li);

showBtn.addEventListener("click", randomNumbers);
resetBtn.addEventListener("click", resetNum);
