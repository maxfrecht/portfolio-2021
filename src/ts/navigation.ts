import { popUps } from "./const/pop-ups";

//* Sections Elements

const sectionHomeElement: HTMLElement = document.querySelector("main .home")!;
const sectionWhoElement: HTMLElement = document.querySelector("main .who")!;
const sectionReaElement: HTMLElement =
  document.querySelector("main .realisation")!;
const contactDivElement: HTMLDivElement = document.querySelector(".contact")!;
const progressDivElements = document.querySelectorAll(
  ".skill-progress .skill-progress__in-progress, .skill-progress-futur .skill-progress__next"
);
const progressPElements: NodeListOf<HTMLParagraphElement> =
  document.querySelectorAll(".skill-progress div p");

export function navTo(
  linkElement: HTMLElement | ChildNode,
  valueRotate: number = 0,
  valueXHome: number | string = 0,
  valueXWho: number | string = "100vw",
  valueXRea: number | string = 0,
  hash: string = "home"
) {
  linkElement.addEventListener("click", (e) => {
    e.preventDefault();
    location.hash = hash;
    sectionHomeElement.style.transform = `rotateY(${valueRotate}deg) translateX(${valueXHome}) scale(${
      valueRotate === 0 ? 1 : 0
    })`;
    sectionWhoElement.style.transform = `rotateY(${
      valueRotate + 90
    }deg) translateX(${valueXWho}) scale(${valueRotate + 90 === 0 ? 1 : 0})`;
    sectionReaElement.style.transform = `rotateY(${
      valueRotate + 180
    }deg) translateX(${valueXRea}) scale(${valueRotate + 180 === 0 ? 1 : 0})`;
    sectionHomeElement.style.opacity = `${valueRotate === 0 ? 1 : 0}`;
    sectionWhoElement.style.opacity = `${valueRotate + 90 === 0 ? 1 : 0}`;
    sectionReaElement.style.opacity = `${valueRotate + 180 === 0 ? 1 : 0}`;
  });
}

export function directNav(
  valueRotate: number,
  valueXHome: number | string,
  valueXWho: number | string,
  valueXRea: number | string
): void {
  sectionHomeElement.style.transform = `rotateY(${valueRotate}deg) translateX(${valueXHome}) scale(${
    valueRotate === 0 ? 1 : 0
  })`;
  sectionWhoElement.style.transform = `rotateY(${
    valueRotate + 90
  }deg) translateX(${valueXWho}) scale(${valueRotate + 90 === 0 ? 1 : 0})`;
  sectionReaElement.style.transform = `rotateY(${
    valueRotate + 180
  }deg) translateX(${valueXRea}) scale(${valueRotate + 180 === 0 ? 1 : 0})`;
  sectionHomeElement.style.opacity = `${valueRotate === 0 ? 1 : 0}`;
  sectionWhoElement.style.opacity = `${valueRotate + 90 === 0 ? 1 : 0}`;
  sectionReaElement.style.opacity = `${valueRotate + 180 === 0 ? 1 : 0}`;
}

/**
 * @param link : HTMLElement
 * Set listener on click to the contact link to toggle the contact menu to open or close state
 * Also set listener on the close button of the contact menu to close it
 */
export function showContact(link: HTMLElement | ChildNode) {
  let closeButtonElement = contactDivElement.querySelector("button")!;

  link.addEventListener("click", (e) => {
    e.preventDefault();

    if (
      contactDivElement.style.transform === "translate(100%, -50%)" ||
      !contactDivElement.style.transform
    ) {
      contactDivElement.style.transform = "translate(0,-50%)";
      popUps.contact = true;
      // window.addEventListener("click", () => {
      //   if (popUps.contact) {
      //     contactDivElement.addEventListener("click", (e) => {
      //       e.stopPropagation();
      //     });
      //     contactDivElement.style.transform = "translate(100%, -50%)";
      //     popUps.contact = false;
      //     // listItems.style.maxHeight = "0px";
      //     // buttonBurger.innerHTML = "menu";
      //     // popUps.menu = false;
      //   }
      // });
    } else {
      contactDivElement.style.transform = "translate(100%, -50%)";
      popUps.contact = false;
    }
  });

  closeButtonElement.addEventListener("click", () => {
    contactDivElement.style.transform = "translate(100%, -50%)";
    popUps.contact = true;
  });
}

export function addListenersOnLearningDiv() {
  progressDivElements.forEach((divElement) => {
    let pElement = divElement.querySelector("p")!;
    pElement.style.maxHeight = "";
    divElement.addEventListener("click", () => {
      progressPElements.forEach((p) => {
        p.style.maxHeight = "";
        p.parentElement!.classList.remove("show");
      });
      if (!pElement!.parentElement!.classList.contains("show")) {
        pElement.style.maxHeight = pElement.scrollHeight + "px";
        pElement!.parentElement!.classList.add("show");
      } else {
        pElement.style.maxHeight = "";
        pElement!.parentElement!.classList.remove("show");
      }
    });
  });
}

export function closeContactOnCLickOutside() {
  let buttonBurger = document.querySelector(".burger")!;
  let listItems: HTMLUListElement = document.querySelector("nav ul")!;

  window.addEventListener("click", () => {
    // if (popUps.menu) {
    // }
    // if (popUps.contact) {
    //   contactDivElement.addEventListener("click", (e) => {
    //     e.stopPropagation();
    //   });
    //   contactDivElement.style.transform = "translate(100%, -50%)";
    //   popUps.contact = false;
    //   // listItems.style.maxHeight = "0px";
    //   // buttonBurger.innerHTML = "menu";
    //   // popUps.menu = false;
    // }
  });
}
