import { directNav } from "./navigation";

/**
 * Set listeners on window on the load event and play animation once if the user is loading the homepage
 * Also look for a hash in the location object and apply the right state of the application to show the desired view
 */
export function loadingAnimation() {
  window.onload = () => {
    if (location.hash === "#home") {
      directNav(0, 0, "100vw", 0);
    } else if (location.hash === "#who") {
      directNav(-90, "-100vw", 0, "100vw");
    } else if (location.hash === "#realisation") {
      directNav(-180, 0, "-100vw", 0);
    }
  };
  if (
    (window.location.pathname === "/index.html" ||
      window.location.pathname === "/") &&
    !window.location.hash
  ) {
    window.addEventListener(
      "load",
      () => {
        const contact: HTMLDivElement = document.querySelector(".contact")!;
        const body = document.querySelector("body");
        const main = document.querySelector("main");
        const nav = document.querySelector("nav");
        contact.style.display = "none";
        main!.style.display = "none";
        nav!.style.display = "none";
        body!.style.maxHeight = "100vh";
        body!.style.overflowY = "hidden";
        const introBox = document.createElement("div");
        const introTitle = document.createElement("h2");
        const introTitleSpan1 = document.createElement("span");
        const introTitleSpan2 = document.createElement("span");
        const introTitleSpan3 = document.createElement("span");
        const introTitleSpan4 = document.createElement("span");

        introTitleSpan1.textContent = "Bienvenue";
        introTitleSpan2.textContent = "sur";
        introTitleSpan3.textContent = "mon";
        introTitleSpan4.textContent = "Portfolio";
        introTitle.appendChild(introTitleSpan1);
        introTitle.appendChild(introTitleSpan2);
        introTitle.appendChild(introTitleSpan3);
        introTitle.appendChild(introTitleSpan4);
        introBox.appendChild(introTitle);

        introBox.classList.add("onload-intro");
        body!.appendChild(introBox);

        setTimeout(() => {
          introBox.style.opacity = "0";
          main!.style.display = "block";
          nav!.style.display = "flex";
          contact!.style.display='block';
        }, 2100);

        setTimeout(() => {
          body!.removeChild(introBox);
          body!.style.maxHeight = "auto";
          body!.style.overflowY = "visible";
        }, 2700);
      },
      { once: true }
    );

    
  }
}
