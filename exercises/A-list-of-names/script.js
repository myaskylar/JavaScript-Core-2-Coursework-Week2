function listOfNames(arrayOfPeople) {
  const content = document.querySelector("#content"); //<----- place to insert h1 h2

  arrayOfPeople.forEach((person) => {
    const createH1 = document.createElement("h1");
    const createH2 = document.createElement("h2");
    createH1.innerText = person.name;
    createH2.innerText = person.job;
    content.append(createH1, createH2);
  });
  content.className = "textAlign"; //<----- add css style (optional)
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
