const notesContainer = document.querySelector(".notes-container");
const btn = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box");
const getData = () => {
  notesContainer.innerHTML = localStorage.getItem("notes");
};

getData();

const storeData = () => {
  localStorage.setItem("notes", notesContainer.innerHTML);
};

btn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  img.src = "delete.png";
  img.classList.add("delete-icon");
  inputBox.classList.add("input-box");
  inputBox.setAttribute("contenteditable", "true");
  notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    storeData();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        storeData();
      };
    });
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
