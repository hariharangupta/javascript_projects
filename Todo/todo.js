const inputEle = document.getElementById("input-box");
const listContainer = document.querySelector(".list-container");

const add = () => {
  if (inputEle.value === "") {
    alert("Please Enter Some Text");
  } else {
    const li = document.createElement("li");
    li.innerHTML = inputEle.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "❌";
    li.appendChild(span);
  }
  inputEle.value = "";
  addData();
};

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      addData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      addData();
    }
  },
  false
);

const addData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};

const showData = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};

showData();
