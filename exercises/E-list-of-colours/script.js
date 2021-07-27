function listOfColours(colors) {
  const content = document.querySelector("#content"); //<--- target #content to assign all element
  const select = document.createElement("select"); //<-- create <select> tag
  select.className = "fontSize"; //<--- add css style (optional)
  const p = document.createElement("p"); //<-- create <p> tag

  colors.forEach((color) => {
    //<---- iterate array
    const option = document.createElement("option"); //<--- create <option> tag for each color
    option.innerText = color; //<--- value colors[color]
    select.appendChild(option); //<--- assign <option> tag inside <select> tag
  });

  content.append(select, p); // tag <p> leave empty,for later add value by event listener accordingly.
  // add event listener when value has chosen form <select> ; tag <p> output message "you have selected: chosen value"
  // and change the <p> color according to chosen value
  document.querySelector("select").addEventListener("change", function () {
    //console.log("You selected: ", this.value);
     p.innerText = `You have selected: ${this.value}`;
     p.style.color = this.value;
  });
  content.className = "textAlign"; //<---- add css style (optional)
}

const colors = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colors);
