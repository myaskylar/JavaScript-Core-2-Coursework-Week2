function todoList(toDos) {
  let content = document.querySelector("#content"); //<---------target content
  let ul = document.createElement("ul"); //<------create <ul></ul>

  toDos.forEach((list) => {
    //<-----------iterate array
    let li = document.createElement("li"); //<----- create <li> tag for each element
    li.innerText = list.todo;
    li.addEventListener("click", () => {
      //<----- if click each <li>
      if (li.style.textDecoration === "line-through") {
        //<----- if <li style="text-decoration: line-through;">
        li.removeAttribute("style"); //<----- remove style attribute
      } else {
        li.style.textDecoration = "line-through"; //<----- if <li></li> add style attribute
      }
    });
    ul.appendChild(li); //<--- <ul><li></li></ul> assign <li> inside <ul>
  });

  content.append(ul);
  content.className = "textAlign"; //<---- add css style (optional)
}

const toDos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(toDos);
