let blueButton = document.getElementById("blueBtn");

blueButton.addEventListener("click", () => {
  let jumbo = document.querySelector(".jumbotron");
  jumbo.style.backgroundColor = "#588fbd";
  let donate = document.querySelector(".buttons");
  donate.firstElementChild.style.backgroundColor = "#ffa500";
  donate.lastElementChild.style.backgroundColor = "black";
  donate.lastElementChild.style.color = "white";
});

let orangeButton = document.getElementById("orangeBtn");

orangeButton.addEventListener("click", () => {
  let jumbo = document.querySelector(".jumbotron");
  jumbo.style.backgroundColor = "#f0ad4e";
  let donate = document.querySelector(".buttons");
  donate.firstElementChild.style.backgroundColor = "#5751fd";
  donate.lastElementChild.style.backgroundColor = "#31b0d5";
  donate.lastElementChild.style.color = "white";
});

let blackButton = document.getElementById("greenBtn");

blackButton.addEventListener("click", () => {
  let jumbo = document.querySelector(".jumbotron");
  jumbo.style.backgroundColor = "#87ca8a";
  let donate = document.querySelector(".buttons");
  donate.firstElementChild.style.backgroundColor = "black";
  donate.lastElementChild.style.backgroundColor = "#8c9c08";
});

let submitButton = document.querySelector("form");
submitButton.lastElementChild.addEventListener(
  "click",
  (e) => {
    let emailAdd = document.getElementById("exampleInputEmail1");
    let yourName = document.getElementById("example-text-input");
    let describe = document.getElementById("exampleTextarea");

    if (emailAdd.value.length > 0 && emailAdd.value.includes("@")) {
      emailAdd.style.backgroundColor = "white";
    } else {
      emailAdd.style.backgroundColor = "red";
    }

    if (yourName.value.length > 0) {
      yourName.style.backgroundColor = "white";
    } else {
      yourName.style.backgroundColor = "red";
    }

    if (describe.value.length > 0) {
      describe.style.backgroundColor = "white";
    } else {
      describe.style.backgroundColor = "red";
    }

    if (
      emailAdd.value.length > 0 &&
      yourName.value.length > 0 &&
      describe.value.length > 0 &&
      emailAdd.value.includes("@")
    ) {
      alert("thank you for filling out the form");
    }

    e.preventDefault();
  },
  false
);
