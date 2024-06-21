let currentNumber = "";
let previousNumber = "";
let operator = "";

function appendNumber(number) {
  currentNumber += number;
  document.getElementById("display").value = currentNumber;
}

function selectOperator(op) {
  previousNumber = currentNumber;
  currentNumber = "";
  operator = op;
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  document.getElementById("display").value = "";
}

function showFunnyImage() {
  const funnyImageContainer = document.getElementById("funny-image-container");
  funnyImageContainer.innerHTML = ""; // Clear previous image

  // Generate a random number between 1 and 5
  const randomNumber = Math.floor(Math.random() * 5) + 1;

  // Create an image element and set its src attribute to the corresponding image URL
  const imageElement = document.createElement("img");
  imageElement.src = `image.png`;
  imageElement.alt = "Funny Image";
  imageElement.width = 300;
  imageElement.height = 300;

  // Append the image element to the container
  funnyImageContainer.appendChild(imageElement);
}
