let stockNumber = [];
let stockDisplay = [];

const showNumber = (number) => {
  stockNumber.push(number);
  if (number != "+") {
    stockDisplay.push(number);
    let result = (document.getElementById("result").innerHTML =
      stockDisplay.join(""));
  }

  console.log(stockNumber);
  console.log(stockDisplay);
};

//remise à O
const removeStock = () => {
  stockNumber = [];
  eraseDisplay();
};

//Enlève l'affichage du cadran
const eraseDisplay = () => {
  let erase = (document.getElementById("result").innerHTML = "");
  stockDisplay = [];
};
