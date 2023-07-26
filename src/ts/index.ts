import AppComponent from "./components/AppComponent/AppComponent.js";

const appBody = document.querySelector(".app")!;
if (!appBody) {
  throw new Error("Missing Elements");
}

const containerComponent = new AppComponent(appBody);

containerComponent.render();
