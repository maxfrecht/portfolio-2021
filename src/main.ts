import "./styles/style.scss";
import { toggleMenu } from "./ts/burger-menu";
import { loadingAnimation } from "./ts/loading-animation";
import { addListenersOnLearningDiv, navTo, showContact } from "./ts/navigation";
import { parralaxCircle } from "./ts/parralax";

const WhoNavLinkElement: HTMLElement = document.querySelector(
  "nav ul li:nth-of-type(2) a"
)!;
const HomeNavLinkElement: HTMLElement = document.querySelector(
  "nav ul li:nth-of-type(1) a"
)!;
const logoNavLinkElement: HTMLElement = document.querySelector(".brand a")!;
const reaNavLinkElement: HTMLElement | ChildNode = document.querySelector(
  "nav ul li:nth-of-type(3) a"
)!;
const contactNavLinkElement = document.querySelector(
  "nav ul li:nth-of-type(4) a"
)!;

const contactButtonElement = document.querySelector(".now-description .btn")!;

loadingAnimation();
parralaxCircle();
toggleMenu();
showContact(contactNavLinkElement);
showContact(contactButtonElement);
// closeContactOnCLickOutside();
navTo(HomeNavLinkElement);
navTo(logoNavLinkElement);
navTo(WhoNavLinkElement, -90, "-100vw", 0, "100vw", "who");
navTo(reaNavLinkElement, -180, 0, "-100vw", 0, "realisation");
addListenersOnLearningDiv();
