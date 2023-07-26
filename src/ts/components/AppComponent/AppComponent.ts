import { characters } from "../../characters/character.js";
import CharacterInfo from "../CharacterComponent/CharacterComponent.js";
import Component from "../Component/Component.js";

class AppComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "div", "app-container");
  }

  render() {
    this.element.innerHTML = `
     <ul class="characters-list row list-unstyled">
      </ul>
    `;
    const charactersListElement =
      this.element.querySelector(".characters-list")!;

    const joffreyCharacterDataComponent = new CharacterInfo(
      charactersListElement,
      characters[0]
    );
    joffreyCharacterDataComponent.render();

    const daenerysCharacterDataComponent = new CharacterInfo(
      charactersListElement,
      characters[1]
    );
    daenerysCharacterDataComponent.render();

    const jaimeCharacterData = new CharacterInfo(
      charactersListElement,
      characters[2]
    );
    jaimeCharacterData.render();
  }
}

export default AppComponent;
