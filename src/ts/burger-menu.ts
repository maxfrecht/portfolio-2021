import { popUps } from "./const/pop-ups";
let buttonBurger = document.querySelector(".burger")!;
let listItems: HTMLUListElement = document.querySelector("nav ul")!;
export function toggleMenu(): void {
  buttonBurger?.addEventListener("click", () => {
    if (!listItems.style.maxHeight || listItems.style.maxHeight === "0px") {
      listItems.style.maxHeight = listItems.scrollHeight + 170 + "px";
      buttonBurger.innerHTML = "close";
      popUps.menu = true;
      let listItemsLi = listItems.querySelectorAll("li")!;
      listItemsLi.forEach((liElement) => {
        liElement.addEventListener("click", () => {
          listItems.style.maxHeight = "0px";
          buttonBurger.innerHTML = "menu";
          popUps.menu = false;
        });
      });
    } else {
      listItems.style.maxHeight = "0px";
      buttonBurger.innerHTML = "menu";
      popUps.menu = false;
    }
  });
}
