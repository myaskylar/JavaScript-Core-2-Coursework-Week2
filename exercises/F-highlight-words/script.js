function highlightWords(paragraph, colors) {
  let content = document.getElementById("content");
  let p = document.createElement("p"); //<-- <p></p>
  let select = document.createElement("select"); //<-- <select></select>
  select.className = "colorButton";
  let para = paragraph.split(" "); //<---- make paragraph into one array

  // console.log(colors);
  // console.log(paragraph);
  colors.forEach((color) => {
    //<--- iterate array
    let option = document.createElement("option"); //<--- create ,option> tag for each color
    option.innerText = color; //<-- assign value colors[color]
    select.appendChild(option); //<--- assign <option> tag into <select>
  });

  para.forEach((word) => {
    let span = document.createElement("span"); //<-- create <span> tag for each word
    span.innerText = word + " "; //<-- assign value para[word]
    p.appendChild(span); //<--- assign <span> into <p>
  });
  content.append(select, p);
  content.className = "fontSize"; //<--- add css style (optional)
  let highlightWord = document.querySelectorAll("span"); //<-- get element all <span>
  Array.from(highlightWord).forEach((word) => {
    //<--- change node list to array
    word.addEventListener("click", () => {
      // for each word <span> selected add style attribute and set it to background color according to value of <select>
      // if <span style:backgroundColor = any color form selected value>; remove attribute style
      if (select.value === "none" && word.style.backgroundColor === "yellow") {
        word.removeAttribute("style");
      } else if (
        select.value === "none" &&
        word.style.backgroundColor === "green"
      ) {
        word.removeAttribute("style");
      } else if (
        select.value === "none" &&
        word.style.backgroundColor === "blue"
      ) {
        word.removeAttribute("style");
      } else {
        word.style.backgroundColor = `${select.value}`;
      }
    });
  });
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colous = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colous);
