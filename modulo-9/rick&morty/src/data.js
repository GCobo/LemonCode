import axios from 'axios'
import { createCard, createPagination } from './utils.js'

const url = 'https://rickandmortyapi.com/api/character'
const getList = document.querySelector('#character')
const getPagination = document.querySelector('#pagination')
let pages
let data = []

const getCharacters = async (url) => {
  const response = await axios.get(url)
  data = response.data.results
  data.map((item) => getList.append(createCard(item)))
}

export const createPage = async () => {
  const response = await axios.get(url)
  pages = response.data.info.pages
  getCharacters(`${url}`)

  for (let i = 0; i < pages; i++) {
    getPagination.append(createPagination(i + 1))
    const getButton = document.getElementById(`page-${i + 1}`)
    getButton.addEventListener('click', () => {
      getList.innerHTML = ''

      getCharacters(`${url}?page=${i + 1}`)
    })
  }
}

// añadir detalle de cada personaje llamando a otro endpoint

