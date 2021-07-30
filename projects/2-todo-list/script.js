//exercise one 

// function populateTodoList(todos) {
//   const list = document.getElementById("todo-list");

//   todos.forEach((lists) => {
//     const createLi = document.createElement("li");

//     createLi.setAttribute(
//       "class",
//       "list-group-item d-flex justify-content-between align-items-center"
//     );
//     createLi.innerText = lists.task;

//     const createSpan = document.createElement("span");
//     createSpan.setAttribute("class", "badge bg-primary rounded-pill");

//     const createI1 = document.createElement("i");
//     createI1.setAttribute("class", "fa fa-check");
//     createI1.setAttribute("aria-hidden", "true");
//     createI1.addEventListener("click", () => {
//       if (createLi.style.textDecoration === "line-through") {
//         createLi.removeAttribute("style");
//       } else {
//         createLi.style.textDecoration = "line-through";
//       }
//     });

//     const createI2 = document.createElement("i");
//     createI2.setAttribute("class", "fa fa-trash");
//     createI2.setAttribute("aria-hidden", "true");
//     createI2.addEventListener("click",()=>{
//       createLi.remove();
//     })

//     createSpan.append(createI1, createI2);
//     createLi.appendChild(createSpan);
//     list.appendChild(createLi);
//   });
// }

// // These are the same todos that currently display in the HTML
// // You will want to remove the ones in the current HTML after you have created them using JavaScript
// let todos = [
//   { task: "Wash the dishes", completed: false },
//   { task: "Do the shopping", completed: false },
// ];

// populateTodoList(todos);

//<---------------------------------------------------------------------------->

//Advance challenge

function addNewTodo(event) {
  event.preventDefault();
  const list = document.getElementById("todo-list");
  const addValue = document.getElementById("todoInput");

  const createLi = document.createElement("li");
  createLi.setAttribute(
    "class",
    "list-group-item d-flex justify-content-between align-items-center"
  );
  createLi.innerText = addValue.value;

  const createSpan = document.createElement("span");
  createSpan.setAttribute("class", "badge bg-primary rounded-pill");

  const createI1 = document.createElement("i");
  createI1.setAttribute("class", "fa fa-check");
  createI1.setAttribute("aria-hidden", "true");
  createI1.addEventListener("click", () => {
    if (createLi.style.textDecoration === "line-through") {
      createLi.removeAttribute("style");
    } else {
      createLi.style.textDecoration = "line-through";
    }
  });

  const createI2 = document.createElement("i");
  createI2.setAttribute("class", "fa fa-trash");
  createI2.setAttribute("aria-hidden", "true");
  createI2.addEventListener("click", () => {
    createLi.remove();
  });

  createSpan.append(createI1, createI2);
  createLi.appendChild(createSpan);
  list.appendChild(createLi);

  addValue.value = "";
}











// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
