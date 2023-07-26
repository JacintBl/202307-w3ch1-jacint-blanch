import { type Fighter } from "../../characters/Fighter/Fighter.js";
import { type King } from "../../characters/King/King.js";
import Component from "../Component/Component.js";

class CharacterInfo extends Component {
  character: King | Fighter;
  constructor(parentElement: Element, character: King | Fighter) {
    super(parentElement, "div", "container");
    this.character = character;
  }

  render() {
    this.element.innerHTML = `
      <article class="character">
        <div class="card character__card">
          <img src="" alt="Character's Name and family" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${this.character.characterData.name} & ${this.character.characterData.age}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Age:  yrs</li>
                <li>
                  State:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    `;
  }
}

export default CharacterInfo;
