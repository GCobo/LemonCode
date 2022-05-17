import axios from 'axios'
import { createCard, createPagination } from './utils.js'

const url = 'https://rickandmortyapi.com/api/character'
const getList = document.querySelector('#character')
const getPagination = document.querySelector('#pagination')
let pages
let data = []

const getCharacters = async (url) => {
  const promise = await axios.get(url)
  data = promise.data.results
  data.map((item) => getList.append(createCard(item)))
}

export const createPage = async () => {
  const promise = await axios.get(url)
  pages = promise.data.info.pages
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
