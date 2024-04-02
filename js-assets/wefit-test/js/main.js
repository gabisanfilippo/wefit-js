function createListItem(className, textContent) {
  const listItem = document.createElement("li");
  listItem.className = className;
  listItem.textContent = textContent;
  return listItem;
}

// Menu
const buttonsBox = document.querySelector(".btn-group-vertical");
buttonsBox.classList.remove("btn-group-vertical");

// Header
const headerBox = document.querySelector(".jumbotron");
headerBox.classList.add("bg-secondary", "text-right", "text-white");

const buttonHeaderBox = document.querySelector(".jumbotron a");
buttonHeaderBox.classList.add("btn-success");

// Cards
const allCards = document.querySelectorAll(".col-lg-3");
const orderedCards = [
  allCards[3].cloneNode(true),
  allCards[0].cloneNode(true),
  allCards[2].cloneNode(true),
  allCards[1].cloneNode(true),
];

const buttonSecondCard = orderedCards[1].querySelector(".btn-primary");
buttonSecondCard.classList.add("btn-success");

orderedCards.forEach((card, index) => {
  allCards[index].replaceWith(card);
});

// List
const ulList = document.querySelector(".list-group");

const fourthItem = createListItem("list-group-item", "Quarto item");
const fifthItem = createListItem("list-group-item", "Quinto item");

ulList.appendChild(fourthItem);
ulList.appendChild(fifthItem);

const listItems = document.querySelectorAll(".list-group-item");

listItems.forEach((item) => {
  item.classList.remove("active");
});
listItems[3].classList.add("active");
