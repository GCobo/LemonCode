import axios from 'axios'
import { createCard, createPagination } from './utils.js'

let url = 'https://rickandmortyapi.com/api/character'
const getList = document.querySelector('#character')
const getPagination = document.querySelector('#pagination')

const callUrl = (url) => {
  return axios.get(url)
}

export const getData = () => {
  let data = []
  let pagination = 1

  callUrl(url).then((response) => {
    data = response.data.results
    pagination = response.data.info.pages

    // create card
    data.map((item) => {
      getList.append(createCard(item))
    })
    // create pagination
    for (let i = 0; i < pagination; i++) {
      getPagination.append(createPagination(i + 1))
      document.getElementById(`page-${i + 1}`).addEventListener('click', () => {
        data = []
        callUrl(`${url}?page=${i + 1}`).then((response) => {
          data = response.data.results

          data.map((item) => {
            getList.append(createCard(item))
          })
        })
      })
    }
  })
}
