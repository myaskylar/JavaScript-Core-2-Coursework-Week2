function shoppingList(arrayOfShoppingList) {
  const content = document.querySelector("#content"); //<------- target the div element to assign ul
  const createUl = document.createElement("ul"); //<----------- create <ul></ul>
  arrayOfShoppingList.forEach((product) => {
    const createList = document.createElement("li"); //<---------- create list
    createList.innerText = product;
    createUl.appendChild(createList); //<------------ child element in ul
  });

  content.append(createUl);
  content.className = "textAlign"; //<---- add css style (optional)
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
