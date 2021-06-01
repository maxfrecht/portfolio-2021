const circlePurpleElement: HTMLElement = document.querySelector(".circle--purple")!;
const circleYellowElement: HTMLElement = document.querySelector(".circle--yellow")!;
const circleGreenElement: HTMLElement = document.querySelector(".circle--green")!;
const circleBlueElement: HTMLElement = document.querySelector(".circle--blue")!;
const bgFaceImgElement: HTMLElement = document.querySelector(".home__intro-bg-face")!;

/**
 * Set listener on the window object on the scroll event.
 * Change position of some elements during scroll
 */
export function parralaxCircle(): void {

  let styleAfter = document.createElement("style");
  document.head.appendChild(styleAfter);
  let steps: NodeListOf<HTMLDivElement> = document.querySelectorAll(".step")!
  let stepsBox: HTMLDivElement = document.querySelector('.steps')!
  window.addEventListener("scroll", () => {
    circlePurpleElement!.style.top = `${25 + window.scrollY * 0.15}%`;
    circleBlueElement!.style.top = `${50 + window.scrollY * 0.18}%`;
    circleYellowElement!.style!.top = `${50 + window.scrollY * 0.1}%`;
    circleGreenElement!.style.top = `${50 + window.scrollY * 0.17}%`;
    bgFaceImgElement!.style.left = `${10 - window.scrollY * 0.015}%`;
    let height = window.scrollY*0.0505;
    styleAfter.innerHTML = `.steps:after {
      height: ${height}%;
    }`;

    // steps.forEach((step, index) => {
    //   if(height > (100/8*(index+1)) - (steps[0].scrollHeight / stepsBox.scrollHeight) * 100) {
    //     // steps[index].style.border = '.3rem solid var(--text)'
    //     styleAfter.innerHTML = `.steps:after {
    //       height: ${height}%;
    //       backgound: linear-gradient()
    //     `
    //     }
    // })
    // styleAfter.innerHTML += '}'
  });
}