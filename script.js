const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber == 0) {
    outputBox.innerText = "Your Birthday Is Lucky";
  } else {
    outputBox.innerText = "Your Birthday Is Not Lucky";
  }
}

function checkBirthdayDateIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  //   console.log(sum);
  if (sum && dob) {
    compareValues(sum, luckyNumber.value);
  } else {
    outputBox.innerText = "Please enter both fields";
  }
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

checkNumberButton.addEventListener("click", checkBirthdayDateIsLucky);
