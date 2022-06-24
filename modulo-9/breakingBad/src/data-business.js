import { createCharacterRow, showCharacter } from "./utils.js";

export const getCharacters = async () => {
  const root = document.getElementById("root");

  try {
    const response = await fetch(
      "https://www.breakingbadapi.com/api/characters"
    );
    const data = await response.json();
    root.innerHTML = "";
    data.map((item) => {
      root.appendChild(createCharacterRow(item));
      const getElementById = document.getElementById(item.char_id);

      getElementById.addEventListener("click", () => {
        showCharacter(item);
      });
    });
  } catch {
    root.innerHTML = "There was an error";
  }
};
