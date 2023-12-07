const data = [
  {
    city: "hyderabad",
    temp: 20,
    wind: "22.66",
    humidity: "30",
  },
  {
    city: "warangal",
    temp: 25,
    wind: "35.66",
    humidity: "32",
  },
  {
    city: "hanamkonda",
    temp: 22,
    wind: "45.66",
    humidity: "29",
  },
  {
    city: "karimnagar",
    temp: 27,
    wind: "35.66",
    humidity: "34",
  },
];

const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const error = document.querySelector(".error");

const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

const weather = document.querySelector(".weather");
const image = document.querySelector(".weather  img");

searchButton.addEventListener("click", () => {
  let value = data.filter(
    (item) =>
      String(item.city).toLowerCase() ===
      String(searchInput.value).toLowerCase()
  );

  checkweather(value);
});

const checkweather = (value) => {
  if (value.length === 0) {
    error.style.display = "block";
    weather.style.display = "none";
  } else if (value.length > 0) {
    weather.style.display = "block";
    error.style.display = "none";

    const output = value.map((item) => {
      temp.innerHTML = `${item.temp}☁c`;
      wind.innerHTML = Math.floor(item.wind);
      humidity.innerHTML = item.humidity;
      city.innerHTML = String(item.city).toUpperCase();
      if (Math.floor(Number(item.wind)) > 30) {
        console.log(Math.floor(Number(item.wind)));
        image.src = "images/drizzle.png";
        console.log("else1");
      } else if (Math.floor(Number(item.wind)) > 35) {
        console.log("else2");
        image.src = "images/clouds.png";
      } else if (Math.floor(Number(item.wind)) > 45) {
        console.log("else3");

        image.src = "images/humidity.png";
      }
      if (Math.floor(Number(item.wind)) < 25) {
        image.src = "images/mist.png";
        console.log("else4");
      }
    });
  }
};
