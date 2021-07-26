function shoppingList(arrayOfShoppingList) {
  let content = document.querySelector("#content"); //<------- target the div element to assign ul
  let createUl = document.createElement("ul"); //<----------- create <ul></ul>
  arrayOfShoppingList.forEach((product) => {
    let createList = document.createElement("li"); //<---------- create list
    createList.innerText = product;
    createUl.appendChild(createList); //<------------ child element in ul
  });

  content.append(createUl);
  content.className = "textAlign"; //<---- add css style (optional)
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
