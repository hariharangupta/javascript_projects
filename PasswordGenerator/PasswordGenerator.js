const passwordBox = document.getElementById("password");
const copyIcon = document.getElementById("copyIcon");

const length = "10";

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%^&*()[]{}/<>-+=!~_";

const createPassword = () => {
  let password = "";

  password +=
    password + upperCase[Math.floor(Math.random() * upperCase.length - 1)];
  password =
    password + lowerCase[Math.floor(Math.random() * lowerCase.length - 1)];
  password = password + symbols[Math.floor(Math.random() * symbols.length - 1)];
  password = password + numbers[Math.floor(Math.random() * numbers.length - 1)];
  const allCharts = upperCase + lowerCase + numbers + symbols;

  while (length > password.length) {
    password =
      password + allCharts[Math.floor(Math.random() * allCharts.length - 1)];
  }

  passwordBox.value = password;
};

copyIcon.addEventListener("click", () => {
  if (passwordBox.value.length === 0) {
    copyIcon.disabled = true;
  }
  passwordBox.select();
  document.execCommand("copy");
});
