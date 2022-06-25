import { createCard, createPagination } from "./utils.js";

const apiUrl = "https://rickandmortyapi.com/api/character";
const characters = document.getElementById("character");
const pagination = document.getElementById("pagination");
let page = "1";

const getCharacters = async (innerUrl = page) => {
  try {
    let response = await fetch(`${apiUrl}?page=${innerUrl}`);
    const data = await response.json();
    data.results.map((item) => {
      characters.appendChild(createCard(item));
    });
  } catch {
    characters.innerHTML = "There was an error";
  }
};

export const createPage = async () => {
  getCharacters();

  try {
    let response = await fetch(`${apiUrl}`);
    const data = await response.json();

    for (let i = 1; i <= data.info.pages; i++) {
      pagination.appendChild(createPagination(i));
      let idItem = await document.getElementById(`page-${i}`);
      idItem.addEventListener("click", () => {
        characters.innerHTML = "";
        getCharacters(`${i}`);
      });
    }
  } catch {
    pagination.innerHTML = "There was an error";
  }
};

// añadir detalle de cada personaje llamando a otro endpoint
