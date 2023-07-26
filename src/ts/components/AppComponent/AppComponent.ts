import { characters } from "../../characters/character.js";
import CharacterInfo from "../CharacterComponent/CharacterComponent.js";
import Component from "../Component/Component.js";

class AppComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "div", "container");
  }

  render() {
    this.element.innerHTML = `
      <ul class="characters-list">
        <li class="character-content"></li>
      </ul>
    `;
    const characterContentElement =
      this.element.querySelector(".character-content")!;

    const joffreyCharacterDataComponent = new CharacterInfo(
      characterContentElement,
      characters[0]
    );
    joffreyCharacterDataComponent.render();
  }
}

export default AppComponent;
