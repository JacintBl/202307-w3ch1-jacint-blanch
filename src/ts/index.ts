import AppComponent from "./components/AppComponent/AppComponent.js";

const appBody = document.querySelector(".container")!;

const containerComponent = new AppComponent(appBody);

containerComponent.render();
